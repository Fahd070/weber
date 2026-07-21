"use client";

import { useId, useState, type HTMLAttributes, type ReactNode } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { cn } from "@/lib/utils";
import type { MotionReservedHandlers } from "@/lib/motion-types";
import { MOUNT_REVEAL_FAILSAFE_CLASS } from "@/components/utilities/scroll-reveal";
import { Container } from "@/components/layout/container";
import { Cluster } from "@/components/layout/cluster";
import { BrandLink } from "./brand-link";
import { NavigationMenu } from "./navigation-menu";
import { MobileNavigationToggle } from "./mobile-navigation-toggle";
import { CtaInsideNavigation } from "./cta-inside-navigation";
import { WhatsAppCta } from "./whatsapp-cta";

/**
 * The landmark region that fills App Shell's Navigation slot — composes
 * Brand Link, Navigation Menu, the CTA element, and Mobile Navigation
 * Toggle into one persistent, recognizable unit, arranged via Cluster
 * inside a Container. One Header for the entire product; no variants.
 * Navigation Menu's actual items are supplied by the caller (`navItems`) —
 * the root layout supplies Primary Nav, rendering Weber's approved
 * Version 1 destinations (DECISIONS.md WD-043). Mobile Navigation Toggle documents
 * that it "owns its own open/closed state," but that state must be shared
 * with the Navigation Menu it controls — Header, as the common composer
 * of both, is where that coordination lives. Reveals with a brief,
 * subtle fade/downward settle on initial mount (Motion Phase A, Design
 * Evolution, Project Owner approved) — opacity/transform only, skipped
 * under `prefers-reduced-motion`. Also carries `MOUNT_REVEAL_FAILSAFE_CLASS`
 * (Production Readiness Audit, Project Owner approved) — a verified,
 * genuine bug where this mount transition's SSR-baked `initial` state
 * (every route is static-prerendered) stayed permanently invisible for
 * reduced-motion visitors regardless of `useReducedMotion()`'s own
 * (correct) value; see that constant's own doc comment for the full
 * root-cause investigation. CTA inside Navigation and WhatsApp CTA render
 * unconditionally at every breakpoint (Mobile Header Alignment, Project
 * Owner approved) — previously `hidden` below the `md` tier, they now
 * stay grouped with Mobile Navigation Toggle in this same inner Cluster
 * at every width, matching the grouping this Cluster already produced
 * between `md` and `lg`. No new positioning logic: the existing
 * `justify-between` outer Cluster and this inner Cluster's own `gap-3`
 * already placed them correctly: the only change is that they're no
 * longer hidden on the smallest viewports.
 *
 * Sticky with a premium glass transition on scroll (Premium Sticky
 * Header, Project Owner approved): `position: sticky` rather than
 * `fixed`, since sticky keeps Header in normal document flow — no
 * compensating padding needed anywhere else, zero layout shift, "do not
 * change spacing" satisfied by construction rather than by care. Uses
 * `z-sticky` (DECISIONS.md WD-133), the z-index step already named
 * "Header" in the token file though never wired to an actual sticky
 * position until now. Scroll position is tracked via Motion's own
 * `useScroll`/`useMotionValueEvent` (already a Weber dependency,
 * already used sitewide for every other animation) rather than a
 * hand-rolled scroll listener — Motion's `scrollY` MotionValue is
 * already passively/rAF-batched internally, and subscribing via
 * `useMotionValueEvent` never itself triggers a re-render; the
 * `scrolled` boolean only actually changes (and only then re-renders)
 * at the two real threshold crossings, not on every scroll tick. At the
 * very top, the background is `bg-background` — the same solid color
 * the page itself already used behind an unstyled Header, so the "top"
 * appearance is pixel-identical to before this phase. Past the
 * threshold, it becomes `bg-background/80` plus `backdrop-blur-md` — a
 * translucent glass panel over a still-legible, still-opaque-enough
 * background, never full transparency. The border, spacing, layout, and
 * logo are untouched in both states. The cross-fade uses Tailwind's
 * `transition` (already covers `background-color`/`backdrop-filter`)
 * with existing motion tokens (`duration-standard`, `ease-in-out`) and
 * `motion-reduce:transition-none` — the same reduced-motion technique
 * already established for Accordion's panel — so the glass effect still
 * applies under `prefers-reduced-motion`, it just stops cross-fading and
 * switches state instantly instead.
 * docs/components/03_NAVIGATION.md — Header.
 */

/** Scroll distance (px) past which Header switches to its glass state — small enough to feel immediate, large enough to ignore incidental overscroll/rubber-banding at the very top. */
const SCROLL_THRESHOLD_PX = 8;
export interface HeaderProps extends Omit<
  HTMLAttributes<HTMLElement>,
  MotionReservedHandlers
> {
  /** Navigation Item instances (or any content) for Navigation Menu. */
  navItems: ReactNode;
}

export function Header({ navItems, className, ...props }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > SCROLL_THRESHOLD_PX);
  });

  return (
    <motion.header
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "sticky top-0 z-sticky border-b border-border transition motion-reduce:transition-none duration-standard ease-in-out",
        MOUNT_REVEAL_FAILSAFE_CLASS,
        scrolled ? "bg-background/80 backdrop-blur-md" : "bg-background",
        className,
      )}
      {...props}
    >
      <Container>
        <Cluster gap={4} className="justify-between py-3">
          <BrandLink />
          <NavigationMenu id={menuId} open={open}>
            {navItems}
          </NavigationMenu>
          <Cluster gap={3}>
            <CtaInsideNavigation />
            <WhatsAppCta />
            <MobileNavigationToggle
              open={open}
              onToggle={() => setOpen((prev) => !prev)}
              controls={menuId}
              className="lg:hidden"
            />
          </Cluster>
        </Cluster>
      </Container>
    </motion.header>
  );
}
