import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * A small visual marker showing that a field must be completed. Owns only
 * the marking itself, not the field's own required/optional validation
 * logic. Composed into Label when a field is required — not used
 * standalone. The visual symbol is decorative (aria-hidden) — "required"
 * is communicated to assistive technology by the paired input's own
 * `required`/`aria-required` attribute, not by this marker's color or
 * symbol alone (docs/components/04_INPUTS.md — Required Indicator).
 */
export type RequiredIndicatorProps = HTMLAttributes<HTMLSpanElement>;

export const RequiredIndicator = forwardRef<
  HTMLSpanElement,
  RequiredIndicatorProps
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={cn("ml-1 text-muted-foreground", className)}
      {...props}
    >
      *
    </span>
  );
});

RequiredIndicator.displayName = "RequiredIndicator";
