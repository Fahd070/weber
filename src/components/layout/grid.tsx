import { forwardRef, type CSSProperties, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { GAP_CLASS, type SpacingStep } from "./stack";

/**
 * Column count per breakpoint tier (DECISIONS.md WD-034: Mobile/Tablet/
 * Laptop/Desktop — Tailwind's default/md/lg/xl). `base` is required
 * (mobile-first, WD-027); an omitted md/lg/xl keeps the previous tier's
 * count, the same mobile-first cascade every other responsive token in
 * this system already follows.
 *
 * Grid is a value-agnostic layout mechanism (DECISIONS.md WD-137) — it
 * defines no default or built-in column-count values of its own. Every
 * consuming component (Service Card, Portfolio Card, Blog Post Card, a
 * future Dashboard grid) must decide and pass its own counts.
 */
export interface GridColumns {
  base: number;
  md?: number;
  lg?: number;
  xl?: number;
}

type GridStyle = CSSProperties & {
  "--grid-cols-base": number;
  "--grid-cols-md"?: number;
  "--grid-cols-lg"?: number;
  "--grid-cols-xl"?: number;
};

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  /** Column count per breakpoint tier. Required — Grid defines no default counts (DECISIONS.md WD-137). */
  cols: GridColumns;
  /** Gutter spacing scale step. Defaults to space.4 (16px), same default as Stack/Cluster. */
  gap?: SpacingStep;
}

/**
 * Arranges children in a two-dimensional, token-driven rhythm — the
 * primitive behind every card grid in the product. Owns column/row rhythm
 * for its direct children only; does not own the children's own visual
 * design. Column counts are supplied per breakpoint tier via CSS custom
 * properties rather than a fixed Tailwind `grid-cols-N` scale, since the
 * consumer-supplied count is not bounded to any built-in range (WD-137) —
 * the class list below is static so Tailwind can always generate it; only
 * the custom-property values change per instance. Reading order for
 * screen readers always follows DOM order — this component never applies
 * a visual reordering mechanism. docs/components/02_LAYOUT.md — Grid.
 */
export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ cols, gap = 4, className, style, children, ...props }, ref) => {
    const gridStyle: GridStyle = {
      ...style,
      "--grid-cols-base": cols.base,
      ...(cols.md !== undefined && { "--grid-cols-md": cols.md }),
      ...(cols.lg !== undefined && { "--grid-cols-lg": cols.lg }),
      ...(cols.xl !== undefined && { "--grid-cols-xl": cols.xl }),
    };

    return (
      <div
        ref={ref}
        style={gridStyle}
        className={cn(
          "grid",
          "grid-cols-[repeat(var(--grid-cols-base),minmax(0,1fr))]",
          "md:grid-cols-[repeat(var(--grid-cols-md,var(--grid-cols-base)),minmax(0,1fr))]",
          "lg:grid-cols-[repeat(var(--grid-cols-lg,var(--grid-cols-md,var(--grid-cols-base))),minmax(0,1fr))]",
          "xl:grid-cols-[repeat(var(--grid-cols-xl,var(--grid-cols-lg,var(--grid-cols-md,var(--grid-cols-base)))),minmax(0,1fr))]",
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

Grid.displayName = "Grid";
