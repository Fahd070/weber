"use client";

import { forwardRef, type AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { HOVER_TRANSITION, ICON_HOVER_SCALE } from "@/lib/hover-tokens";
import { MOUNT_REVEAL_FAILSAFE_CLASS } from "@/components/utilities/scroll-reveal";
import { VisuallyHidden } from "@/components/utilities/visually-hidden";

/**
 * The logo, wrapped in a link back to Home — Weber's persistent,
 * universally expected brand anchor. Wraps the official Weber logo
 * (DECISIONS.md WD-004, the single source of truth for brand identity,
 * `public/weber-logo.png` — a servable copy of the canonical
 * `weber logo.png` at the project root, never redesigned without
 * explicit Project Owner approval) alongside the "Weber" wordmark
 * (Design Evolution Phase 1, Project Owner approved). One Brand Link, no
 * variants. Uses next/link (DECISIONS.md
 * WD-014) for internal navigation. The hover scale is Motion's (WD-018)
 * first real usage in this codebase, gated behind `useReducedMotion` so
 * it never runs for visitors who have requested reduced motion (Part 6 —
 * Animation Principles). The image stays decorative (`alt=""`) now that
 * the wordmark supplies the same information as visible text; the
 * accessible name is built entirely from that visible content plus a
 * VisuallyHidden ", Home" suffix — not a hand-written `aria-label` — so
 * it always contains the full visible label (WCAG 2.5.3, Label in Name)
 * without risking the two drifting out of sync. Also fades/settles in on
 * initial mount, slightly after Header's own reveal (Motion Phase A,
 * Design Evolution, Project Owner approved) — scoped as its own
 * `animate` transition so it never affects the hover interaction's
 * timing, which stays exactly as originally implemented. `showWordmark`
 * and `size` (Footer Enhancement phase, Project Owner approved) let the
 * Footer render a larger, logo-only variant without a second Brand Link
 * implementation — both default to Header's exact existing appearance,
 * so Header needed zero changes. When the wordmark is hidden, the same
 * "Weber" text moves into VisuallyHidden instead of disappearing, so the
 * accessible name is unaffected either way. Both mount-animated elements
 * also carry `MOUNT_REVEAL_FAILSAFE_CLASS` (Production Readiness Audit,
 * Project Owner approved) — the same verified fix Header needed; see that
 * constant's own doc comment for the full root-cause investigation.
 * docs/components/03_NAVIGATION.md — Brand Link.
 */
export type BrandLinkSize = "default" | "large";

const LOGO_SIZE: Record<BrandLinkSize, { px: number; className: string }> = {
  default: { px: 40, className: "size-10" },
  large: { px: 64, className: "size-16" },
};

/** Shared mount-in timing for the logo mark and wordmark below (Final UX Polish, Project Owner approved) — was two identical inline literals; extracted since both use the exact same 0.3s/0.1s-delay easeOut settle. */
const MOUNT_SETTLE_TRANSITION = {
  duration: 0.3,
  delay: 0.1,
  ease: "easeOut" as const,
};

export interface BrandLinkProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> {
  /** Whether "Weber" renders as visible text beside the logo. Defaults to true (Header's existing behavior). */
  showWordmark?: boolean;
  /** Logo size variant. Defaults to "default" (Header's existing 40px logo). */
  size?: BrandLinkSize;
}

export const BrandLink = forwardRef<HTMLAnchorElement, BrandLinkProps>(
  ({ className, showWordmark = true, size = "default", ...props }, ref) => {
    const shouldReduceMotion = useReducedMotion();
    const logoSize = LOGO_SIZE[size];

    return (
      <Link
        ref={ref}
        href="/"
        className={cn(
          "inline-flex items-center gap-3 p-3",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className,
        )}
        {...props}
      >
        {/* Plain <img> (wrapped in motion.img, which @next/next/no-img-element
            does not flag) is deliberate: next/image's optimization technique
            (format, quality, loader) is not an approved decision
            (PERFORMANCE_GUIDE.md §3.2 names "Images" as a target without an
            approved technique). */}
        <motion.img
          src="/weber-logo.png"
          alt=""
          width={logoSize.px}
          height={logoSize.px}
          className={cn(logoSize.className, MOUNT_REVEAL_FAILSAFE_CLASS)}
          initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.94 }}
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: 1, scale: 1, transition: MOUNT_SETTLE_TRANSITION }
          }
          whileHover={
            shouldReduceMotion
              ? undefined
              : { ...ICON_HOVER_SCALE, transition: HOVER_TRANSITION }
          }
        />
        {showWordmark ? (
          <motion.span
            className={cn(
              "text-body font-semibold text-foreground",
              MOUNT_REVEAL_FAILSAFE_CLASS,
            )}
            initial={shouldReduceMotion ? undefined : { opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1 }}
            transition={MOUNT_SETTLE_TRANSITION}
          >
            Weber
          </motion.span>
        ) : (
          <VisuallyHidden>Weber</VisuallyHidden>
        )}
        <VisuallyHidden> — Home</VisuallyHidden>
      </Link>
    );
  },
);

BrandLink.displayName = "BrandLink";
