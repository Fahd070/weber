import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Reserves the known layout of eventual content while it loads
 * (DECISIONS.md WD-048). Owns previewing layout shape only, never actual
 * content. Shaped to match whatever layout (Grid, Stack) it stands in for
 * — the exact shape variant set is explicitly "an implementation detail,
 * not enumerated here" (docs/components/05_FEEDBACK.md — Skeleton,
 * Variants), so this stays a single, size-agnostic primitive that callers
 * size via className, rather than a fixed shape taxonomy. `aria-hidden`:
 * unlike Alert/Spinner/Empty State, Skeleton's own entry does not list
 * Live Region Announcer as a dependency — it is a purely visual
 * placeholder, never mistaken for actual content by staying out of the
 * accessibility tree entirely. Any shimmer animation respects
 * `prefers-reduced-motion`.
 */
export type SkeletonProps = HTMLAttributes<HTMLDivElement>;

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(
          "animate-pulse rounded-md bg-surface motion-reduce:animate-none",
          className,
        )}
        {...props}
      />
    );
  },
);

Skeleton.displayName = "Skeleton";
