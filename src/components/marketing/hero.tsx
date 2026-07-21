"use client";

import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Stack } from "@/components/layout/stack";
import { SectionGlow } from "./section-glow";
import {
  entranceReveal,
  MOUNT_REVEAL_FAILSAFE_CLASS,
  SEQUENCE_REVEAL_STEP,
} from "@/components/utilities/scroll-reveal";
import { useSkipRepeatEntrance } from "@/providers/navigation-motion-provider";

/**
 * Introduces Weber and establishes a premium first impression, opening
 * the Confidence Journey — the first section in the approved Home order
 * (DECISIONS.md WD-040). Owns the first-impression arrangement of
 * headline, supporting copy, and an implicit path toward Services/
 * Interactive Showcase; does not own that content itself. Composes
 * Section, Container, Stack. Media (Aspect Ratio) is optional and not
 * implemented here — Aspect Ratio's exact ratio values remain explicitly
 * undecided ("not license to hardcode ratio values,"
 * docs/components/02_LAYOUT.md); with/without media is a content
 * decision anyway, not a component variant, per this component's own
 * Variants field. Must contain the page's primary `<h1>`. Its heading,
 * body, and action reveal in a short staggered sequence on mount (Motion
 * Phase A, Design Evolution, Project Owner approved) — opacity/transform
 * only, no layout impact, and skipped entirely under
 * `prefers-reduced-motion` (Part 6 — Animation Principles). Also skipped
 * (rendered as plain, already-settled elements, same as reduced motion)
 * once this sequence has already played earlier in the current session —
 * Hero is always page-top content, so no viewport-position check is
 * needed the way ScrollReveal needs one (Navigation Performance
 * Optimization, Project Owner approved). A hard refresh starts a new
 * session and plays the full sequence again. Each element branches
 * between a plain tag and its `motion.*` equivalent, rather than always
 * rendering `motion.*` with conditionally-empty props, because that
 * branch decision itself can change between this component's first and
 * second render (`useSkipRepeatEntrance`'s own doc comment explains why)
 * — a plain-tag branch guarantees React fully replaces the DOM node
 * instead of handing an already-mounted Motion instance new props. Each
 * `motion.*` element also carries `MOUNT_REVEAL_FAILSAFE_CLASS`
 * (Production Readiness Audit, Project Owner approved) — a verified,
 * genuine bug where, for a reduced-motion visitor, this static-prerendered
 * page's SSR-baked `initial` state stayed permanently invisible
 * regardless of the branch above correctly resolving `shouldReduceMotion`;
 * see that constant's own doc comment for the full root-cause
 * investigation. The branch above is not redundant with it — `skip` is
 * also driven by `skipRepeatEntrance`, an independent, purely
 * client-side-mounted condition the failsafe does not (and should not)
 * suppress.
 *
 * Renders one `SectionGlow` (Premium Micro-interactions Phase 2, Project
 * Owner approved) — a single soft ambient glow behind the heading, the
 * one place this decoration is authored so every page that opens with
 * Hero (Home, About, every Service Detail page) gets it automatically
 * and identically, with zero duplication at each call site. Purely
 * decorative and `aria-hidden`; never affects layout or the reveal
 * sequence above.
 * docs/components/08_MARKETING.md — Hero.
 */
/**
 * A Hero-local class merge, extending the shared `cn()` helper only where
 * it's actually wrong here: vanilla tailwind-merge has no knowledge of
 * Weber's own `text-display`/`text-body` custom font-size theme keys
 * (WD-027) and, because both happen to share the `text-` prefix,
 * misclassifies them as competing with `text-foreground`/`text-muted-
 * foreground` text-COLOR utilities — silently dropping whichever of the
 * two appears first whenever both are merged in one `cn()` call
 * (reproduced in isolation; confirmed present in this file's motion-branch
 * className even before this phase's own changes — a real, previously
 * undetected bug, not something introduced here). Scoped to this file
 * only, not the shared `cn()` utility used everywhere else, since Hero is
 * currently the one place a custom text-size key and a text-color key are
 * merged together through a variable class list.
 */
const heroTailwindMerge = extendTailwindMerge({
  extend: { classGroups: { "font-size": ["text-display", "text-body"] } },
});
function heroCn(...inputs: Parameters<typeof clsx>) {
  return heroTailwindMerge(clsx(inputs));
}

export interface HeroProps extends HTMLAttributes<HTMLElement> {
  heading: ReactNode;
  body: ReactNode;
  /** Implicit call to action — a CTA Banner or Button element. */
  action?: ReactNode;
  /** Optional per-instance override merged onto the heading's own classes. Defaults to unset — every existing caller keeps its current, unmodified size. */
  headingClassName?: string;
  /** Optional per-instance override merged onto the body's own classes. Defaults to unset — every existing caller keeps its current, unmodified size. */
  bodyClassName?: string;
}

export const Hero = forwardRef<HTMLElement, HeroProps>(
  (
    {
      heading,
      body,
      action,
      className,
      headingClassName,
      bodyClassName,
      ...props
    },
    ref,
  ) => {
    const shouldReduceMotion = useReducedMotion();
    const skipRepeatEntrance = useSkipRepeatEntrance();
    const skip = shouldReduceMotion || skipRepeatEntrance;

    return (
      <Section
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        {...props}
      >
        <SectionGlow className="top-0 right-0 size-96 -translate-y-1/3 translate-x-1/4" />
        <Container className="relative">
          <Stack gap={5} className="items-center text-center">
            {skip ? (
              <h1
                className={heroCn(
                  "text-display font-semibold text-foreground",
                  headingClassName,
                )}
              >
                {heading}
              </h1>
            ) : (
              <motion.h1
                className={heroCn(
                  "text-display font-semibold text-foreground",
                  headingClassName,
                  MOUNT_REVEAL_FAILSAFE_CLASS,
                )}
                {...entranceReveal(0)}
              >
                {heading}
              </motion.h1>
            )}
            {skip ? (
              <p
                className={heroCn(
                  "max-w-reading text-body text-muted-foreground",
                  bodyClassName,
                )}
              >
                {body}
              </p>
            ) : (
              <motion.p
                className={heroCn(
                  "max-w-reading text-body text-muted-foreground",
                  bodyClassName,
                  MOUNT_REVEAL_FAILSAFE_CLASS,
                )}
                {...entranceReveal(SEQUENCE_REVEAL_STEP)}
              >
                {body}
              </motion.p>
            )}
            {action ? (
              skip ? (
                <div>{action}</div>
              ) : (
                <motion.div
                  className={MOUNT_REVEAL_FAILSAFE_CLASS}
                  {...entranceReveal(SEQUENCE_REVEAL_STEP * 2)}
                >
                  {action}
                </motion.div>
              )
            ) : null}
          </Stack>
        </Container>
      </Section>
    );
  },
);

Hero.displayName = "Hero";
