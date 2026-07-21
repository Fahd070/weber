"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import type { MotionReservedHandlers } from "@/lib/motion-types";
import {
  BUTTON_HOVER_LIFT,
  HOVER_TRANSITION,
  TAP_SCALE,
} from "@/lib/hover-tokens";
import { Spinner } from "@/components/feedback/spinner";

/**
 * Official Version 1 visual variant set (DECISIONS.md WD-136): primary,
 * secondary, accent — filled-only, default primary. Destructive, Success,
 * Warning, Ghost, Outline, and Link were each evaluated and found not part
 * of Version 1. docs/components/04_INPUTS.md — Button.
 */
export type ButtonVariant = "primary" | "secondary" | "accent";

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: "bg-primary text-background",
  secondary: "bg-secondary text-background",
  accent: "bg-accent text-primary",
};

const BUTTON_BASE_CLASS =
  "inline-flex items-center justify-center rounded-md px-6 py-3 text-button font-medium transition-colors duration-standard ease-in-out hover:opacity-90 active:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed";

/**
 * Button's visual treatment (base shape + variant color), exposed so other
 * components that need to look like a Button without being a native
 * `<button>` element (e.g. CTA inside Navigation, which must be a real
 * link — Button itself "does not own a link's destination/navigation
 * logic") can reuse it instead of duplicating the class list.
 */
export function buttonVariants(variant: ButtonVariant = "primary") {
  return cn(BUTTON_BASE_CLASS, VARIANT_CLASS[variant]);
}

export interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  MotionReservedHandlers
> {
  /** Visual variant (DECISIONS.md WD-136). Defaults to "primary". */
  variant?: ButtonVariant;
  /**
   * Loading state (docs/components/04_INPUTS.md — Button, States).
   * Disables interaction and communicates busy status to assistive
   * technology via aria-busy, not a visual-only treatment (DECISIONS.md
   * WD-050, WD-060). Also renders the shared Spinner primitive (WD-048,
   * docs/components/05_FEEDBACK.md — Spinner, "used by Form's Submitting
   * state") beside the label, which announces `loadingLabel` via Live
   * Region Announcer.
   */
  loading?: boolean;
  /** Text Spinner announces to assistive technology while loading. Defaults to "Loading". */
  loadingLabel?: string;
}

/**
 * A generic, reusable interactive control that triggers an action
 * (docs/components/04_INPUTS.md — Button). Owns its own interactive
 * states; does not own a link's destination/navigation logic or any
 * specific copy/content it displays (DECISIONS.md WD-010). Carries the
 * same subtle hover lift/scale and tap feedback used sitewide for CTA
 * links (Motion Phase B, Design Evolution, Project Owner approved) —
 * suppressed while disabled/loading and under `prefers-reduced-motion`.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      loading = false,
      loadingLabel = "Loading",
      disabled,
      type = "button",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const shouldReduceMotion = useReducedMotion();
    const isDisabled = disabled || loading;

    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        whileHover={
          shouldReduceMotion || isDisabled ? undefined : BUTTON_HOVER_LIFT
        }
        whileTap={shouldReduceMotion || isDisabled ? undefined : TAP_SCALE}
        transition={HOVER_TRANSITION}
        className={cn(buttonVariants(variant), loading && "gap-2", className)}
        {...props}
      >
        {loading ? (
          <Spinner label={loadingLabel} iconClassName="size-4 text-current" />
        ) : null}
        {children}
      </motion.button>
    );
  },
);

Button.displayName = "Button";
