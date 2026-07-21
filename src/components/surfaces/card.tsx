import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * An elevated container — background surface, border/shadow treatment from
 * the elevation scale, and radius. The primitive underlying every "X Card"
 * component in Data Display. Owns the elevated container box only —
 * background, elevation, and radius. Does not own what's inside it or its
 * internal spacing rhythm. Stateless by default (DECISIONS.md WD-054); no
 * semantics of its own. Elevation rendering follows WD-132: elevation.0
 * (Flat) has no treatment; elevation.1 (Resting) uses the neutral-scale
 * surface background plus a low-opacity border, not a box-shadow.
 * docs/components/07_SURFACES.md — Card.
 */
export type CardElevation = "flat" | "resting";

const ELEVATION_CLASS: Record<CardElevation, string> = {
  flat: "",
  resting: "bg-surface border border-border",
};

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Elevation variant (DECISIONS.md WD-032) — elevation.0/elevation.1 only. Defaults to "flat". */
  elevation?: CardElevation;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ elevation = "flat", className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("rounded-md", ELEVATION_CLASS[elevation], className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";
