import { GLOBAL_REGISTRY } from "@/content/interactive-showcase/global";
import { TEMPLATE_CONTENT } from "@/content/interactive-showcase/templates/content";
import { BUSINESS_TYPE_TEMPLATE_REGISTRY } from "@/content/interactive-showcase/templates/registry";
import {
  PREVIEW_THEMES,
  type PreviewTheme,
} from "@/content/interactive-showcase/templates/themes";
import { pickVariation } from "@/lib/deterministic-pick";
import type {
  PreviewSection,
  PreviewSectionSource,
  PreviewTemplate,
} from "@/content/interactive-showcase/templates/types";
import type { BusinessTypeId } from "@/content/interactive-showcase/types";

/**
 * Resolves a Business Type + Company Name to a fully-substituted
 * `PreviewTemplate` plus its `PreviewTheme`, or `null` if that Business
 * Type has no registered V2 template (Interactive Showcase V2, Design
 * Evolution, Project Owner approved) — the caller falls back to the
 * original, unmodified pattern resolver in that case. Pure function, no
 * async, no side effects, the same determinism guarantee the original
 * resolver already provides (DECISIONS.md WD-149). Company Name is
 * trimmed and falls back to the same neutral default the original
 * resolver uses, then substituted directly into placeholder tokens — no
 * algorithmic embellishment. The theme lookup (Premium Realism Phase,
 * Project Owner approved) is keyed by `businessTypeId` directly —
 * `PREVIEW_THEMES` is a `Record<BusinessTypeId, PreviewTheme>`, so every
 * Business Type with a template also always has a theme; no separate
 * `themeId` field was added to `PreviewTemplate` for this.
 *
 * Personalization (Premium Personalization Phase, Project Owner
 * approved): before substitution, one option is deterministically picked
 * from each of the source template's curated variation pools
 * (`heroVariations`, `navLabelVariations`, `ctaVariations`,
 * `taglineVariations`, and any section's own `headingVariants`) via
 * `pickVariation` (`src/lib/deterministic-pick.ts`) — the same company
 * name always picks the same option every time (no
 * `Math.random()`/`Date.now()`, per the phase's own explicit
 * "deterministic selection" requirement); different company names
 * plausibly land on different options, purely from each name's own
 * string content — never AI, never an external call. Each dimension is
 * seeded with the company name plus a short, distinct tag (`:hero`,
 * `:nav`, `:cta`, `:tagline`, `:heading:<n>`) so the dimensions don't all
 * move in lockstep for the same company name — landing on hero variation
 * 1 doesn't guarantee also landing on nav variation 1. Selection happens
 * once, here, before substitution — every downstream consumer
 * (`TemplateRenderer`, `PreviewChrome`, `PreviewSectionRenderer`)
 * receives an ordinary, already-resolved `PreviewTemplate`, the exact
 * shape it has always consumed, with no awareness a variation pool ever
 * existed.
 *
 * Brand identity (Dynamic Brand Identity, Project Owner approved) reuses
 * this exact same pipeline for `tagline` — one more `pickVariation` call,
 * substituted the same way as every other field. `logoIcon` needs no
 * selection at all: it resolves to `source.logoIcon ?? source.heroIcon`,
 * reusing whichever icon the template already carries rather than adding
 * a new pool for a value every template already effectively has one of.
 */
export function resolveTemplatePreview(
  businessTypeId: BusinessTypeId,
  rawCompanyName: string,
): {
  template: PreviewTemplate;
  companyName: string;
  theme: PreviewTheme;
} | null {
  const templateId = BUSINESS_TYPE_TEMPLATE_REGISTRY[businessTypeId];
  if (!templateId) {
    return null;
  }

  const companyName = rawCompanyName.trim() || "Your Business";
  const source = TEMPLATE_CONTENT[templateId];

  const hero = pickVariation(`${companyName}:hero`, source.heroVariations);
  const navLabels = pickVariation(
    `${companyName}:nav`,
    source.navLabelVariations,
  );
  const cta = pickVariation(`${companyName}:cta`, source.ctaVariations);
  const tagline = pickVariation(
    `${companyName}:tagline`,
    source.taglineVariations,
  );

  return {
    companyName,
    theme: PREVIEW_THEMES[businessTypeId],
    template: {
      templateId: source.templateId,
      navLabels,
      heroHeadline: substitute(hero.headline, companyName),
      heroSupportingText: substitute(hero.supportingText, companyName),
      heroIcon: source.heroIcon,
      heroImage: source.heroImage,
      heroLayout: source.heroLayout,
      heroImagePosition: source.heroImagePosition,
      heroTags: source.heroTags,
      sections: source.sections.map((section, index) =>
        resolveSection(section, companyName, index),
      ),
      ctaMessage: substitute(cta.message, companyName),
      ctaLabel: cta.label,
      tagline: substitute(tagline, companyName),
      logoIcon: source.logoIcon ?? source.heroIcon,
    },
  };
}

function substitute(text: string, companyName: string): string {
  return text.replaceAll(GLOBAL_REGISTRY.companyNamePlaceholder, companyName);
}

/**
 * Resolves one `PreviewSectionSource` to a plain `PreviewSection` —
 * picks a heading from `headingVariants` when present (seeded by company
 * name plus this section's own position, so two different sections in
 * the same template don't always pick the "same-numbered" variation),
 * otherwise keeps the section's own canonical `heading` exactly as
 * before, then substitutes `{{companyName}}` into whichever heading won,
 * the same single substitution mechanism `resolveTemplatePreview` itself
 * uses.
 */
function resolveSection(
  section: PreviewSectionSource,
  companyName: string,
  index: number,
): PreviewSection {
  const { headingVariants, ...rest } = section;
  const heading = headingVariants
    ? pickVariation(`${companyName}:heading:${index}`, headingVariants)
    : rest.heading;
  return { ...rest, heading: substitute(heading, companyName) };
}
