import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface AspectRatioProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Width-to-height ratio (e.g. `16 / 9`). Required — Aspect Ratio defines
   * no built-in ratio values, no ratio enum, and no default ratio of its
   * own (DECISIONS.md WD-138). Every consumer supplies its own value.
   */
  ratio: number;
}

/**
 * Locks a content region to a caller-supplied width-to-height ratio,
 * reserving its space before the content loads. Owns space reservation
 * only — the specific ratio value, and the image/media rendered inside,
 * belong entirely to the caller (DECISIONS.md WD-138). A primitive — not
 * composed of other Foundation Components. `overflow-hidden` keeps
 * mismatched-ratio media from breaking the reserved box; it does not
 * otherwise style the media itself. docs/components/02_LAYOUT.md —
 * Aspect Ratio.
 */
export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio, style, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{ ...style, aspectRatio: ratio }}
        className={cn("w-full overflow-hidden", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

AspectRatio.displayName = "AspectRatio";
