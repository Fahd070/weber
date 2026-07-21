import { LayoutGrid, Square, Circle } from "lucide-react";
import type { PatternRegistry } from "./types";

/**
 * Pattern definitions registry (DECISIONS.md WD-154, WD-160, WD-165) —
 * data only, no rendering logic, no React import, no reference to the
 * Business Type registry (one-way dependency, DECISIONS.md WD-166).
 * Exactly four entries. Visual/Grid's placeholder cards and Neutral/
 * Fallback's entire content are Pattern-owned fixed content — shared and
 * identical regardless of which Business Type maps to that pattern.
 * Icons are generic and abstract (never sector-specific), per
 * DECISIONS.md WD-163's asset strategy.
 */
export const PATTERN_REGISTRY: PatternRegistry = {
  "visual-grid": {
    patternId: "visual-grid",
    fixedContent: {
      cards: [
        { label: "Sample Item 1", icon: Square },
        { label: "Sample Item 2", icon: LayoutGrid },
        { label: "Sample Item 3", icon: Circle },
      ],
      exampleTagLabel: "Example",
    },
  },
  "trust-credibility": {
    patternId: "trust-credibility",
    fixedContent: null,
  },
  "offering-forward": {
    patternId: "offering-forward",
    fixedContent: null,
  },
  "neutral-fallback": {
    patternId: "neutral-fallback",
    fixedContent: {
      headline: "A concept for {{companyName}}'s professional website.",
      supportingText:
        "A clean, modern design built on Weber's professional web development service.",
    },
  },
};
