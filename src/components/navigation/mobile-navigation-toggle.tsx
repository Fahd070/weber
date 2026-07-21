"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import type { MotionReservedHandlers } from "@/lib/motion-types";
import { VisuallyHidden } from "@/components/utilities/visually-hidden";

/**
 * Triggers Navigation Menu's collapsed state open or closed on smaller
 * viewports. Owns its own open/closed state and the act of triggering
 * Navigation Menu's visibility — controlled from outside (via `open`/
 * `onToggle`) so it can coordinate with Navigation Menu, which it does not
 * itself compose.
 *
 * Renders its own three-bar glyph and morphs it into an X via Motion's
 * `animate` prop (Mobile Navigation Animation, revised in the Genuine
 * Differentiation Pass, both Project Owner approved) — a direct,
 * explicit reversal of this file's own earlier choice to cross-fade
 * between Lucide's `Menu`/`X` icons instead, after the Project Owner
 * asked twice for a literal morph rather than a fade. Reconsidered here
 * as: this is a single interactive control's own animation, not a
 * request for a new *static* icon glyph outside Lucide (DECISIONS.md
 * WD-019, which governs the icon family used for concepts throughout
 * the product) — the same distinction Header's own Motion-driven
 * entrance animation, or Accordion's animated chevron-equivalent
 * disclosure state, already draw between "an icon" and "a control's own
 * interaction feedback." All three bars are always mounted; only their
 * `rotate`/`y` transform animates, so the layout box for `justify-
 * between` (which gives the three bars perfectly equal spacing for
 * free, without hand-computed pixel offsets) never changes and nothing
 * reflows — purely compositor-level animation. Every bar's `animate`
 * value is always the value for the *current* `open` state (never
 * `undefined`) — unlike this component's earlier cross-fade, there is
 * no CSS-only fallback shape here, so `prefers-reduced-motion` is
 * respected by setting `transition.duration` to `0` instead: the shape
 * still updates correctly and instantly, it simply doesn't animate.
 * docs/components/03_NAVIGATION.md — Mobile Navigation Toggle.
 */
export interface MobileNavigationToggleProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onToggle" | MotionReservedHandlers
> {
  /** Whether Navigation Menu is currently open. */
  open: boolean;
  /** Invoked to flip the open/closed state. */
  onToggle: () => void;
  /** id of the Navigation Menu element this toggle controls (aria-controls). */
  controls?: string;
}

const BAR_CLASS = "h-0.5 w-full rounded-full bg-current";

export const MobileNavigationToggle = forwardRef<
  HTMLButtonElement,
  MobileNavigationToggleProps
>(({ open, onToggle, controls, className, type = "button", ...props }, ref) => {
  const shouldReduceMotion = useReducedMotion();
  const transition = {
    duration: shouldReduceMotion ? 0 : 0.3,
    ease: "easeInOut" as const,
  };

  return (
    <button
      ref={ref}
      type={type}
      onClick={onToggle}
      aria-expanded={open}
      aria-controls={controls}
      className={cn(
        "inline-flex items-center justify-center rounded-md p-3",
        "transition-colors duration-standard ease-in-out hover:opacity-90 active:opacity-80",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className="flex h-4 w-5 flex-col justify-between"
      >
        <motion.span
          className={BAR_CLASS}
          style={{ transformOrigin: "center" }}
          animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          transition={transition}
        />
        <motion.span
          className={BAR_CLASS}
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          transition={transition}
        />
        <motion.span
          className={BAR_CLASS}
          style={{ transformOrigin: "center" }}
          animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          transition={transition}
        />
      </span>
      <VisuallyHidden>{open ? "Close menu" : "Open menu"}</VisuallyHidden>
    </button>
  );
});

MobileNavigationToggle.displayName = "MobileNavigationToggle";
