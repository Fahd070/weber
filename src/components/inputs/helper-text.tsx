import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Explains why a piece of information is being requested or how to
 * provide it. Owns its own supplementary text content only; never shown
 * simultaneously with Error Message for the same field (Error Message
 * replaces it, not the reverse). Programmatically associated with its
 * input the same way Label is — typically via `aria-describedby` at the
 * Form Field level. docs/components/04_INPUTS.md — Helper Text.
 */
export type HelperTextProps = HTMLAttributes<HTMLParagraphElement>;

export const HelperText = forwardRef<HTMLParagraphElement, HelperTextProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-caption text-muted-foreground", className)}
        {...props}
      >
        {children}
      </p>
    );
  },
);

HelperText.displayName = "HelperText";
