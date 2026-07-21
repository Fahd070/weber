import type { LucideIcon } from "lucide-react";

/**
 * Shared type definitions for the Interactive Showcase content registries
 * and resolver (DECISIONS.md WD-159, WD-160, WD-162, WD-165, WD-166).
 * Registry ownership boundaries are enforced structurally by these types:
 * PatternId/BusinessTypeId are closed unions (no fifth pattern, no
 * fifteenth business type), BusinessTypeRecord is a discriminated union
 * keyed by patternId (a Business Type's content shape is compile-time
 * guaranteed to match its assigned Pattern's schema), and tuple types
 * ([string, string, string]) enforce exact counts (three value
 * propositions, three placeholder cards) without runtime validation code.
 */

export type PatternId =
  "visual-grid" | "trust-credibility" | "offering-forward" | "neutral-fallback";

export type BusinessTypeId =
  | "restaurants-cafes"
  | "retail-shops"
  | "professional-services"
  | "health-wellness"
  | "beauty-personal-care"
  | "home-trade-services"
  | "real-estate"
  | "education-training"
  | "hospitality-events"
  | "technology-software"
  | "automotive"
  | "nonprofit-community"
  | "ecommerce"
  | "other";

/** Global-owned CTA record (DECISIONS.md WD-161) — never Pattern- or Business-Type-specific. */
export interface CtaRecord {
  label: string;
  href: string;
}

/** Global registry shape (DECISIONS.md WD-159, WD-165). */
export interface GlobalRegistry {
  conceptPreviewLabel: string;
  cta: CtaRecord;
  /** Token substituted for the visitor's Company Name inside pattern headline templates. */
  companyNamePlaceholder: string;
}

/** Visual/Grid Pattern-owned placeholder card (DECISIONS.md WD-156, WD-161, WD-163). */
export interface PlaceholderCard {
  label: string;
  icon: LucideIcon;
}

/** Visual/Grid Pattern-owned fixed content — shared and identical across every mapped Business Type. */
export interface VisualGridFixedContent {
  cards: [PlaceholderCard, PlaceholderCard, PlaceholderCard];
  exampleTagLabel: string;
}

/** Neutral/Fallback Pattern-owned fixed content — the entire content set (DECISIONS.md WD-160). */
export interface NeutralFallbackFixedContent {
  headline: string;
  supportingText: string;
}

/** Pattern registry shape — exactly four entries, no more, no less (DECISIONS.md WD-154, WD-165). */
export interface PatternRegistry {
  "visual-grid": {
    patternId: "visual-grid";
    fixedContent: VisualGridFixedContent;
  };
  "trust-credibility": { patternId: "trust-credibility"; fixedContent: null };
  "offering-forward": { patternId: "offering-forward"; fixedContent: null };
  "neutral-fallback": {
    patternId: "neutral-fallback";
    fixedContent: NeutralFallbackFixedContent;
  };
}

/** Business-Type-supplied content per pattern (DECISIONS.md WD-160, WD-162). */
export interface VisualGridContent {
  headline: string;
  supportingText?: string;
}

export interface TrustCredibilityContent {
  headline: string;
  valueProps: [string, string, string];
}

export interface OfferingForwardContent {
  headline: string;
  supportingLine: string;
}

/** "Other" supplies no content payload at all (DECISIONS.md WD-160). */
export type NeutralFallbackContent = Record<string, never>;

/**
 * A Business Type record. Discriminated by patternId so a record's
 * `content` shape is structurally guaranteed to match its assigned
 * Pattern's schema — an invalid pairing fails to compile.
 */
export type BusinessTypeRecord =
  | {
      businessTypeId: BusinessTypeId;
      label: string;
      patternId: "visual-grid";
      content: VisualGridContent;
    }
  | {
      businessTypeId: BusinessTypeId;
      label: string;
      patternId: "trust-credibility";
      content: TrustCredibilityContent;
    }
  | {
      businessTypeId: BusinessTypeId;
      label: string;
      patternId: "offering-forward";
      content: OfferingForwardContent;
    }
  | {
      businessTypeId: BusinessTypeId;
      label: string;
      patternId: "neutral-fallback";
      content: NeutralFallbackContent;
    };

/** Business Type registry shape — exactly fourteen entries (DECISIONS.md WD-152, WD-165). */
export type BusinessTypeRegistry = Record<BusinessTypeId, BusinessTypeRecord>;

/** Fully-resolved props each Pattern component receives — never a businessTypeId (DECISIONS.md WD-166). */
export interface VisualGridResolvedProps {
  headline: string;
  supportingText?: string;
  cards: [PlaceholderCard, PlaceholderCard, PlaceholderCard];
  exampleTagLabel: string;
  cta: CtaRecord;
}

export interface TrustCredibilityResolvedProps {
  headline: string;
  valueProps: [string, string, string];
  cta: CtaRecord;
}

export interface OfferingForwardResolvedProps {
  headline: string;
  supportingLine: string;
  cta: CtaRecord;
}

export interface NeutralFallbackResolvedProps {
  headline: string;
  supportingText: string;
  cta: CtaRecord;
}

/** The Resolver's return value — a discriminated union the Global shell renders exhaustively. */
export type ResolvedPreview =
  | { patternId: "visual-grid"; props: VisualGridResolvedProps }
  | { patternId: "trust-credibility"; props: TrustCredibilityResolvedProps }
  | { patternId: "offering-forward"; props: OfferingForwardResolvedProps }
  | { patternId: "neutral-fallback"; props: NeutralFallbackResolvedProps };
