/**
 * Shared Motion preset for validation/status feedback appearing (Premium
 * Forms Phase 1, Project Owner approved) — reused by both Form Field's
 * error/helper text slot and Form's own whole-form status message, so a
 * field-level validation error and a submission outcome feel like the
 * same design language rather than two separately-tuned animations.
 * Deliberately its own small file rather than added to `hover-tokens.ts`
 * — that file's own scope is hover interactions specifically; this is a
 * content-appearing (mount) transition, a different category with its
 * own established sitewide precedent (Scroll Reveal, Hero, Header).
 * `initial`/`animate` only — this content only ever appears, it doesn't
 * need an exit transition (both call sites conditionally stop rendering
 * it rather than animating it away). Duration mirrors the same
 * `--duration-standard` (200ms) value `HOVER_TRANSITION` already uses —
 * quick enough to feel responsive for a small piece of inline text, not
 * a slow reveal.
 */
export const FEEDBACK_FADE_IN = { opacity: 0, y: -4 } as const;
export const FEEDBACK_FADE_TRANSITION = {
  duration: 0.2,
  ease: "easeOut",
} as const;
