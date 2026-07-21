import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Weber's ten-step spacing scale (DECISIONS.md WD-030), keyed by its own
 * space.1–space.10 numbering rather than Tailwind's differently-numbered
 * default gap-* scale. Shared with Cluster, which follows "the same
 * discipline as Stack" (docs/components/02_LAYOUT.md — Cluster).
 */
export type SpacingStep = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export const GAP_CLASS: Record<SpacingStep, string> = {
  1: "gap-1", // space.1 — 4px
  2: "gap-2", // space.2 — 8px
  3: "gap-3", // space.3 — 12px
  4: "gap-4", // space.4 — 16px
  5: "gap-6", // space.5 — 24px
  6: "gap-8", // space.6 — 32px
  7: "gap-12", // space.7 — 48px
  8: "gap-16", // space.8 — 64px
  9: "gap-24", // space.9 — 96px
  10: "gap-32", // space.10 — 128px
};

/**
 * Arranges children in a single-axis (vertical) rhythm with consistent
 * spacing between them. Owns spacing between direct children only — never
 * reorders them. docs/components/02_LAYOUT.md — Stack.
 */
export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  /** Spacing scale step between children. Defaults to space.4 (16px). */
  gap?: SpacingStep;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ gap = 4, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex min-w-0 flex-col", GAP_CLASS[gap], className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Stack.displayName = "Stack";
