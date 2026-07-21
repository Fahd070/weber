/**
 * A small, dependency-free deterministic string hash (djb2) — used purely
 * to pick among a small set of curated content variations (Premium
 * Personalization, Project Owner approved). The same seed always produces
 * the same selection; never `Math.random()`/`Date.now()`, matching the
 * task's explicit "deterministic selection" requirement — the same
 * company name always sees the same hero/nav/CTA/heading variation, every
 * time, reproducibly.
 */
function hashString(value: string): number {
  let hash = 5381;
  for (let index = 0; index < value.length; index++) {
    hash = (hash * 33) ^ value.charCodeAt(index);
  }
  return hash >>> 0;
}

/**
 * Deterministically picks one item from `options` based on `seed` — the
 * single shared selection primitive for every varying piece of Interactive
 * Showcase content (hero copy, nav label sets, CTA copy, section
 * headings), reused everywhere rather than each personalization point
 * implementing its own random-index logic. `options` must be non-empty —
 * every call site in this codebase supplies a curated, always-non-empty
 * array, so no runtime guard is added for a case that cannot occur from
 * trusted, internal content data.
 */
export function pickVariation<T>(seed: string, options: readonly T[]): T {
  const index = hashString(seed) % options.length;
  return options[index];
}

/**
 * Derives 1–2 letter brand initials from a company name (Dynamic Brand
 * Identity, Project Owner approved) — "Vertex Cloud" → "VC", "North
 * Studio" → "NS", "Blue Oak" → "BO". A single-word name keeps the
 * original, simpler one-letter mark ("Northwind" → "N") rather than
 * splitting a single word into two letters, which reads as arbitrary
 * rather than intentional. Not built on `pickVariation` — there's exactly
 * one correct derivation per name, not a choice among curated options, so
 * hashing/pooling would be the wrong tool here. Still fully deterministic:
 * a pure string transform with no random input.
 */
export function deriveBrandInitials(companyName: string): string {
  const words = companyName.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) {
    return "W";
  }
  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase();
  }
  return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase();
}
