import type { BusinessTypeId } from "@/content/interactive-showcase/types";

/**
 * Per-Business-Type visual identity for the V2 template mockup (Premium
 * Realism Phase, Project Owner approved). Colors only — never new
 * content, never a claim about a real business. Deliberately NOT an
 * extension of Weber's own site tokens (`globals.css`, DECISIONS.md
 * WD-002/WD-003/WD-134): those tokens ARE Weber's brand and must never
 * vary; this is the opposite case on purpose — the whole point of the
 * simulated "mini-site" inside Preview Chrome is to look like a
 * *different*, hypothetical company's website, so each Business Type
 * gets its own identity here instead. Each palette stays a subtle
 * gradient wash applied over Weber's existing dark mockup surface
 * (`bg-surface`, unchanged) rather than a full light-background swap —
 * that keeps every existing white-on-dark text/contrast guarantee inside
 * the mockup completely intact while still giving each industry a
 * genuinely distinct feel. Consumed by Preview Chrome only, via CSS
 * custom properties set once on its root element and read by every
 * descendant through the normal CSS cascade — no prop drilling through
 * Template Renderer or Preview Section Renderer.
 */
export interface PreviewTheme {
  /** Human-readable label for the palette, for documentation/debugging only — never rendered to visitors. */
  label: string;
  /** Gradient start color for the subtle hero backdrop wash. */
  gradientFrom: string;
  /** Gradient end color for the subtle hero backdrop wash. */
  gradientTo: string;
  /** Accent color for icons, the logo mark, and small decorative details within the mockup only — never Weber's own CTA (which stays on Weber's real button tokens, outside Preview Chrome). */
  accent: string;
  /**
   * Letter-spacing personality for the mockup's own hero heading only —
   * one of Tailwind's existing `tracking-*` utilities (no new token, no
   * new font, no font-size change; the heading keeps Weber's own
   * `text-display` size). "tight" reads refined/luxury, "wide" reads
   * bold/energetic, "normal" is the neutral default.
   */
  headingTracking: "tight" | "normal" | "wide";
  /**
   * Content column width for every section in this template (Genuine
   * Differentiation Pass, Project Owner approved) — reuses Container's
   * own existing three approved sizes (DECISIONS.md WD-035); no new
   * width value is introduced. "reading" (720px) reads editorial/
   * refined; "wide" (1320px) reads expansive/showcase-heavy; "standard"
   * (1152px, Container's own default) is the neutral middle.
   */
  contentWidth: "reading" | "standard" | "wide";
  /**
   * Vertical padding personality for every section in this template
   * (Genuine Differentiation Pass, Project Owner approved) — reuses
   * Section's own approved padding steps (`py-12`/`py-16`/`py-24`, all
   * already-approved spacing-scale values, WD-030/WD-134); Section's own
   * default (`py-16`) is untouched everywhere else in the product. This
   * is a per-instance override passed as `className`, not a change to
   * the Section component itself. "compact" reads fast/energetic,
   * "spacious" reads unhurried/luxury, "standard" matches Section's
   * existing default exactly. This is also this theme system's answer to
   * "content density" (Premium Industry Identity Phase 2, Project Owner
   * approved) — how much room every section breathes is exactly what
   * density means for a page built from stacked sections; a second,
   * separate density field would duplicate this one.
   */
  rhythm: "compact" | "standard" | "spacious";
  /**
   * Vertical padding for the hero specifically (Premium Industry Identity
   * Phase 2, Project Owner approved) — the same approved spacing-scale
   * steps `rhythm` already uses (WD-030/WD-134), applied to `Template
   * Renderer`'s hero `Section` instead of `Preview Section Renderer`'s
   * body sections. Kept as its own field rather than reusing `rhythm`
   * directly because the hero is a visually distinct region (often a
   * full-bleed photo) that has historically carried more generous padding
   * than body sections at every tier; every template currently sets this
   * to the same tier as its own `rhythm` for internal coherence, but nothing
   * enforces that pairing structurally. Consumed by Template Renderer only.
   */
  heroSpacing: "compact" | "standard" | "spacious";
  /**
   * Corner radius for every card-shaped element in this template
   * (Premium Industry Identity, Project Owner approved) — reuses
   * Weber's own three approved radius steps (`--radius-sm`/`-md`/`-lg`,
   * DECISIONS.md WD-031); no new radius value is introduced. Card's own
   * default (`rounded-md`) is untouched everywhere else in the product;
   * this is a per-instance override passed as `className`, resolved by
   * `cn`'s tailwind-merge (the same override technique already used for
   * `border-t-[var(--preview-accent)]` on pricing tiers). "sm" reads
   * sharp/minimal (Technology), "lg" reads rounded/soft (Restaurant,
   * Healthcare, Beauty), "md" matches Card's own existing default.
   */
  cardRadius: "sm" | "md" | "lg";
  /**
   * Font weight for the mockup's own hero heading and every section
   * heading (Premium Industry Identity, Project Owner approved) — one of
   * Tailwind's existing `font-*` utilities mapped to Weber's own
   * approved weight scale (DECISIONS.md WD-028: 400/500/600/700); no new
   * weight is introduced. "semibold" (600) matches the existing default
   * used everywhere else in the product; "bold" (700) reads more
   * confident/dramatic for industries that want it.
   */
  headingWeight: "semibold" | "bold";
  /**
   * Container treatment for Preview Chrome's brand mark (Dynamic Brand
   * Identity, Project Owner approved) — reuses Weber's own approved
   * radius steps exactly as `cardRadius` already does; no new radius
   * value is introduced. "circle" is `rounded-full` (Preview Chrome's
   * original, still-used treatment) — classic, elegant. "rounded" applies
   * `theme.cardRadius`'s own mapped step to a filled mark — a softer or
   * sharper square depending on that same industry's already-chosen card
   * personality, staying internally consistent by construction rather
   * than by convention. "outlined" applies the same `cardRadius` shape
   * but as a border-only, transparent-fill mark — reads more refined/
   * understated, reserved for industries whose overall personality
   * already leans that way.
   */
  logoShape: "circle" | "rounded" | "outlined";
  /**
   * Whether Preview Chrome's brand mark shows the company's own smart
   * initials (`deriveBrandInitials`, `src/lib/deterministic-pick.ts`) or
   * a curated per-template icon (Dynamic Brand Identity, Project Owner
   * approved) — "monogram" for industries whose own listed brand-mark
   * examples lead with a monogram/signature mark (Professional Services,
   * the neutral "Other" fallback); "icon" for every other industry, whose
   * own examples are pictorial/symbolic. The icon itself is never a new
   * per-theme field — it comes from `PreviewTemplate.heroIcon` (already
   * authored, previously rendered only by the "minimal" hero layout) via
   * an optional `logoIcon` override on the two templates whose existing
   * `heroIcon` doesn't match this phase's own brand-mark vocabulary
   * (Technology, Health & Wellness).
   */
  logoMarkStyle: "icon" | "monogram";
}

