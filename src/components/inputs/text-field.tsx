import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * A single-line text input — the primitive behind the Interactive
 * Showcase's company-name input and any Contact form text field. Owns its
 * own value, focus, and validation-display state; does not own the
 * overall field's label/helper/error presentation (Form Field's job).
 * Format-specific configuration (email, phone, etc.) is expressed through
 * Zod schemas (DECISIONS.md WD-021) applied to this same component, not
 * separate components. Always paired with a visible Label — never
 * placeholder-only (WD-046); validation state is communicated via
 * `aria-invalid`, programmatically associating errors rather than relying
 * on color alone. Hover brightens the border a step (`border-border` →
 * `border-neutral-500`, both already-approved neutral-scale tokens,
 * WD-129 — no new color) — a genuine gap this component previously had
 * (Premium Forms Phase 1, Project Owner approved): every other
 * interactive surface in the product already had a hover state, this one
 * didn't. Suppressed while `disabled` (`disabled:hover:border-border`),
 * matching every other component's own hover-vs-disabled precedent.
 * Duration raised from `duration-micro` (150ms) to `duration-standard`
 * (200ms) — the same unification Premium Micro-interactions Phase 1
 * already applied to Card/Button, so this field's own hover/focus/
 * invalid color transitions finish in the same rhythm as everything else
 * on the page rather than visibly settling faster. Browser autofill is
 * restyled to the same background/foreground tokens (Premium Forms Phase
 * 2, Project Owner approved) — Chromium/Safari ignore plain
 * `background-color`/`color` on an autofilled field, so this needs the
 * `-webkit-text-fill-color` + inset `box-shadow` technique specifically;
 * both the standard `:autofill` (`autofill:`, Firefox and modern engines)
 * and the `-webkit-autofill` (older Chromium/Safari) pseudo-classes are
 * covered so autofill looks intentional rather than the browser's default
 * yellow highlight. docs/components/04_INPUTS.md — Text Field.
 */
export type TextFieldProps = InputHTMLAttributes<HTMLInputElement>;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "w-full rounded-md border border-border bg-background px-4 py-3",
          "text-body text-foreground placeholder:text-muted-foreground",
          "transition-colors duration-standard ease-in-out",
          "hover:border-neutral-500",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "aria-invalid:border-danger",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-border",
          "autofill:shadow-[inset_0_0_0_1000px_var(--color-background)] autofill:[-webkit-text-fill-color:var(--color-foreground)]",
          "[&:-webkit-autofill]:shadow-[inset_0_0_0_1000px_var(--color-background)] [&:-webkit-autofill]:[-webkit-text-fill-color:var(--color-foreground)] [&:-webkit-autofill]:[transition:background-color_5000s_ease-in-out_0s]",
          className,
        )}
        {...props}
      />
    );
  },
);

TextField.displayName = "TextField";
