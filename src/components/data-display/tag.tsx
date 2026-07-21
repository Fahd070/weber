import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * A small labeled marker identifying a category or attribute of the
 * content it's attached to. Owns rendering a single short label with a
 * consistent visual treatment only — not the logic of what labels apply
 * to what content (a data/content concern). One component serves both
 * approved uses (technology identification on Portfolio Card, category
 * labeling on Blog Post Card/Article Layout) rather than two separate
 * ones (Variant Philosophy, DECISIONS.md WD-057). Uses `radius.sm` —
 * DESIGN_TOKENS.md §5 names "tags" directly for that token (WD-031).
 * Neutral surface/border treatment (not a WD-036 semantic color) since
 * neither approved use is a state/outcome communication those roles are
 * defined for. Rendered as real text, never color-only, so it remains
 * readable to assistive technology. docs/components/06_DATA_DISPLAY.md —
 * Tag.
 */
export type TagProps = HTMLAttributes<HTMLSpanElement>;

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-sm border border-border bg-surface px-3 py-1 text-caption text-foreground",
          className,
        )}
        {...props}
      >
        {children}
      </span>
    );
  },
);

Tag.displayName = "Tag";
