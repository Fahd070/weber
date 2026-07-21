import type { LucideIcon } from "lucide-react";
import type { BusinessTypeId } from "../types";

/**
 * Interactive Showcase V2 — Template-Based Preview System (Design
 * Evolution, Project Owner approved; extended to all fourteen Business
 * Types and enriched for visual realism in the Premium Realism Phase,
 * Project Owner approved). A second, additive resolution layer alongside
 * the original four-pattern system (DECISIONS.md WD-153/WD-154/WD-162) —
 * deliberately NOT a fifth PatternId, since WD-162 closed that set
 * explicitly ("no fifth value is valid"). Every Business Type now has its
 * own registered template; the original pattern system remains fully
 * intact and unmodified underneath as the resolution path for any future
 * Business Type that doesn't register one. No Business Type taxonomy
 * values were added — every template maps onto one of the fourteen
 * already-approved values (DECISIONS.md WD-152).
 *
 * Every section type here is deliberately structural/categorical/
 * aspirational-only — no section type exists that could hold a named
 * person, a specific invented product/menu item/listing, an attributed
 * quote, or a fabricated result. This mirrors the same content boundary
 * already established for the original patterns (WD-156, WD-157,
 * WD-161): the Preview demonstrates layout and design quality, never
 * simulates real business facts. The Premium Realism Phase section types
 * added below (feature highlights, testimonials, team, gallery, pricing,
 * map) extend that same discipline to categories of section a premium
 * marketing site typically has — each one is generic/unattributed by
 * construction, never a new kind of fabrication risk. None of them ever
 * render a fake interactive-looking button — the same principle already
 * applied to `navLabels` (WD-050: no dead tab-stop that looks
 * actionable but isn't).
 */

export type TemplateId =
  | "restaurant"
  | "law-firm"
  | "corporate"
  | "medical-clinic"
  | "gym"
  | "real-estate"
  | "ecommerce"
  | "retail-boutique"
  | "home-trade-craft"
  | "education-academy"
  | "hospitality-venue"
  | "technology-saas"
  | "automotive-showcase"
  | "nonprofit-mission";

/** A small set of generic, "Example"-tagged placeholder cards — demonstrates a browsable-item layout without inventing specific products/listings/dishes. */
export interface CardGridSection {
  type: "cardGrid";
  heading: string;
  cards: { label: string; icon: LucideIcon }[];
}

/** Generic, aspirational statements — the same register already approved for the Trust/Credibility pattern (WD-157). Used for anything that would otherwise require a named person or a specific claim (team/expertise sections, "reviews"-shaped sections, case-highlight-shaped sections). */
export interface ValuePropsSection {
  type: "valueProps";
  heading: string;
  items: string[];
}

/** A plain list of category-style labels — structural/categorical, not a claim about specific real offerings (the same shape as Service Detail Pages' "What we build" lists). */
export interface CategoryListSection {
  type: "categoryList";
  heading: string;
  items: string[];
}

/** Describes what a feature *could* do, never asserts a real fact (no real availability, no real address, no real signup). Used for booking/appointment/schedule/location/about-shaped sections. */
export interface ConceptualSection {
  type: "conceptual";
  heading: string;
  body: string;
}

/** Structural FAQ demonstration — questions about what a section *could* provide, not claims about real policies (mirrors the conceptual pattern, just in Q&A form). Reuses the existing Accordion component. */
export interface FaqSection {
  type: "faq";
  heading: string;
  items: { question: string; answer: string }[];
}

/**
 * Icon-plus-label highlight cards (Premium Realism Phase, Project Owner
 * approved) — reuses the existing Feature List component directly rather
 * than a new one. Covers any "services grid," "feature highlights," or
 * "treatments"-shaped section: generic capability/benefit labels only,
 * never a specific real service name, price, or claim.
 */
export interface FeatureHighlightsSection {
  type: "featureHighlights";
  heading: string;
  items: { label: string; icon: LucideIcon }[];
}

