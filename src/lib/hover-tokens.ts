/**
 * Shared hover-interaction primitives (Premium Micro-interactions Phase 1,
 * Project Owner approved) — consolidates timing/magnitude values that were
 * previously copy-pasted as identical inline object literals across
 * Button, Motion CTA Link, WhatsApp CTA, Brand Link, Footer Contact Link,
 * Service Card, and Contact Method Card (eight literal
 * `{ duration: 0.2, ease: "easeOut" }` occurrences alone), per WD-172's
 * "extract, don't duplicate" requirement. Durations mirror the exact
 * numeric value of the approved CSS tokens (`globals.css`
 * `--duration-standard`/`--duration-micro`, DECISIONS.md WD-033) — Motion's
 * `transition` API takes plain numbers, not CSS custom properties, so this
 * is the JS-side source of truth for that same approved scale, not a new
 * one. Magnitudes (lift distance, scale factor) are tuned smaller than
 * their pre-Phase-1 values for a more restrained, "felt rather than seen"
 * premium feel, per this phase's own explicit direction — Card lift halved
 * (4px → 2px), Button lift+scale roughly halved (scale 1.03/y -2px →
 * scale 1.015/y -1px).
 */

/** Shared hover transition timing — mirrors `--duration-standard` (200ms) and Motion's built-in "easeOut" easing, already used for every entering/settling gesture transition sitewide. */
export const HOVER_TRANSITION = { duration: 0.2, ease: "easeOut" } as const;

/** Shared tap/press feedback scale — unchanged from its pre-existing value, only deduplicated (Button, Motion CTA Link). */
export const TAP_SCALE = { scale: 0.97 } as const;

/** Shared hover lift for Card-based interactive components (Service Card, Contact Method Card) — translateY only, no scale: a filled card scaling up on hover reads as an app-icon "bounce," not a refined lift. */
export const CARD_HOVER_LIFT = { y: -2 } as const;

/** Shared hover lift+scale for filled buttons and CTA links (Button, Motion CTA Link, WhatsApp CTA) — restrained relative to Card's lift since these are smaller, denser controls. */
export const BUTTON_HOVER_LIFT = { scale: 1.015, y: -1 } as const;

/** Shared hover scale for small icon-only affordances (Brand Link's logo mark, Footer Contact Link) — distinct from Button/Card since these are compact, centered marks where a lift would read as drift rather than elevation. */
export const ICON_HOVER_SCALE = { scale: 1.05 } as const;

/**
 * Shared CSS border-color hover transition for Card-based components that
 * get their lift from a wrapping Motion element (Service Card, Contact
 * Method Card) — only the border's color needs its own CSS transition;
 * the lift is handled by Motion alongside it. Duration raised from the
 * previous `duration-micro` (150ms) to `duration-standard` (200ms) so the
 * border fade finishes in lockstep with the Motion lift's own 200ms
 * instead of visibly settling first (Premium Micro-interactions Phase 1 —
 * unifying hover timing across the two mechanisms driving one visual
 * hover state). No `box-shadow` is added at hover (DECISIONS.md WD-132
 * reserves real shadows for Overlay elevation only — conventional drop
 * shadows "read poorly on Weber's near-black default background"); the
 * lift plus this border-brighten together stand in for "shadow
 * improvement."
 */
export const CARD_HOVER_BORDER_CLASS =
  "transition-colors duration-standard ease-in-out hover:border-primary/40";

/**
 * Shared, fully self-contained pure-CSS hover treatment for card-shaped
 * components with no Motion wrapper at all (Blog Post Card, Portfolio
 * Card — both currently have zero hover feedback despite the whole card
 * being a real link target). Lift and border-color animate together via
 * one `transition-[translate,border-color]` declaration — Tailwind v4's
 * `translate-*` utilities set the native CSS `translate` property, not
 * the legacy `transform` property, so `translate` (not `transform`) is
 * the correct property name to list here; verified via computed styles
 * during this phase's own browser testing, since listing `transform`
 * silently transitions nothing and the lift would snap instead of ease.
 * Gated by `motion-reduce:` (the CSS-native equivalent of
 * `useReducedMotion`, already established by Accordion and Navigation
 * Menu's own `transition-[grid-template-rows] ...
 * motion-reduce:transition-none`) since Motion's hook isn't available
 * without a Client Component boundary these two components don't
 * otherwise need (Premium Micro-interactions Phase 1 — "do not introduce
 * new Client Components"). Same no-box-shadow reasoning as
 * `CARD_HOVER_BORDER_CLASS` above (WD-132).
 */
export const CSS_CARD_HOVER_CLASS =
  "transition-[translate,border-color] duration-standard ease-in-out hover:-translate-y-0.5 hover:border-primary/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0";
