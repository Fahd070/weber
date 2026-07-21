import type { BusinessTypeRegistry } from "./types";

/**
 * Business Type content registry (DECISIONS.md WD-152, WD-155, WD-160,
 * WD-165) — data only, no rendering logic, no React import. Exactly
 * fourteen entries, each supplying only the content values its assigned
 * Pattern's schema declares (DECISIONS.md WD-166) — never structure,
 * never Pattern-owned fixed content.
 *
 * Copy status: every string below is the illustrative draft copy already
 * produced and reviewed in the Interactive Showcase Preview Copy
 * Specification Workshop (Phase 1), reused verbatim here — it follows
 * every rule WD-156/157/161 established (generic, aspirational,
 * layout-focused, no fabricated claims), but WD-161's Final Decision
 * explicitly left "exact final copy for each Business Type" open. This
 * is draft content carried into code so the feature is functional, not a
 * new copy decision — final sign-off remains a separate, still-open item.
 */
export const BUSINESS_TYPE_REGISTRY: BusinessTypeRegistry = {
  "restaurants-cafes": {
    businessTypeId: "restaurants-cafes",
    label: "Restaurants & Cafés",
    patternId: "offering-forward",
    content: {
      headline:
        "A concept for how {{companyName}} could present its dining experience online.",
      supportingLine:
        "A warm, inviting layout designed around your dining experience.",
    },
  },
  "retail-shops": {
    businessTypeId: "retail-shops",
    label: "Retail & Shops",
    patternId: "visual-grid",
    content: {
      headline:
        "A concept for how {{companyName}} could showcase its products online.",
      supportingText:
        "A professional, easy-to-browse layout — the kind of foundation Weber builds for businesses like yours.",
    },
  },
  "professional-services": {
    businessTypeId: "professional-services",
    label: "Professional Services",
    patternId: "trust-credibility",
    content: {
      headline: "A concept for how {{companyName}} could build trust online.",
      valueProps: [
        "Clear expertise, presented professionally",
        "Easy ways for clients to reach you",
        "A design that reflects your credibility",
      ],
    },
  },
  "health-wellness": {
    businessTypeId: "health-wellness",
    label: "Health & Wellness",
    patternId: "trust-credibility",
    content: {
      headline: "A concept for how {{companyName}} could build trust online.",
      valueProps: [
        "A calming, professional first impression",
        "Easy appointment information for visitors",
        "A design that reflects care and trust",
      ],
    },
  },
  "beauty-personal-care": {
    businessTypeId: "beauty-personal-care",
    label: "Beauty & Personal Care",
    patternId: "trust-credibility",
    content: {
      headline: "A concept for how {{companyName}} could build trust online.",
      valueProps: [
        "A polished showcase of your services",
        "An inviting, professional first impression",
        "Easy ways for clients to connect",
      ],
    },
  },
  "home-trade-services": {
    businessTypeId: "home-trade-services",
    label: "Home & Trade Services",
    patternId: "trust-credibility",
    content: {
      headline: "A concept for how {{companyName}} could build trust online.",
      valueProps: [
        "A trustworthy first impression for new customers",
        "Clear presentation of your services",
        "Easy ways for customers to reach you",
      ],
    },
  },
  "real-estate": {
    businessTypeId: "real-estate",
    label: "Real Estate",
    patternId: "visual-grid",
    content: {
      headline:
        "A concept for how {{companyName}} could showcase its listings online.",
      supportingText:
        "A professional, easy-to-browse layout — the kind of foundation Weber builds for businesses like yours.",
    },
  },
  "education-training": {
    businessTypeId: "education-training",
    label: "Education & Training",
    patternId: "trust-credibility",
    content: {
      headline: "A concept for how {{companyName}} could build trust online.",
      valueProps: [
        "A clear presentation of your programs",
        "A professional, easy-to-navigate design",
        "Easy ways for students to get in touch",
      ],
    },
  },
  "hospitality-events": {
    businessTypeId: "hospitality-events",
    label: "Hospitality & Events",
    patternId: "visual-grid",
    content: {
      headline:
        "A concept for how {{companyName}} could showcase its spaces online.",
      supportingText:
        "A professional, easy-to-browse layout — the kind of foundation Weber builds for businesses like yours.",
    },
  },
  "technology-software": {
    businessTypeId: "technology-software",
    label: "Technology & Software",
    patternId: "offering-forward",
    content: {
      headline:
        "A concept for how {{companyName}} could present its product online.",
      supportingLine:
        "A clean, modern layout designed to highlight what makes your product valuable.",
    },
  },
  automotive: {
    businessTypeId: "automotive",
    label: "Automotive",
    patternId: "visual-grid",
    content: {
      headline:
        "A concept for how {{companyName}} could showcase its vehicles online.",
      supportingText:
        "A professional, easy-to-browse layout — the kind of foundation Weber builds for businesses like yours.",
    },
  },
  "nonprofit-community": {
    businessTypeId: "nonprofit-community",
    label: "Nonprofit & Community Organizations",
    patternId: "trust-credibility",
    content: {
      headline:
        "A concept for how {{companyName}} could share its mission online.",
      valueProps: [
        "A clear presentation of your mission",
        "An inviting, professional first impression",
        "Easy ways for supporters to connect",
      ],
    },
  },
  ecommerce: {
    businessTypeId: "ecommerce",
    label: "E-commerce",
    patternId: "visual-grid",
    content: {
      headline:
        "A concept for how {{companyName}} could showcase its products online.",
      supportingText:
        "A professional, easy-to-browse layout — the kind of foundation Weber builds for businesses like yours.",
    },
  },
  other: {
    businessTypeId: "other",
    label: "Other",
    patternId: "neutral-fallback",
    content: {},
  },
};
