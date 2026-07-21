import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * A multi-line text input, for longer free-text entry than Text Field
 * comfortably supports — the primitive behind the Contact form's Message
 * field (DECISIONS.md WD-139). Owns its own value, focus, and
 * validation-display state; does not own the overall field's
 * label/helper/error presentation (Form Field's job). Same interaction
 * philosophy, token usage, `aria-invalid` treatment, and hover/duration
 * unification as Text Field (Premium Forms Phase 1, Project Owner
 * approved) — "None beyond Text Field's variant discipline"
 * (docs/components/04_INPUTS.md — Text Area, Variants).
 * docs/components/04_INPUTS.md — Text Area. Deliberately does NOT get
 * Text Field's autofill restyling (Premium Forms Phase 2, Project Owner
 * approved): browsers do not autofill freeform multiline text from saved
 * profile data, so there is no autofilled state here to style.
 */
export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, rows = 4, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        className={cn(
          "w-full resize-y rounded-md border border-border bg-background px-4 py-3",
          "text-body text-foreground placeholder:text-muted-foreground",
          "transition-colors duration-standard ease-in-out",
          "hover:border-neutral-500",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "aria-invalid:border-danger",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-border",
          className,
        )}
        {...props}
      />
    );
  },
);

TextArea.displayName = "TextArea";
