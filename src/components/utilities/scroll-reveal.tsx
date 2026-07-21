"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useSkipRepeatEntrance } from "@/providers/navigation-motion-provider";

/**
 * Subtle, consistent stagger step (seconds) shared by every card grid
 * that uses ScrollReveal, so staggered groups sitewide feel like one
 * language rather than each picking its own timing.
 */
export const SCROLL_REVEAL_STAGGER_STEP = 0.08;

/**
 * Step (seconds) between the reveal of a section's own small, ordered
 * sequence of elements — heading, then body, then action (Premium
 * Micro-interactions Phase 2, Project Owner approved). Already the
 * de-facto sitewide convention before this constant existed: `0.1`/`0.2`
 * appeared as an identical literal in 30+ places (Hero's own
 * heading→body→action reveal, and every page section's
 * heading→paragraph→CTA sequence) — extracted here so it's a named,
 * discoverable part of the same system `SCROLL_REVEAL_STAGGER_STEP`
 * already is, per WD-172's reuse-first requirement, rather than a value
 * every call site quietly agreed on by copying each other. Distinct from
 * `SCROLL_REVEAL_STAGGER_STEP`: that one paces *many* same-weight grid
 * items; this one paces a *short, fixed* narrative sequence within one
 * section (typically 2–3 steps).
 */
export const SEQUENCE_REVEAL_STEP = 0.1;

/**
 * The single entrance-reveal motion values (opacity 0→1, y 12→0, 0.4s
 * easeOut) shared sitewide (Final UX Polish, Project Owner approved) —
 * previously three separately-typed identical `{ initial, animate,
 * transition }` literals (this component's own `motion.div` below, Hero's
 * local `reveal()` helper, and Interactive Showcase's Generation Sequence),
 * per WD-172's "extract, don't duplicate" requirement — the same
 * reasoning that already produced `hover-tokens.ts`. Returns the full
 * triple rather than just the transition object, since `initial`/`animate`
 * were identical at all three call sites too, not only the timing.
 * Consumers that trigger on scroll (this component) pass the `animate`
 * value to their own `whileInView` prop instead — the values are
 * unaffected, only which Motion prop they're assigned to differs.
 */
export function entranceReveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay, ease: "easeOut" as const },
  };
}

/**
 * CSS-level failsafe for `entranceReveal()`'s own `initial` styles, and
 * for the same `initial`/`animate` mount-transition shape authored
 * directly elsewhere (Header, Brand Link) rather than through
 * `entranceReveal()` itself (Production Readiness Audit, Project Owner
 * approved, root-caused via computed-style verification). Every route is
 * static-prerendered, so the server always bakes in the invisible
 * `initial` state — for a visitor with `prefers-reduced-motion: reduce`,
 * `useReducedMotion()` only resolves via a `useState` initializer read
 * once, on this component's own first client render (confirmed by
 * inspecting `useReducedMotion`'s own source in `framer-motion`: it never
 * updates after mount), and empirically this does not reliably correct a
 * *mount-triggered* (`initial`/`animate`, not `whileInView`) component's
 * already-hydrated inline style in every browser/timing scenario — the
 * component was verified to stay frozen at `opacity:0` indefinitely, not
 * merely delayed. `ScrollReveal`'s own `whileInView`-triggered elements
 * do not exhibit this (verified separately: their reduced-motion branch
 * correctly resolves), so this failsafe is scoped to mount-triggered
 * entrance animation only, not applied broadly. `!important` is required
 * since Motion writes these values as an inline `style`, which a
 * stylesheet rule can only override with `!important` (Tailwind v4's
 * trailing-`!` important modifier, verified against compiled output).
 */
export const MOUNT_REVEAL_FAILSAFE_CLASS =
  "motion-reduce:opacity-100! motion-reduce:[transform:none]!";

export interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Additional delay (seconds) before this element's reveal starts — used to stagger items within a group. */
  delay?: number;
}

/**
 * Reveals its children with the exact same motion pattern already
 * established for Hero in Motion Phase A — opacity plus a slight upward
 * movement, ease-out, short duration — except triggered once the
 * element first scrolls into view rather than on mount (Motion Phase B,
 * Design Evolution, Project Owner approved). A single shared wrapper so
 * every section and card sitewide reuses one reveal implementation
 * instead of duplicating Motion props at each call site. Under
 * `prefers-reduced-motion`, renders a plain element with no transform
 * and no delay — content is immediately visible, matching this phase's
 * explicit accessibility requirement.
 *
 * Also renders already-settled (same as reduced motion) once this
 * session has already shown its first entrance sequence, but — unlike
 * Hero, which is always page-top content — only for instances that are
 * already inside the viewport at mount (Navigation Performance
 * Optimization, Project Owner approved). That check happens synchronously
 * in a layout effect, before the browser paints, so the corrected,
 * already-settled output is the only thing ever visible — there is no
 * flash of the animating version and no in-flight animation is ever
 * interrupted. Content that is not yet in the viewport at mount is left
 * completely untouched by this check and keeps animating in on every
 * genuine scroll-into-view, on every visit, exactly as before — the
 * skip applies only to the instances that would otherwise replay a
 * reveal the visitor has already seen without ever having scrolled.
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const skipRepeatEntrance = useSkipRepeatEntrance();
  const ref = useRef<HTMLDivElement>(null);
  const [skipAlreadyVisible, setSkipAlreadyVisible] = useState(false);

  useLayoutEffect(() => {
    if (!skipRepeatEntrance || !ref.current) {
      return;
    }
    const isAboveFold =
      ref.current.getBoundingClientRect().top < window.innerHeight;
    if (isAboveFold) {
      setSkipAlreadyVisible(true);
    }
  }, [skipRepeatEntrance]);

  if (shouldReduceMotion || skipAlreadyVisible) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  const reveal = entranceReveal(delay);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reveal.initial}
      whileInView={reveal.animate}
      viewport={{ once: true }}
      transition={reveal.transition}
    >
      {children}
    </motion.div>
  );
}
