import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Stack } from "@/components/layout/stack";
import { Cluster } from "@/components/layout/cluster";
import { Grid } from "@/components/layout/grid";
import { AspectRatio } from "@/components/layout/aspect-ratio";
import { Tag } from "@/components/data-display/tag";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { Icon } from "@/components/utilities/icon";
import { cn } from "@/lib/utils";
import { PreviewChrome } from "./preview-chrome";
import { PreviewSectionRenderer } from "./preview-sections";
import type { PreviewTemplate } from "@/content/interactive-showcase/templates/types";
import {
  CARD_RADIUS_CLASS,
  PREVIEW_GRADIENT_CLASS,
  type PreviewTheme,
} from "@/content/interactive-showcase/templates/themes";

export interface TemplateRendererProps {
  template: PreviewTemplate;
  companyName: string;
  theme: PreviewTheme;
}

/** Maps `PreviewTheme.headingTracking` to Tailwind's own existing `tracking-*` utilities — no new token. */
const HEADING_TRACKING_CLASS: Record<PreviewTheme["headingTracking"], string> =
  {
    tight: "tracking-tight",
    normal: "tracking-normal",
    wide: "tracking-wide",
  };

/** Maps `theme.headingWeight` to Tailwind's own approved weight utilities (WD-028) — the same mapping Preview Section Renderer applies to every section heading, applied here to the hero heading. */
const HEADING_WEIGHT_CLASS: Record<PreviewTheme["headingWeight"], string> = {
  semibold: "font-semibold",
  bold: "font-bold",
};

/** Maps `theme.heroSpacing` to the same already-approved spacing-scale steps `RHYTHM_CLASS` (Preview Section Renderer) uses for body sections (WD-030/WD-134) — applied uniformly to the hero `Section` across all four `heroLayout` branches, replacing what used to be spacing hardcoded per branch. */
const HERO_SPACING_CLASS: Record<PreviewTheme["heroSpacing"], string> = {
  compact: "py-12 md:py-16",
  standard: "py-16 md:py-24",
  spacious: "py-24 md:py-32",
};

/**
 * `template.heroTags` (Premium Industry Identity, Project Owner approved)
 * rendered as a row of plain `Tag`s beneath the hero copy — decorative
 * category labels, not interactive filters (WD-050). `align` follows the
 * hero layout's own text alignment: centered layouts (Overlay, Minimal)
 * center the row; left-aligned layouts (Split, Editorial) start it.
 */
function HeroTagsRow({
  tags,
  align,
}: {
  tags: string[];
  align: "center" | "start";
}) {
  return (
    <Cluster
      gap={2}
      className={align === "start" ? "justify-start" : "justify-center"}
    >
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </Cluster>
  );
}

