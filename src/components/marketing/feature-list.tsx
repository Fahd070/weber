import type { CSSProperties, HTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { GAP_CLASS, type SpacingStep } from "@/components/layout/stack";
import type { GridColumns } from "@/components/layout/grid";
import { Icon } from "@/components/utilities/icon";

/**
 * Presents Weber's Guarantees, Quality, Performance, Maintenance,
 * Professionalism, and Long-term support claims as one consistent,
 * repeatable list — required for the Why Weber section
 * (INFORMATION_ARCHITECTURE.md §15, DECISIONS.md WD-041). Owns arranging
 * icon-plus-label items consistently, not the trust-building copy itself.
 * Defaults to Stack's single-column spacing scale; an optional `cols`
 * prop arranges items via Grid instead (DECISIONS.md WD-137/WD-138 —
 * value-agnostic, no built-in default, each consumer decides at its own
 * implementation time). Grid's own CSS mechanism is applied directly to
 * this component's `<ul>` rather than nesting a literal `<Grid>` (a
 * `<div>`) inside it, since list semantics are this component's own
 * documented accessibility commitment and Grid has no polymorphic
 * element support. Each item's icon is never the sole carrier of
 * meaning — the label is always present and readable to assistive
 * technology. docs/components/08_MARKETING.md — Feature List.
 */
export interface FeatureListItem {
  icon: LucideIcon;
  label: string;
}

type FeatureListStyle = CSSProperties & {
  "--grid-cols-base"?: number;
  "--grid-cols-md"?: number;
  "--grid-cols-lg"?: number;
  "--grid-cols-xl"?: number;
};

export interface FeatureListProps extends HTMLAttributes<HTMLUListElement> {
  items: FeatureListItem[];
  /** Spacing scale step between items (DECISIONS.md WD-030). Defaults to space.4 (16px). */
  gap?: SpacingStep;
  /** Column count per breakpoint tier. Omitted by default, preserving the original single-column Stack layout. */
  cols?: GridColumns;
}

export function FeatureList({
  items,
  gap = 4,
  cols,
  style,
  className,
  ...props
}: FeatureListProps) {
  const gridStyle: FeatureListStyle | undefined = cols
    ? {
        ...style,
        "--grid-cols-base": cols.base,
        ...(cols.md !== undefined && { "--grid-cols-md": cols.md }),
        ...(cols.lg !== undefined && { "--grid-cols-lg": cols.lg }),
        ...(cols.xl !== undefined && { "--grid-cols-xl": cols.xl }),
      }
    : style;

  return (
    <ul
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
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-3">
          <Icon icon={item.icon} className="size-6 shrink-0 text-primary" />
          <span className="text-body text-foreground">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