/**
 * Generic, unattributed quote cards (Premium Realism Phase, Project
 * Owner approved) — covers any "testimonials"/"reviews"-shaped section
 * demand. Every quote is a generic, aspirational sentence in the same
 * register already approved for Trust/Credibility's `valueProps`
 * (WD-157) — never a real name, a real photo, a star rating, or an
 * attributed claim. Attribution is always the literal, structural label
 * "Example Client" (mirrors the existing "Example" tag convention from
 * WD-156/161), identical on every card, never a fabricated distinct
 * person.
 */
export interface TestimonialGridSection {
  type: "testimonialGrid";
  heading: string;
  quotes: string[];
}

/**
 * Generic, role-only placeholder cards (Premium Realism Phase, Project
 * Owner approved) — covers any "team," "doctor/staff," "instructors," or
 * "agent"-shaped section demand. Each card shows only a generic role
 * label (e.g., "Practitioner," "Instructor") and the literal, structural
 * name "Example Team Member" — never a real invented person, credential,
 * or photo (no photography is used anywhere in the Interactive Showcase,
 * Premium Realism Phase decision).
 */
export interface TeamGridSection {
  type: "teamGrid";
  heading: string;
  roles: string[];
}

/**
 * A grid of tiles (Premium Realism Phase, Project Owner approved;
 * extended to optionally carry a real photo per tile in the UI
 * Refinement Pass, Project Owner approved) — covers any "gallery,"
 * "venues," or "vehicle showcase"-shaped section demand. Each tile
 * carries an `image` when the Project Owner supplied a real photo for
 * that Business Type (`public/interactive-showcase/`, local files only,
 * never fetched from the internet); otherwise it falls back to the
 * original themed gradient block with a generic icon, still tagged
 * "Example" the same way `cardGrid`'s placeholder cards already are.
 * Real photos are always ones the Project Owner explicitly supplied for
 * that exact tile — never reused across multiple tiles, never a stock
 * photo depicting a specific real place, vehicle, or event that wasn't
 * actually provided.
 */
export interface GalleryGridSection {
  type: "galleryGrid";
  heading: string;
  tiles: { label: string; icon: LucideIcon; image?: string }[];
}

/**
 * A single full-width real photo with a heading (UI Refinement Pass,
 * Project Owner approved) — for Business Types with exactly one
 * supporting photo beyond their hero image, where a multi-tile gallery
 * would either need to fabricate additional tiles or repeat the same
 * photo. Always a real, locally-hosted photo the Project Owner supplied
 * (`public/interactive-showcase/`) — this section type does not exist
 * for the icon/gradient-only fallback case, since without a real photo
 * there is nothing distinct for it to show over `conceptual`.
 */
export interface ImageBannerSection {
  type: "imageBanner";
  heading: string;
  image: string;
  /**
   * "full" (default when omitted) keeps the original full-bleed photo
   * with an overlaid heading. "left"/"right" render a genuinely
   * different, split two-column layout instead — photo beside the
   * heading rather than behind it (Genuine Differentiation Pass,
   * Project Owner approved) — so templates using this same section type
   * don't all look identical.
   */
  imagePosition?: "left" | "right" | "full";
}

/**
 * Structural pricing-tier cards with no real numbers (Premium Realism
 * Phase, Project Owner approved) — covers "pricing preview"-shaped
 * section demand while staying consistent with Weber's own
 * Consultation-First Pricing stance (DECISIONS.md WD-006): tier names
 * and generic inclusion labels only, never a dollar figure or specific
 * claim, since a real number would both fabricate a business fact and
 * contradict the pricing model Weber itself follows.
 */
export interface PricingPreviewSection {
  type: "pricingPreview";
  heading: string;
  tiers: { name: string; description: string }[];
}

/**
 * A single decorative "location" panel (Premium Realism Phase, Project
 * Owner approved) — covers "map preview"-shaped section demand without
 * embedding a real map or claiming a real address. A themed gradient
 * panel with a location-pin icon and a generic caption only.
 */
export interface MapPreviewSection {
  type: "mapPreview";
  heading: string;
  caption: string;
}

