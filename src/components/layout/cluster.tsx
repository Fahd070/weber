import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { GAP_CLASS, type SpacingStep } from "./stack";

/**
 * Arranges children in a wrapped, horizontal grouping — for content that
 * doesn't need Stack's strict single-axis rhythm or Grid's two-dimensional
 * structure. Owns horizontal spacing and wrapping between direct children
 * only. Uses the same spacing-scale discipline as Stack (DECISIONS.md
 * WD-030). docs/components/02_LAYOUT.md — Cluster.
 */
export interface ClusterProps extends HTMLAttributes<HTMLDivElement> {
  /** Spacing scale step between children. Defaults to space.4 (16px). */
  gap?: SpacingStep;
}

export const Cluster = forwardRef<HTMLDivElement, ClusterProps>(
  ({ gap = 4, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-row flex-wrap items-center",
          GAP_CLASS[gap],
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Cluster.displayName = "Cluster";
