/**
 * Alternating soft gradient tint for top-level page Sections (Premium
 * Micro-interactions Phase 2, Project Owner approved) — mirrors the exact
 * `sectionBackgroundClass(alternate)` pattern already proven in
 * Interactive Showcase's Preview Section Renderer
 * (`src/features/interactive-showcase/templates/preview-sections.tsx`),
 * adapted to Weber's own real palette (`--color-surface`, the same token
 * Card's Resting elevation already uses, DECISIONS.md WD-132) instead of
 * the Preview's per-industry `--preview-accent`. A gradient — fade in,
 * fade out — rather than a flat block, so a tinted section's own top and
 * bottom edges blend into the page's shared background instead of
 * cutting off abruptly: "soft gradient separators" and "section
 * separation" from one mechanism, not a second literal divider element
 * layered on top. `undefined` for the non-alternate case, the same
 * convention `RHYTHM_CLASS` already uses for its own "standard means
 * Section's own unmodified default" — so an un-alternated Section's
 * background stays exactly what it always was, not a value that happens
 * to look the same.
 */
export function alternateSectionClass(alternate: boolean): string | undefined {
  return alternate
    ? "bg-gradient-to-b from-transparent via-surface/50 to-transparent"
    : undefined;
}