/**
 * Featured/highlighted items with a badge (Premium Industry Components
 * Phase 3, Project Owner approved) — covers "featured menu," "best
 * seller," "featured listing," or "package"-shaped section demand that
 * `cardGrid` cannot express: `cardGrid`'s cards are deliberately uniform
 * (icon + label + the same "Example" tag on every card), with no concept
 * of one item being distinguished from the others. `badge` is always a
 * generic, structural category word ("Popular," "Featured," "New
 * Arrival") — never a specific claim ("#1 Rated," "50% Off," a star
 * rating) — the same WD-156/157/161 no-fabrication boundary every other
 * section type here already follows. `description` is new too (`cardGrid`
 * has none) — this is deliberately a higher information-density,
 * higher-visual-weight card than `cardGrid`'s, not a reskin of it.
 */
export interface FeaturedGridSection {
  type: "featuredGrid";
  heading: string;
  items: {
    label: string;
    description: string;
    badge: string;
    icon: LucideIcon;
  }[];
}

/**
 * Dashboard-style metric tiles (Premium Industry Components Phase 3,
 * Project Owner approved) — covers "system metrics," "dashboard
 * preview," or "impact"-shaped section demand. `metric` is always a
 * generic metric *name* ("Response Time," "Uptime," "Communities
 * Reached") — deliberately never a number, percentage, or specific
 * figure, since any real-looking statistic would fabricate a business
 * result (DECISIONS.md WD-156/157/161), the same boundary
 * `PricingPreviewSection` already draws around dollar figures. The
 * visual payoff comes from typography/layout (large, bold metric name as
 * the focal point, no icon) rather than from inventing a number —
 * deliberately inverted hierarchy from every icon-forward section type
 * above.
 */
export interface StatHighlightsSection {
  type: "statHighlights";
  heading: string;
  items: { metric: string; label: string }[];
}

/**
 * An ordered sequence of steps (Premium Industry Components Phase 3,
 * Project Owner approved) — covers every "...process" or "...journey"
 * shaped section demand (consultation process, buying process, learning
 * journey, appointment process). Reuses the existing `Timeline` component
 * directly (`src/components/data-display/timeline.tsx`, already built
 * and already used for Weber's own real "Process" section) rather than
 * inventing a new ordered-list primitive — this is the one new section
 * type here that adds no new visual component at all, only wires an
 * existing one into the Preview Section Renderer's dispatch for the
 * first time. `description` stays generic/aspirational, the same
 * register as `ConceptualSection`'s body — never a specific real-world
 * claim about how the business actually operates.
 */
export interface ProcessStepsSection {
  type: "processSteps";
  heading: string;
  steps: { title: string; description: string }[];
}

export type PreviewSection =
  | CardGridSection
  | ValuePropsSection
  | CategoryListSection
  | ConceptualSection
  | FaqSection
  | FeatureHighlightsSection
  | TestimonialGridSection
  | TeamGridSection
  | GalleryGridSection
  | PricingPreviewSection
  | MapPreviewSection
  | ImageBannerSection
  | FeaturedGridSection
  | StatHighlightsSection
  | ProcessStepsSection;

/**
 * One fully-authored template. `heroHeadline`, `ctaMessage`, and any
 * section heading marked for substitution may contain the same
 * `{{companyName}}` placeholder token the original resolver already
 * uses (`GLOBAL_REGISTRY.companyNamePlaceholder`) — substituted the same
 * way, never algorithmically embellished.
 */
