import { forwardRef, type HTMLAttributes } from "react";
import { Stack } from "./stack";

/**
 * The per-route content wrapper inside App Shell — the consistent frame
 * every route's unique content renders into. "Page" names a logical
 * composition concept, not any framework-specific routing file or
 * convention (e.g., Next.js's own `page` file convention) — this
 * component's contract is independent of how routing is implemented
 * (Naming Philosophy, DECISIONS.md WD-067). Owns per-route layout
 * consistency (spacing before the first / after the last Section); does
 * not own persistent chrome (App Shell), routing/URL resolution, or SEO
 * metadata. Composed of one or more Section components, arranged via
 * Stack at space.8 (64px) — the spacing-scale step DESIGN_TOKENS.md §4
 * names "Section — gap between one section and the next" (DECISIONS.md
 * WD-030), the same token Section itself already reuses.
 * docs/components/02_LAYOUT.md — Page.
 */
export type PageProps = HTMLAttributes<HTMLDivElement>;

export const Page = forwardRef<HTMLDivElement, PageProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Stack ref={ref} gap={8} className={className} {...props}>
        {children}
      </Stack>
    );
  },
);

Page.displayName = "Page";