/**
 * Renders any `PreviewTemplate` — the single generic component every V2
 * template runs through (Interactive Showcase V2, Design Evolution,
 * Project Owner approved). Adding a future business type's template
 * requires exactly two steps: author its `PreviewTemplate` content
 * (`content.ts`) and add its Business Type mapping (`registry.ts`) —
 * nothing here changes. The fake nav/hero/sections/fake footer are all
 * bounded inside `PreviewChrome`, visually distinct as a simulated
 * mini-site; the final CTA sits outside that frame since it's a real,
 * functional link to Weber's own `/contact` — not part of the
 * simulated site.
 *
 * The hero dispatches on `template.heroLayout` (Premium Industry
 * Identity, Project Owner approved) — a closed set of four reusable
 * compositions, not a bespoke hero per template, so the renderer stays
 * generic while every industry still reads as visually distinct:
 * - `overlay`: the original full-bleed-photo-behind-centered-text
 *   treatment (Premium Realism Phase / UI Refinement Pass). A flat,
 *   uniform dark scrim (`bg-black/55`) keeps heading/body contrast
 *   reliable regardless of where the centered text lands relative to the
 *   photo's own brightness; the theme's own gradient layers on top at low
 *   opacity for industry color identity.
 * - `minimal`: the original icon+gradient fallback with no photo — only
 *   valid where `heroImage` is absent, since a decorative icon over an
 *   empty gradient would be clutter once a real photo exists.
 * - `split`: photo and text side by side via `Grid`, text left-aligned —
 *   a modern, product-forward composition. `template.heroImagePosition`
 *   (defaults `"right"`) decides which column the photo renders in. The
 *   photo is contained (`AspectRatio`, not a background), radius-matched
 *   to the template's own `theme.cardRadius`.
 * - `editorial`: left-aligned text at `text-display` size with the photo
 *   as a contained banner *below* the text, not behind it — an
 *   asymmetric, narrative-led composition for industries that read as
 *   instructor-/expertise-led rather than atmosphere-led.
 *
 * `template.heroIcon` is only ever rendered by the `minimal` branch.
 * `template.heroTags`, when present, renders as a decorative `Tag` row
 * beneath the hero copy in every layout (`HeroTagsRow`) — never a fake
 * search/filter control (WD-050). The hero photo is never lazy-loaded
 * (it's the page's largest above-the-fold content); every other real
 * photo in this feature (Preview Section Renderer's gallery tiles and
 * image banner) is. Sections alternate a subtle accent-tinted background
 * (`PreviewSectionRenderer`'s own `alternate` prop) for visual rhythm
 * down the page.
 *
 * Hero *alignment* (`center` vs `start`) and hero *composition* are
 * deliberately not separate `PreviewTheme` fields (Premium Industry
 * Identity Phase 2, Project Owner approved) — each is entirely
 * determined by `template.heroLayout` (`overlay`/`minimal` center,
 * `split`/`editorial` start), the single source of truth for hero shape.
 * A second, independent axis for either would let a template request an
 * incoherent combination (e.g. `overlay`'s full-bleed dramatic text with
 * `start` alignment) and would itself be the "duplicate/parallel Hero
 * system" this phase's own instructions rule out. `theme.heroSpacing`
 * *is* a genuine, non-duplicative addition: unlike alignment/composition,
 * vertical padding has no coupling to which layout is chosen — the same
 * `spacious` hero padding is meaningful whether the layout is `overlay`
 * or `split` — so it varies independently as its own theme field,
 * applied uniformly across all four branches below via
 * `HERO_SPACING_CLASS`, replacing what used to be spacing hardcoded per
 * branch.
 */