/**
 * Maps `PreviewTheme.cardRadius` to Weber's own approved radius utilities
 * (WD-031) — the single shared source for this mapping (Dynamic Brand
 * Identity, Project Owner approved), extracted here since `Template
 * Renderer` and `Preview Section Renderer` had each independently
 * declared an identical, unexported copy of this exact three-line
 * `Record`; adding a third copy for Preview Chrome's own brand mark would
 * have compounded that duplication rather than fixing it. Both existing
 * call sites now import this instead of redeclaring it.
 */
export const CARD_RADIUS_CLASS: Record<PreviewTheme["cardRadius"], string> = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
};

/**
 * The theme's own gradient wash, built from `--preview-accent`'s sibling
 * custom properties (`--preview-gradient-from`/`-to`, set once by Preview
 * Chrome) — the single shared source for this exact arbitrary-value
 * string (Performance & React Audit, Project Owner approved), extracted
 * since Template Renderer (three hero-layout branches) and Preview
 * Section Renderer (`galleryGrid`'s placeholder tile, `mapPreview`'s
 * panel) had each independently retyped this identical literal five
 * times. Callers still supply their own opacity/other classes alongside
 * it via `cn()` — only the gradient value itself is shared.
 */
export const PREVIEW_GRADIENT_CLASS =
  "bg-[image:linear-gradient(135deg,var(--preview-gradient-from),var(--preview-gradient-to))]";

