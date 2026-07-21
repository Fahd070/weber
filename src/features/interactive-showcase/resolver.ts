import { GLOBAL_REGISTRY } from "@/content/interactive-showcase/global";
import { PATTERN_REGISTRY } from "@/content/interactive-showcase/patterns";
import { BUSINESS_TYPE_REGISTRY } from "@/content/interactive-showcase/business-types";
import type {
  BusinessTypeId,
  ResolvedPreview,
} from "@/content/interactive-showcase/types";

/**
 * The Interactive Showcase Resolver (DECISIONS.md WD-164, WD-165, WD-166)
 * — the only module permitted to read from all three registries and
 * combine them into a single resolved payload. Pure function: no async,
 * no network calls, no side effects, consistent with WD-149's
 * deterministic-rendering requirement (every registry is static and
 * pre-authored, so resolution never needs to be asynchronous).
 *
 * Company Name is trimmed and falls back to a neutral default when empty,
 * then substituted directly into the placeholder token — no algorithmic
 * embellishment. The resolved string is later rendered as plain JSX text
 * content (never via dangerouslySetInnerHTML), which is React's own
 * default XSS-safe rendering path.
 */
function substitutePlaceholder(template: string, companyName: string): string {
  return template.replaceAll(
    GLOBAL_REGISTRY.companyNamePlaceholder,
    companyName,
  );
}

export function resolveShowcasePreview(
  businessTypeId: BusinessTypeId,
  rawCompanyName: string,
): ResolvedPreview {
  const companyName = rawCompanyName.trim() || "Your Business";
  const businessType = BUSINESS_TYPE_REGISTRY[businessTypeId];
  const cta = GLOBAL_REGISTRY.cta;

  switch (businessType.patternId) {
    case "visual-grid": {
      const pattern = PATTERN_REGISTRY["visual-grid"];
      return {
        patternId: "visual-grid",
        props: {
          headline: substitutePlaceholder(
            businessType.content.headline,
            companyName,
          ),
          supportingText: businessType.content.supportingText,
          cards: pattern.fixedContent.cards,
          exampleTagLabel: pattern.fixedContent.exampleTagLabel,
          cta,
        },
      };
    }
    case "trust-credibility": {
      return {
        patternId: "trust-credibility",
        props: {
          headline: substitutePlaceholder(
            businessType.content.headline,
            companyName,
          ),
          valueProps: businessType.content.valueProps,
          cta,
        },
      };
    }
    case "offering-forward": {
      return {
        patternId: "offering-forward",
        props: {
          headline: substitutePlaceholder(
            businessType.content.headline,
            companyName,
          ),
          supportingLine: businessType.content.supportingLine,
          cta,
        },
      };
    }
    case "neutral-fallback": {
      const pattern = PATTERN_REGISTRY["neutral-fallback"];
      return {
        patternId: "neutral-fallback",
        props: {
          headline: substitutePlaceholder(
            pattern.fixedContent.headline,
            companyName,
          ),
          supportingText: pattern.fixedContent.supportingText,
          cta,
        },
      };
    }
  }
}
