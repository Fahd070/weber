import { forwardRef, type LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { RequiredIndicator } from "./required-indicator";

/**
 * The visible text identifying what a field collects — mandatory per
 * "labels remain visible at all times... never placeholder-only"
 * (DECISIONS.md WD-046). Owns its own text content and association with
 * its paired input (via native `htmlFor`/`id`); does not own the input's
 * own value or state. Composes Required Indicator when its field is
 * required. docs/components/04_INPUTS.md — Label.
 */
export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /** Whether the paired field is required — composes Required Indicator. */
  required?: boolean;
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ required = false, className, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn("text-body font-medium text-foreground", className)}
        {...props}
      >
        {children}
        {required ? <RequiredIndicator /> : null}
      </label>
    );
  },
);

Label.displayName = "Label";