export const PREVIEW_THEMES: Record<BusinessTypeId, PreviewTheme> = {
  "restaurants-cafes": {
    label: "Warm Elegant",
    gradientFrom: "#7c2d12",
    gradientTo: "#b45309",
    accent: "#d97706",
    headingTracking: "normal",
    contentWidth: "standard",
    rhythm: "standard",
    heroSpacing: "standard",
    cardRadius: "lg",
    headingWeight: "bold",
    logoShape: "rounded",
    logoMarkStyle: "icon",
  },
  "real-estate": {
    label: "Luxury Dark",
    gradientFrom: "#1c1917",
    gradientTo: "#44403c",
    accent: "#d4af37",
    headingTracking: "tight",
    contentWidth: "wide",
    rhythm: "spacious",
    heroSpacing: "spacious",
    cardRadius: "md",
    headingWeight: "semibold",
    logoShape: "circle",
    logoMarkStyle: "icon",
  },
  "professional-services": {
    label: "Premium Corporate",
    gradientFrom: "#0f172a",
    gradientTo: "#1e3a5f",
    accent: "#3b82f6",
    headingTracking: "tight",
    contentWidth: "reading",
    rhythm: "spacious",
    heroSpacing: "spacious",
    cardRadius: "sm",
    headingWeight: "semibold",
    logoShape: "outlined",
    logoMarkStyle: "monogram",
  },
  "technology-software": {
    label: "Modern Blue/Purple",
    gradientFrom: "#4c1d95",
    gradientTo: "#1d4ed8",
    accent: "#8b5cf6",
    headingTracking: "tight",
    contentWidth: "standard",
    rhythm: "compact",
    heroSpacing: "compact",
    cardRadius: "sm",
    headingWeight: "bold",
    logoShape: "rounded",
    logoMarkStyle: "icon",
  },
  "education-training": {
    label: "Clean Blue",
    gradientFrom: "#0c4a6e",
    gradientTo: "#0369a1",
    accent: "#0ea5e9",
    headingTracking: "normal",
    contentWidth: "reading",
    rhythm: "standard",
    heroSpacing: "standard",
    cardRadius: "md",
    headingWeight: "semibold",
    logoShape: "rounded",
    logoMarkStyle: "icon",
  },
  "health-wellness": {
    label: "Clinical Blue",
    gradientFrom: "#0c4a6e",
    gradientTo: "#0891b2",
    accent: "#22d3ee",
    headingTracking: "normal",
    contentWidth: "reading",
    rhythm: "spacious",
    heroSpacing: "spacious",
    cardRadius: "lg",
    headingWeight: "semibold",
    logoShape: "circle",
    logoMarkStyle: "icon",
  },
  "beauty-personal-care": {
    label: "Soft Premium",
    gradientFrom: "#831843",
    gradientTo: "#a21caf",
    accent: "#e879f9",
    headingTracking: "wide",
    contentWidth: "standard",
    rhythm: "spacious",
    heroSpacing: "spacious",
    cardRadius: "lg",
    headingWeight: "semibold",
    logoShape: "circle",
    logoMarkStyle: "icon",
  },
  automotive: {
    label: "Dark Metallic",
    gradientFrom: "#18181b",
    gradientTo: "#3f3f46",
    accent: "#94a3b8",
    headingTracking: "wide",
    contentWidth: "wide",
    rhythm: "compact",
    heroSpacing: "compact",
    cardRadius: "sm",
    headingWeight: "bold",
    logoShape: "rounded",
    logoMarkStyle: "icon",
  },
  "hospitality-events": {
    label: "Warm Luxury",
    gradientFrom: "#4c0519",
    gradientTo: "#78350f",
    accent: "#fbbf24",
    headingTracking: "wide",
    contentWidth: "wide",
    rhythm: "spacious",
    heroSpacing: "spacious",
    cardRadius: "lg",
    headingWeight: "semibold",
    logoShape: "rounded",
    logoMarkStyle: "icon",
  },
  "nonprofit-community": {
    label: "Approachable Teal",
    gradientFrom: "#064e3b",
    gradientTo: "#115e59",
    accent: "#2dd4bf",
    headingTracking: "normal",
    contentWidth: "reading",
    rhythm: "spacious",
    heroSpacing: "spacious",
    cardRadius: "lg",
    headingWeight: "semibold",
    logoShape: "circle",
    logoMarkStyle: "icon",
  },
  "retail-shops": {
    label: "Fresh Colorful",
    gradientFrom: "#9a3412",
    gradientTo: "#0f766e",
    accent: "#fb923c",
    headingTracking: "normal",
    contentWidth: "wide",
    rhythm: "compact",
    heroSpacing: "compact",
    cardRadius: "md",
    headingWeight: "bold",
    logoShape: "rounded",
    logoMarkStyle: "icon",
  },
  ecommerce: {
    label: "Vibrant Modern",
    gradientFrom: "#831843",
    gradientTo: "#6d28d9",
    accent: "#f472b6",
    headingTracking: "tight",
    contentWidth: "wide",
    rhythm: "compact",
    heroSpacing: "compact",
    cardRadius: "sm",
    headingWeight: "bold",
    logoShape: "rounded",
    logoMarkStyle: "icon",
  },
  "home-trade-services": {
    label: "Grounded Trade",
    gradientFrom: "#292524",
    gradientTo: "#57534e",
    accent: "#eab308",
    headingTracking: "normal",
    contentWidth: "standard",
    rhythm: "standard",
    heroSpacing: "standard",
    cardRadius: "sm",
    headingWeight: "bold",
    logoShape: "outlined",
    logoMarkStyle: "icon",
  },
  other: {
    label: "Neutral Premium",
    gradientFrom: "#18181b",
    gradientTo: "#27272a",
    accent: "#a1a1aa",
    headingTracking: "normal",
    contentWidth: "standard",
    rhythm: "standard",
    heroSpacing: "standard",
    cardRadius: "md",
    headingWeight: "semibold",
    logoShape: "circle",
    logoMarkStyle: "monogram",
  },
};