export interface PreviewTemplate {
  templateId: TemplateId;
  /** Fake, non-interactive nav labels — visual demonstration only, never rendered as real links (avoids dead tab-stops for keyboard users). */
  navLabels: string[];
  heroHeadline: string;
  heroSupportingText: string;
  /**
   * One representative Lucide icon rendered large, subtle, and decorative
   * behind the hero (Premium Realism Phase, Project Owner approved) — the
   * "imagery style" for this industry without using photography (Premium
   * Realism Phase decision: CSS/icon-only visual treatment). Purely
   * decorative (`aria-hidden`), never the sole carrier of meaning. Only
   * rendered when `heroImage` is absent (UI Refinement Pass) — once a
   * real photo fills the hero, a second decorative icon layered on top
   * would be clutter, not polish.
   */
  heroIcon: LucideIcon;
  /**
   * A real, locally-hosted photo (`public/interactive-showcase/`) used
   * as the hero's full-bleed background (UI Refinement Pass, Project
   * Owner approved) — the Project Owner supplied one specific photo per
   * photo-enabled Business Type; never fetched from the internet, never
   * a stock placeholder. Absent for the one Business Type with no
   * supplied photo ("Other"), which keeps the original gradient+icon
   * hero treatment.
   */
  heroImage?: string;
  /**
   * Which of Template Renderer's four hero compositions this template
   * uses (Premium Industry Identity, Project Owner approved) — the
   * mechanism that actually satisfies "different industries should use
   * different hero layouts": a closed, reusable set of layouts every
   * template picks from, not a bespoke hero built per template.
   * - `overlay`: full-bleed photo behind centered text (the original,
   *   still-used treatment) — dark, atmospheric, dramatic.
   * - `split`: photo and text side by side, text left-aligned — modern,
   *   product-forward.
   * - `editorial`: left-aligned text at `text-display` size with the
   *   photo as a contained banner below it, not a background — asymmetric,
   *   narrative-led.
   * - `minimal`: the original icon+gradient treatment with no photo —
   *   only meaningful (and only used) where `heroImage` is absent.
   */
  heroLayout: "overlay" | "split" | "editorial" | "minimal";
  /** For `heroLayout: "split"` only — which side the photo renders on. Defaults to "right". */
  heroImagePosition?: "left" | "right";
  /**
   * A row of generic, non-interactive category labels shown beneath the
   * hero subtext (Premium Industry Identity, Project Owner approved) —
   * reuses the existing Tag component, not a new element. Gives the
   * "promotional"/"browse by category" feel some industries (Real
   * Estate, Retail) need without a fake search box or fake filter
   * control (WD-050 — no dead tab-stop that looks actionable but isn't).
   * Omitted entirely for templates that don't need it.
   */
  heroTags?: string[];
  sections: PreviewSection[];
  ctaMessage: string;
  /**
   * The real, functional `CtaBanner` button's own label (Premium Industry
   * Identity Phase 2, Project Owner approved) — industry-specific but
   * always partnership-toned (DECISIONS.md WD-007: "Let's discuss your
   * project," "Request your website," "Tell us about your business," and
   * no others). `CtaBanner` sits outside `PreviewChrome`'s simulated
   * mini-site frame and links to Weber's real `/contact` route, so its
   * label can never promise a literal business feature ("Reserve a
   * Table," "Book Appointment") that Weber doesn't actually provide there
   * — doing so would both violate WD-007's closed, non-transactional
   * phrase set and fabricate a capability (DECISIONS.md WD-141/147/156/
   * 157/161's no-fabrication content boundary). Every value here follows
   * the same "Let's <do the industry-relevant thing>" shape as WD-007's
   * own approved example, so the button reads as tailored to the visitor
   * without ever implying the preview itself is live/functional.
   */
  ctaLabel: string;
  /**
   * A short, generic brand tagline shown in `PreviewChrome`'s nav bar
   * beneath the company name (Dynamic Brand Identity, Project Owner
   * approved) — deterministically selected per company name from the
   * template's own curated `taglineVariations`, the same pipeline
   * `heroHeadline`/`ctaMessage` already go through. Always generic and
   * aspirational, the same content boundary as every other string in this
   * system (DECISIONS.md WD-156/157/161) — never a specific claim, never
   * an implied award or certification.
   */
  tagline: string;
  /**
   * The icon rendered inside `PreviewChrome`'s brand mark when
   * `theme.logoMarkStyle` is `"icon"` (Dynamic Brand Identity, Project
   * Owner approved) — the same `heroIcon` already authored for this
   * template unless the source explicitly overrode it via
   * `PreviewTemplateSource.logoIcon` (only Technology and Health &
   * Wellness do, since their own `heroIcon` doesn't match this phase's
   * brand-mark vocabulary). Ignored entirely when `logoMarkStyle` is
   * `"monogram"`.
   */
  logoIcon: LucideIcon;
}

