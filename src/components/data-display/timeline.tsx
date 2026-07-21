import { forwardRef, type CSSProperties, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { GAP_CLASS, type SpacingStep } from "@/components/layout/stack";
import type { GridColumns } from "@/components/layout/grid";

/**
 * Presents Weber's process as an ordered sequence of steps — the direct
 * implementation of the Home Process section (DECISIONS.md WD-040,
 * WD-042, WD-142). Owns the ordered, step-by-step presentation only, not
 * the process content itself. Renders as a real `<ol>` so its sequential
 * nature is conveyed to assistive technology structurally, not only
 * visually. Defaults to a single vertical column; an optional `cols`
 * prop arranges steps via Grid's own CSS mechanism instead (DECISIONS.md
 * WD-137/WD-138 — value-agnostic, no built-in default), applied directly
 * to this `<ol>` rather than nesting a literal `<Grid>` (a `<div>`)
 * inside it, preserving list semantics — the same technique already used
 * to extend Feature List for the Why Weber section.
 * docs/components/06_DATA_DISPLAY.md — Timeline.
 */
export interface TimelineProps extends HTMLAttributes<HTMLOListElement> {
  /** Spacing scale step between steps (DECISIONS.md WD-030). Defaults to space.6 (32px). */
  gap?: SpacingStep;
  /** Column count per breakpoint tier. Omitted by default, preserving the original single-column vertical layout. */
  cols?: GridColumns;
}

type TimelineStyle = CSSProperties & {
  "--grid-cols-base"?: number;
  "--grid-cols-md"?: number;
  "--grid-cols-lg"?: number;
  "--grid-cols-xl"?: number;
};

export const Timeline = forwardRef<HTMLOListElement, TimelineProps>(
  ({ gap = 6, cols, style, className, children, ...props }, ref) => {
    const gridStyle: TimelineStyle | undefined = cols
      ? {
          ...style,
          "--grid-cols-base": cols.base,
          ...(cols.md !== undefined && { "--grid-cols-md": cols.md }),
          ...(cols.lg !== undefined && { "--grid-cols-lg": cols.lg }),
          ...(cols.xl !== undefined && { "--grid-cols-xl": cols.xl }),
        }
      : style;

    return (
      <ol
        ref={ref}
        style={gridStyle}
        className={cn(
          "list-none",
          cols && "grid",
          cols && "grid-cols-[repeat(var(--grid-cols-base),minmax(0,1fr))]",
          cols &&
            "md:grid-cols-[repeat(var(--grid-cols-md,var(--grid-cols-base)),minmax(0,1fr))]",
          cols &&
            "lg:grid-cols-[repeat(var(--grid-cols-lg,var(--grid-cols-md,var(--grid-cols-base))),minmax(0,1fr))]",
          cols &&
            "xl:grid-cols-[repeat(var(--grid-cols-xl,var(--grid-cols-lg,var(--grid-cols-md,var(--grid-cols-base)))),minmax(0,1fr))]",
          !cols && "flex flex-col",
          GAP_CLASS[gap],
          className,
        )}
        {...props}
      >
        {children}
      </ol>
    );
  },
);

Timeline.displayName = "Timeline";
