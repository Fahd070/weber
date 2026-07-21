import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * A structural separator between content, communicating a boundary without
 * a full Section break. Deliberately plain — no variants beyond the
 * `radius.none` border radius already named for it (DECISIONS.md WD-031).
 * Color is drawn from the Neutral semantic role (WD-036, WD-130) via the
 * `--color-border` token. Purely decorative: hidden from assistive
 * technology by default, since no semantic-meaning decision has been made
 * for it (docs/components/02_LAYOUT.md — Divider, "an implementation
 * decision, out of scope here").
 */
export type DividerProps = HTMLAttributes<HTMLDivElement>;

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("w-full rounded-none border-t border-border", className)}
        aria-hidden="true"
        {...props}
      />
    );
  },
);

Divider.displayName = "Divider";
