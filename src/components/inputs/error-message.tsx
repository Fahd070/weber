import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * States what went wrong with a specific field's value and how to fix it
 * (DECISIONS.md WD-046). Field-scoped — distinct from the Feedback
 * category's future system-level Error message type (WD-049); this is
 * never a toast or page-level alert. Shown only when its paired input is
 * in an Error state, displacing Helper Text. `role="alert"` announces it
 * to assistive technology the moment it appears, since it's a dynamic
 * content change (WD-050, WD-060). Color from the Danger semantic role
 * (WD-036, WD-130). docs/components/04_INPUTS.md — Error Message.
 */
export type ErrorMessageProps = HTMLAttributes<HTMLParagraphElement>;

export const ErrorMessage = forwardRef<HTMLParagraphElement, ErrorMessageProps>(
  ({ className, children, role = "alert", ...props }, ref) => {
    return (
      <p
        ref={ref}
        role={role}
        className={cn("text-caption text-danger", className)}
        {...props}
      >
        {children}
      </p>
    );
  },
);

ErrorMessage.displayName = "ErrorMessage";
