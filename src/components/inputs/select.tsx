import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * A categorical-choice control — the primitive behind the Interactive
 * Showcase's business-type selector (DECISIONS.md WD-005). Owns its own
 * selected value and open/closed state; does not own the overall field's
 * label/helper/error presentation (Form Field's job). Renders a native
 * `<select>` rather than a custom listbox: keyboard operability
 * (arrow-key selection, escape-to-close) and assistive-technology
 * announcement of open/closed state and selected value come from the
 * platform for free, satisfying this component's Accessibility
 * requirement more robustly than a hand-built alternative — and no other
 * implemented component in this codebase uses Radix UI (WD-017) despite
 * it being the approved system, so introducing it for just this one
 * component would be a new, unjustified dependency (CODING_STANDARDS.md
 * Performance Rules: native capability first). One consequence of this
 * choice: the dropdown's own open/close transition is browser-controlled
 * and cannot be styled with Weber's motion tokens (WD-033) the way
 * Accordion's expand/collapse can. Styled identically to Text Field —
 * same border, radius, focus ring, and `aria-invalid` treatment — since
 * both are single-value form primitives with the same visual weight, including Text Field's own hover state and
 * duration-standard timing (Final UX Polish, Project Owner approved):
 * this component's own hover/duration had drifted out of parity with
 * Text Field's Premium Forms Phase 1 update, restored here to match this
 * doc comment's own long-standing parity claim.
 * docs/components/04_INPUTS.md — Select.
 */
export type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "w-full rounded-md border border-border bg-background px-4 py-3",
          "text-body text-foreground",
          "transition-colors duration-standard ease-in-out",
          "hover:border-neutral-500",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "aria-invalid:border-danger",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-border",
          className,
        )}
        {...props}
      >
        {children}
      </select>
    );
  },
);

Select.displayName = "Select";