export function TemplateRenderer({
  template,
  companyName,
  theme,
}: TemplateRendererProps) {
  const headingWeightClass = HEADING_WEIGHT_CLASS[theme.headingWeight];
  const headingTrackingClass = HEADING_TRACKING_CLASS[theme.headingTracking];
  const cardRadiusClass = CARD_RADIUS_CLASS[theme.cardRadius];
  const heroSpacingClass = HERO_SPACING_CLASS[theme.heroSpacing];

  return (
    <Stack gap={6}>
      <PreviewChrome
        companyName={companyName}
        navLabels={template.navLabels}
        theme={theme}
        tagline={template.tagline}
        logoIcon={template.logoIcon}
      >
        {template.heroLayout === "split" && template.heroImage ? (
          <Section className={cn("relative overflow-hidden", heroSpacingClass)}>
            <div
              aria-hidden="true"
              className={cn(
                "absolute inset-0 opacity-10",
                PREVIEW_GRADIENT_CLASS,
              )}
            />
            <Container size={theme.contentWidth} className="relative">
              <Grid cols={{ base: 1, md: 2 }} gap={8} className="items-center">
                {template.heroImagePosition === "left" ? (
                  <>
                    <HeroPhoto
                      image={template.heroImage}
                      radiusClass={cardRadiusClass}
                    />
                    <HeroCopy
                      template={template}
                      align="start"
                      size="text-h1"
                      headingWeightClass={headingWeightClass}
                      headingTrackingClass={headingTrackingClass}
                    />
                  </>
                ) : (
                  <>
                    <HeroCopy
                      template={template}
                      align="start"
                      size="text-h1"
                      headingWeightClass={headingWeightClass}
                      headingTrackingClass={headingTrackingClass}
                    />
                    <HeroPhoto
                      image={template.heroImage}
                      radiusClass={cardRadiusClass}
                    />
                  </>
                )}
              </Grid>
            </Container>
          </Section>
        ) : template.heroLayout === "editorial" ? (
          <Section className={cn("relative overflow-hidden", heroSpacingClass)}>
            <Container size={theme.contentWidth} className="relative">
              <Stack gap={8}>
                <HeroCopy
                  template={template}
                  align="start"
                  size="text-display"
                  headingWeightClass={headingWeightClass}
                  headingTrackingClass={headingTrackingClass}
                />
                {template.heroImage ? (
                  <AspectRatio
                    ratio={21 / 9}
                    className={cn("relative", cardRadiusClass)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element -- plain
                        <img> is deliberate, matching Avatar/Brand Link:
                        next/image's optimization technique is not an
                        approved decision (PERFORMANCE_GUIDE.md §3.2).
                        Never lazy-loaded: this is the largest above-the-
                        fold element on the page. */}
                    <img
                      src={template.heroImage}
                      alt=""
                      className="size-full object-cover"
                    />
                  </AspectRatio>
                ) : null}
              </Stack>
            </Container>
          </Section>
        ) : template.heroLayout === "overlay" && template.heroImage ? (
          <Section className={cn("relative overflow-hidden", heroSpacingClass)}>
            {/* eslint-disable-next-line @next/next/no-img-element -- plain
                <img> is deliberate, matching Avatar/Brand Link: next/image's
                optimization technique is not an approved decision
                (PERFORMANCE_GUIDE.md §3.2). Never lazy-loaded: this is the
                largest above-the-fold element on the page. */}
            <img
              src={template.heroImage}
              alt=""
              className="absolute inset-0 size-full object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-black/55" />
            <div
              aria-hidden="true"
              className={cn(
                "absolute inset-0 opacity-25",
                PREVIEW_GRADIENT_CLASS,
              )}
            />
            <Container size={theme.contentWidth} className="relative">
              <HeroCopy
                template={template}
                align="center"
                size="text-h1"
                headingWeightClass={headingWeightClass}
                headingTrackingClass={headingTrackingClass}
              />
            </Container>
          </Section>
        ) : (
          <Section className={cn("relative overflow-hidden", heroSpacingClass)}>
            <div
              aria-hidden="true"
              className={cn(
                "absolute inset-0 opacity-20",
                PREVIEW_GRADIENT_CLASS,
              )}
            />
            <Icon
              icon={template.heroIcon}
              className="absolute -top-6 right-4 size-32 text-[var(--preview-accent)] opacity-10 sm:size-40"
            />
            <Container size={theme.contentWidth} className="relative">
              <HeroCopy
                template={template}
                align="center"
                size="text-h1"
                headingWeightClass={headingWeightClass}
                headingTrackingClass={headingTrackingClass}
              />
            </Container>
          </Section>
        )}
        {template.sections.map((section, index) => (
          <PreviewSectionRenderer
            key={section.heading}
            section={section}
            alternate={index % 2 === 1}
            theme={theme}
          />
        ))}
      </PreviewChrome>

      <Section>
        <Container>
          <CtaBanner
            message={template.ctaMessage}
            actionLabel={template.ctaLabel}
            href="/contact"
          />
        </Container>
      </Section>
    </Stack>
  );
}

/** The hero heading/supporting-text/tags stack, shared by every layout branch above — only alignment and heading size vary per layout. */
function HeroCopy({
  template,
  align,
  size,
  headingWeightClass,
  headingTrackingClass,
}: {
  template: PreviewTemplate;
  align: "center" | "start";
  size: "text-h1" | "text-display";
  headingWeightClass: string;
  headingTrackingClass: string;
}) {
  return (
    <Stack
      gap={5}
      className={cn(
        align === "start"
          ? "items-start text-left"
          : "items-center text-center",
      )}
    >
      <h2
        className={cn(
          size,
          "text-foreground break-words",
          headingWeightClass,
          headingTrackingClass,
        )}
      >
        {template.heroHeadline}
      </h2>
      <p className="max-w-reading text-body text-muted-foreground">
        {template.heroSupportingText}
      </p>
      {template.heroTags ? (
        <HeroTagsRow tags={template.heroTags} align={align} />
      ) : null}
    </Stack>
  );
}

/** The hero's contained photo for `split` — an `AspectRatio` panel, not a background, radius-matched to the template's own `theme.cardRadius`. */
function HeroPhoto({
  image,
  radiusClass,
}: {
  image: string;
  radiusClass: string;
}) {
  return (
    <AspectRatio ratio={4 / 3} className={cn("relative", radiusClass)}>
      {/* eslint-disable-next-line @next/next/no-img-element -- plain <img>
          is deliberate, matching Avatar/Brand Link: next/image's
          optimization technique is not an approved decision
          (PERFORMANCE_GUIDE.md §3.2). Never lazy-loaded: this is the
          largest above-the-fold element on the page. */}
      <img src={image} alt="" className="size-full object-cover" />
    </AspectRatio>
  );
}
