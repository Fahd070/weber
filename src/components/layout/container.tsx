import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Container widths (DECISIONS.md WD-035) — Reading (~720px), Standard
 * (~1152px), Wide (~1320px). No other widths exist.
 * Horizontal padding (space.4 / 16px at Mobile, space.5 / 24px at Tablet,
 * space.6 / 32px at Laptop and up — DECISIONS.md WD-030) keeps content
 * off the physical screen edge below each max-width's own breakpoint,
 * using only the four approved breakpoint tiers (DECISIONS.md WD-034) —
 * no "sm" tier, since it isn't one of them.
 * docs/components/02_LAYOUT.md — Container.
 */
export type ContainerSize = "reading" | "standard" | "wide";

const SIZE_CLASS: Record<ContainerSize, string> = {
  reading: "max-w-reading",
  standard: "max-w-standard",
  wide: "max-w-wide",
};

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Container width variant. Defaults to "standard" (DESIGN_TOKENS.md §9). */
  size?: ContainerSize;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = "standard", className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full px-4 md:px-6 lg:px-8",
          SIZE_CLASS[size],
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Container.displayName = "Container";