/**
 * One curated hero headline + supporting-text pair (Premium
 * Personalization, Project Owner approved) — kept as a matched pair,
 * never two independent arrays mixed and matched, so a headline and its
 * supporting text always read as one coherent, intentionally-written
 * voice rather than a random combination.
 */
export interface HeroVariation {
  headline: string;
  supportingText: string;
}

/**
 * One curated CTA message + action-label pair (Premium Personalization,
 * Project Owner approved) — kept as a matched pair for the same reason
 * `HeroVariation` is: `label`'s own WD-007 partnership-tone requirement
 * is easiest to keep intact when it's authored alongside the message it
 * accompanies, not selected independently of it.
 */
export interface CtaVariation {
  message: string;
  label: string;
}

/**
 * A `PreviewSection` plus optional curated heading variations (Premium
 * Personalization, Project Owner approved) — deterministically selected
 * by the Resolver per company name, replacing this section's own
 * canonical `heading` in the resolved output. Optional: sections without
 * variants keep their single `heading` exactly as authored, unchanged
 * from every earlier phase. `PreviewSection` itself (the type
 * `PreviewSectionRenderer` actually consumes) gains no new field at all —
 * the renderer stays completely unaware this selection layer exists.
 */
export type PreviewSectionSource = PreviewSection & {
  headingVariants?: string[];
};

/**
 * The authored *source* for one template (Premium Personalization,
 * Project Owner approved) — everything `PreviewTemplate` already has,
 * except the fields this phase turns into curated, deterministically-
 * selected variation pools: `heroHeadline`/`heroSupportingText` →
 * `heroVariations`, `navLabels` → `navLabelVariations`,
 * `ctaMessage`/`ctaLabel` → `ctaVariations`, and each section's own
 * `heading` optionally gains `headingVariants`
 * (`PreviewSectionSource`). `content.ts` is typed against this, not
 * `PreviewTemplate` — `resolve-template.ts` is the one and only place
 * that reads a `PreviewTemplateSource`, deterministically selects one
 * option per pool (`src/lib/deterministic-pick.ts`), and produces an
 * ordinary, fully-resolved `PreviewTemplate` — the exact same shape
 * `TemplateRenderer`/`PreviewChrome`/`PreviewSectionRenderer` have always
 * consumed and still consume, unaware this selection layer exists at
 * all. Every pool must be non-empty; a template with only one authored
 * option for a given field is still valid — a pool of one, always
 * selected, exactly matching that field's previous single-value
 * behavior. `heroIcon`/`heroImage`/`heroLayout`/`heroImagePosition`/
 * `heroTags` are unchanged from `PreviewTemplate`'s own fields of the
 * same name — this phase does not vary them. `taglineVariations` (Dynamic
 * Brand Identity, Project Owner approved) follows the exact same pool
 * pattern as `heroVariations`/`ctaVariations` — a plain array rather than
 * a paired shape like those two, since a tagline stands alone. `logoIcon`
 * is an *optional* override of `heroIcon` for the brand mark specifically
 * — omitted on every template except the two whose `heroIcon` doesn't fit
 * this phase's own brand-mark vocabulary (Technology, Health & Wellness);
 * every other template's brand mark reuses `heroIcon` directly, resolved
 * in `resolve-template.ts` as `source.logoIcon ?? source.heroIcon`.
 */
export interface PreviewTemplateSource {
  templateId: TemplateId;
  navLabelVariations: string[][];
  heroVariations: HeroVariation[];
  heroIcon: LucideIcon;
  heroImage?: string;
  heroLayout: "overlay" | "split" | "editorial" | "minimal";
  heroImagePosition?: "left" | "right";
  heroTags?: string[];
  sections: PreviewSectionSource[];
  ctaVariations: CtaVariation[];
  taglineVariations: string[];
  logoIcon?: LucideIcon;
}

export type TemplateRegistry = Partial<Record<BusinessTypeId, TemplateId>>;
