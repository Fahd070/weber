import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * A block with exactly one job (Part 4 — Every Section Has One Job).
 * Owns its own vertical spacing boundary; does not own what's inside it.
 * Default vertical padding is space.8 (64px) — the spacing-scale step
 * DESIGN_TOKENS.md §4 names "Section — gap between one section and the
 * next" (DECISIONS.md WD-030).
 * docs/components/02_LAYOUT.md — Section.
 */
export type SectionProps = HTMLAttributes<HTMLElement>;

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <section ref={ref} className={cn("py-16", className)} {...props}>
        {children}
      </section>
    );
  },
);

Section.displayName = "Section";
