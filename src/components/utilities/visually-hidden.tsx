import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Makes content available to screen readers while remaining visually
 * invisible — e.g., labeling an icon-only control. Has no visual footprint
 * by design; consumed by any future component needing a text alternative.
 * docs/components/09_UTILITIES.md — Visually Hidden.
 */
export type VisuallyHiddenProps = HTMLAttributes<HTMLSpanElement>;

export const VisuallyHidden = forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span ref={ref} className={cn("sr-only", className)} {...props}>
        {children}
      </span>
    );
  },
);

VisuallyHidden.displayName = "VisuallyHidden";
