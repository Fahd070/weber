import type { ReactNode } from "react";
import { MapPin, Quote, Users } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Container, type ContainerSize } from "@/components/layout/container";
import { Stack } from "@/components/layout/stack";
import { Grid } from "@/components/layout/grid";
import { AspectRatio } from "@/components/layout/aspect-ratio";
import { Card } from "@/components/surfaces/card";
import { Tag } from "@/components/data-display/tag";
import { Icon } from "@/components/utilities/icon";
import { Accordion } from "@/components/data-display/accordion";
import { FeatureList } from "@/components/marketing/feature-list";
import { Timeline } from "@/components/data-display/timeline";
import { cn } from "@/lib/utils";
import type { PreviewSection } from "@/content/interactive-showcase/templates/types";
import {
  CARD_RADIUS_CLASS,
  PREVIEW_GRADIENT_CLASS,
  type PreviewTheme,
} from "@/content/interactive-showcase/templates/themes";

const EXAMPLE_TAG_LABEL = "Example";

/**
 * Alternating tint for section rhythm (Premium Realism Phase, Project
 * Owner approved; softened to a gradient in Premium Micro-interactions
 * Phase 2, Project Owner approved) — the same low-opacity accent wash the
 * hero backdrop uses, applied to every other section so a template reads
 * as a sequence of distinct sections rather than one flat page. A
 * gradient (fade in, fade out) rather than the original flat block, so a
 * tinted section's own top/bottom edges blend into its neighbors instead
 * of cutting off abruptly — the same "soft gradient separator" technique
 * this phase applies to Weber's own real site
 * (`src/lib/section-rhythm.ts`'s `alternateSectionClass`), kept as a
 * parallel, not shared, implementation since this one must key off
 * `var(--preview-accent)` (the per-industry identity color already
 * threaded through this file) rather than Weber's own `--color-surface`.
 */
function sectionBackgroundClass(alternate: boolean) {
  return alternate
    ? "bg-gradient-to-b from-transparent via-[var(--preview-accent)]/[0.07] to-transparent"
    : undefined;
}

/**
 * Per-template vertical rhythm (Genuine Differentiation Pass, Project
 * Owner approved) — an override of Section's own default `py-16`, using
 * only already-approved spacing-scale steps (WD-030/WD-134). `standard`
 * is `undefined` deliberately: it means "use Section's own unmodified
 * default," not a value that happens to match it, so Section's own
 * padding stays the single source of truth for that case.
 */
const RHYTHM_CLASS: Record<PreviewTheme["rhythm"], string | undefined> = {
  compact: "py-12 md:py-16",
  standard: undefined,
  spacious: "py-16 md:py-24",
};

/** Maps `theme.headingWeight` to Tailwind's own approved weight utilities (WD-028) — applied to every section heading below, the same mechanism Template Renderer uses for the hero heading. */
const HEADING_WEIGHT_CLASS: Record<PreviewTheme["headingWeight"], string> = {
  semibold: "font-semibold",
  bold: "font-bold",
};

/**
 * Shared hover treatment for every preview tile in this file — Card
 * Grid/Testimonial Grid/Team Grid/Pricing Preview's `Card` instances
 * (Premium Micro-interactions Phase 1, Project Owner approved). Pure CSS,
 * not Motion (`DECISIONS.md` WD-061 — "lightweight CSS transitions...
 * preferred over Motion... for simple component motion"; this file is a
 * Server Component and must stay one, so Motion's `useReducedMotion` hook
 * isn't available — `motion-reduce:` is the CSS-native equivalent,
 * already established by Accordion and Navigation Menu for exactly this
 * reason). Border color reuses `var(--preview-accent)`, this file's own
 * per-industry identity variable, rather than Weber's own `border-primary`
 * — these tiles live inside the simulated mini-site, not Weber's real
 * chrome. `duration-standard`/`ease-in-out` match the same tokens
 * (WD-033) the sitewide Card hover (Service Card, Contact Method Card,
 * `src/lib/hover-tokens.ts`) now uses, for one consistent hover feel
 * across the whole product. No `box-shadow` (WD-132 reserves real shadows
 * for Overlay elevation only); the lift plus border-brighten together
 * stand in for "shadow improvement," mirroring `CARD_HOVER_BORDER_CLASS`'s
 * own reasoning in `hover-tokens.ts`. `Card`'s own `elevation="resting"`
 * already supplies a real border, so only its color needs a hover
 * transition here. Lists `translate` (not `transform`) in its
 * `transition-[...]` property arbitrary value — Tailwind v4's
 * `translate-*` utilities animate the native CSS `translate` property,
 * confirmed via this phase's own browser testing (listing `transform`
 * silently transitions nothing, so the lift would snap instead of ease).
 */
const PREVIEW_CARD_HOVER_CLASS =
  "transition-[translate,border-color] duration-standard ease-in-out hover:-translate-y-0.5 hover:border-[var(--preview-accent)]/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0";

/**
 * Same hover treatment as `PREVIEW_CARD_HOVER_CLASS`, for Gallery Grid's
 * borderless photo/gradient tiles — adds a transparent baseline border so
 * the hover color change doesn't shift layout (the standard
 * border-appears-on-hover technique), then reuses the rest via `cn`
 * rather than repeating the transition declaration a second time.
 */
const PREVIEW_TILE_HOVER_CLASS = cn(
  "border border-transparent",
  PREVIEW_CARD_HOVER_CLASS,
);

/** A generic "person" placeholder — an accent-tinted circle with a Users icon, never a real photo (Premium Realism Phase decision: no photography anywhere in the Interactive Showcase). Reused by both Testimonial Grid and Team Grid rather than duplicated inline twice. */
function PersonPlaceholder({ size = "size-10" }: { size?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex items-center justify-center rounded-full bg-[var(--preview-accent)]/15 text-[var(--preview-accent)]",
        size,
      )}
    >
      <Icon icon={Users} className="size-1/2" />
    </span>
  );
}

/**
 * A real, Project-Owner-supplied photo (`public/interactive-showcase/`,
 * UI Refinement Pass, Project Owner approved) inside `AspectRatio`
 * (`DECISIONS.md` WD-138 — a previously-documented, unused Layout
 * primitive, wired up here rather than hand-rolling equivalent CSS) with
 * a bottom scrim and caption overlaid — the same visual language as the
 * hero's own photo treatment (`TemplateRenderer`), reused rather than
 * inventing a second overlay style. Always lazy-loaded: unlike the hero
 * photo, every use of this component is below the fold. `ratio` differs
 * by caller (`galleryGrid`'s square-ish tiles vs. `imageBanner`'s wide
 * banner) since Aspect Ratio itself defines no ratio of its own
 * (WD-138) — each consumer decides. `caption` is a full `ReactNode`
 * rather than a fixed string so each caller can supply the correct
 * semantic element — `imageBanner` needs its `heading` to render as a
 * real `<h2>` for heading hierarchy, while `galleryGrid`'s tile labels
 * are plain captions, the same distinction every other section type
 * here already makes between its own heading and its item labels.
 * `hoverable` (Premium Micro-interactions Phase 1, Project Owner
 * approved) opts a given usage into `PREVIEW_TILE_HOVER_CLASS` — only
 * `galleryGrid`'s tiles set it; `imageBanner`'s full-bleed banner stays
 * without hover, since it isn't a discrete, browsable "gallery item" the
 * way a grid tile is.
 */
function CaptionedPhoto({
  image,
  caption,
  ratio,
  radiusClass,
  showExampleTag = false,
  hoverable = false,
}: {
  image: string;
  caption: ReactNode;
  ratio: number;
  /** `theme.cardRadius`'s own resolved class, matching every Card-based section's own corner (Final UX Polish, Project Owner approved) — the same "pass the theme's own radius down as a prop" pattern Template Renderer's own `HeroPhoto` already uses. */
  radiusClass: string;
  showExampleTag?: boolean;
  hoverable?: boolean;
}) {
  return (
    <AspectRatio
      ratio={ratio}
      className={cn(
        "relative",
        radiusClass,
        hoverable && PREVIEW_TILE_HOVER_CLASS,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- plain <img>
          is deliberate, matching Avatar/Brand Link: next/image's
          optimization technique is not an approved decision
          (PERFORMANCE_GUIDE.md §3.2). Always below the fold here, so
          explicitly lazy-loaded. */}
      <img
        src={image}
        alt=""
        loading="lazy"
        className="size-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
      />
      <Stack
        gap={2}
        className="absolute inset-x-0 bottom-0 items-center p-4 text-center"
      >
        {caption}
        {showExampleTag ? <Tag>{EXAMPLE_TAG_LABEL}</Tag> : null}
      </Stack>
    </AspectRatio>
  );
}

/**
 * Renders one `PreviewSection` by its `type` — the data-driven dispatch
 * that makes the V2 template system scale without new components per
 * template (Interactive Showcase V2, Design Evolution, Project Owner
 * approved; extended with six additional section types in the Premium
 * Realism Phase, Project Owner approved). Every branch reuses an
 * existing Design System primitive (Card, Grid, Tag, Icon, Feature List,
 * Accordion) rather than inventing new visual patterns. `cardGrid`
 * mirrors the original Visual/Grid pattern's own "Example" tag treatment
 * exactly (DECISIONS.md WD-156, WD-161), for the same reason the newer
 * placeholder-shaped sections below do too: generic placeholder items —
 * or generic placeholder people — must never be mistaken for real
 * products, listings, dishes, or individuals. No section type here ever
 * renders a fake interactive-looking button (WD-050 — no dead tab-stop
 * that looks actionable but isn't); premium feel comes from color,
 * imagery-style icon treatment, and layout rhythm instead.
 *
 * `theme.contentWidth` (Genuine Differentiation Pass, Project Owner
 * approved) is applied only to the grid/card-based section types below
 * — `categoryList`, `conceptual`, `faq`, and `mapPreview` keep their
 * fixed `size="reading"` regardless of theme, since that choice is
 * driven by the content actually being long-form text (readability),
 * not by the template's visual personality, and overriding it wider
 * would hurt readability for the sake of variety. `theme.rhythm` applies
 * uniformly to every section's own vertical padding via `RHYTHM_CLASS`.
 */
export function PreviewSectionRenderer({
  section,
  alternate = false,
  theme,
}: {
  section: PreviewSection;
  /** Whether this section gets the accent-tinted background wash — callers alternate this per section to create visual rhythm down the page. */
  alternate?: boolean;
  theme: PreviewTheme;
}) {
  const sectionClassName = cn(
    sectionBackgroundClass(alternate),
    RHYTHM_CLASS[theme.rhythm],
  );
  const gridWidth: ContainerSize = theme.contentWidth;
  const headingWeightClass = HEADING_WEIGHT_CLASS[theme.headingWeight];
  const cardRadiusClass = CARD_RADIUS_CLASS[theme.cardRadius];

  switch (section.type) {
    case "cardGrid":
      return (
        <Section className={sectionClassName}>
          <Container size={gridWidth}>
            <Stack gap={8} className="items-center text-center">
              <h2
                className={cn(
                  "text-h2 text-foreground break-words",
                  headingWeightClass,
                )}
              >
                {section.heading}
              </h2>
              <Grid cols={{ base: 1, md: 3 }} gap={5} className="w-full">
                {section.cards.map((card) => (
                  <Card
                    key={card.label}
                    elevation="resting"
                    className={cn(
                      "p-6",
                      cardRadiusClass,
                      PREVIEW_CARD_HOVER_CLASS,
                    )}
                  >
                    <Stack gap={3} className="items-center text-center">
                      <Icon
                        icon={card.icon}
                        className="size-8 text-[var(--preview-accent)]"
                      />
                      <span className="text-body font-medium text-foreground">
                        {card.label}
                      </span>
                      <Tag>{EXAMPLE_TAG_LABEL}</Tag>
                    </Stack>
                  </Card>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>
      );

    case "valueProps":
      return (
        <Section className={sectionClassName}>
          <Container size={gridWidth}>
            <Stack gap={8} className="items-center text-center">
              <h2
                className={cn(
                  "text-h2 text-foreground break-words",
                  headingWeightClass,
                )}
              >
                {section.heading}
              </h2>
              <Stack gap={3} className="items-center text-center">
                {section.items.map((item) => (
                  <p key={item} className="text-body text-muted-foreground">
                    {item}
                  </p>
                ))}
              </Stack>
            </Stack>
          </Container>
        </Section>
      );

    case "categoryList":
      return (
        <Section className={sectionClassName}>
          <Container size="reading">
            <Stack gap={5}>
              <h2 className={cn("text-h2 text-foreground", headingWeightClass)}>
                {section.heading}
              </h2>
              <ul className="list-disc space-y-1 pl-5 text-body text-muted-foreground">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Stack>
          </Container>
        </Section>
      );

    case "conceptual":
      return (
        <Section className={sectionClassName}>
          <Container size="reading">
            <Stack gap={3} className="items-center text-center">
              <h2 className={cn("text-h2 text-foreground", headingWeightClass)}>
                {section.heading}
              </h2>
              <p className="max-w-reading text-body text-muted-foreground">
                {section.body}
              </p>
            </Stack>
          </Container>
        </Section>
      );

    case "faq":
      return (
        <Section className={sectionClassName}>
          <Container size="reading">
            <Stack gap={5}>
              <h2
                className={cn(
                  "text-h2 text-foreground text-center",
                  headingWeightClass,
                )}
              >
                {section.heading}
              </h2>
              <Accordion
                items={section.items.map((item, index) => ({
                  id: `${section.heading}-faq-${index}`,
                  trigger: item.question,
                  content: item.answer,
                }))}
              />
            </Stack>
          </Container>
        </Section>
      );

    case "featureHighlights":
      return (
        <Section className={sectionClassName}>
          <Container size={gridWidth}>
            <Stack gap={8} className="items-center text-center">
              <h2
                className={cn(
                  "text-h2 text-foreground break-words",
                  headingWeightClass,
                )}
              >
                {section.heading}
              </h2>
              <FeatureList
                cols={{ base: 1, md: 3 }}
                gap={6}
                className="text-left"
                items={section.items}
              />
            </Stack>
          </Container>
        </Section>
      );

    case "testimonialGrid":
      return (
        <Section className={sectionClassName}>
          <Container size={gridWidth}>
            <Stack gap={8} className="items-center text-center">
              <h2
                className={cn(
                  "text-h2 text-foreground break-words",
                  headingWeightClass,
                )}
              >
                {section.heading}
              </h2>
              <Grid cols={{ base: 1, md: 3 }} gap={5} className="w-full">
                {section.quotes.map((quote) => (
                  <Card
                    key={quote}
                    elevation="resting"
                    className={cn(
                      "p-6",
                      cardRadiusClass,
                      PREVIEW_CARD_HOVER_CLASS,
                    )}
                  >
                    <Stack gap={4} className="items-center text-center">
                      <Icon
                        icon={Quote}
                        className="size-6 text-[var(--preview-accent)]"
                      />
                      <p className="text-body text-foreground">
                        &ldquo;{quote}&rdquo;
                      </p>
                      <Stack gap={2} className="items-center">
                        <PersonPlaceholder />
                        <span className="text-caption text-muted-foreground">
                          Example Client
                        </span>
                      </Stack>
                    </Stack>
                  </Card>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>
      );

    case "teamGrid":
      return (
        <Section className={sectionClassName}>
          <Container size={gridWidth}>
            <Stack gap={8} className="items-center text-center">
              <h2
                className={cn(
                  "text-h2 text-foreground break-words",
                  headingWeightClass,
                )}
              >
                {section.heading}
              </h2>
              <Grid cols={{ base: 1, md: 3 }} gap={5} className="w-full">
                {section.roles.map((role) => (
                  <Card
                    key={role}
                    elevation="resting"
                    className={cn(
                      "p-6",
                      cardRadiusClass,
                      PREVIEW_CARD_HOVER_CLASS,
                    )}
                  >
                    <Stack gap={3} className="items-center text-center">
                      <PersonPlaceholder size="size-16" />
                      <span className="text-body font-medium text-foreground">
                        Example Team Member
                      </span>
                      <Tag>{role}</Tag>
                    </Stack>
                  </Card>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>
      );

    case "galleryGrid":
      return (
        <Section className={sectionClassName}>
          <Container size={gridWidth}>
            <Stack gap={8} className="items-center text-center">
              <h2
                className={cn(
                  "text-h2 text-foreground break-words",
                  headingWeightClass,
                )}
              >
                {section.heading}
              </h2>
              <Grid cols={{ base: 1, md: 3 }} gap={5} className="w-full">
                {section.tiles.map((tile) =>
                  tile.image ? (
                    <CaptionedPhoto
                      key={tile.label}
                      image={tile.image}
                      ratio={4 / 3}
                      radiusClass={cardRadiusClass}
                      showExampleTag
                      hoverable
                      caption={
                        <span className="text-caption font-medium text-white">
                          {tile.label}
                        </span>
                      }
                    />
                  ) : (
                    <Stack
                      key={tile.label}
                      gap={2}
                      className={cn(
                        "items-center justify-center p-10 text-center",
                        PREVIEW_GRADIENT_CLASS,
                        cardRadiusClass,
                        PREVIEW_TILE_HOVER_CLASS,
                      )}
                    >
                      <Icon icon={tile.icon} className="size-8 text-white" />
                      <span className="text-caption font-medium text-white">
                        {tile.label}
                      </span>
                      <Tag>{EXAMPLE_TAG_LABEL}</Tag>
                    </Stack>
                  ),
                )}
              </Grid>
            </Stack>
          </Container>
        </Section>
      );

    case "pricingPreview":
      return (
        <Section className={sectionClassName}>
          <Container size={gridWidth}>
            <Stack gap={8} className="items-center text-center">
              <h2
                className={cn(
                  "text-h2 text-foreground break-words",
                  headingWeightClass,
                )}
              >
                {section.heading}
              </h2>
              <Grid cols={{ base: 1, md: 3 }} gap={5} className="w-full">
                {section.tiers.map((tier) => (
                  <Card
                    key={tier.name}
                    elevation="resting"
                    className={cn(
                      "border-t-2 border-t-[var(--preview-accent)] p-6",
                      cardRadiusClass,
                      PREVIEW_CARD_HOVER_CLASS,
                    )}
                  >
                    <Stack gap={2} className="items-center text-center">
                      <span className="text-title font-semibold text-foreground">
                        {tier.name}
                      </span>
                      <p className="text-body text-muted-foreground">
                        {tier.description}
                      </p>
                    </Stack>
                  </Card>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>
      );

    case "mapPreview":
      return (
        <Section className={sectionClassName}>
          <Container size="reading">
            <Stack gap={5} className="items-center text-center">
              <h2 className={cn("text-h2 text-foreground", headingWeightClass)}>
                {section.heading}
              </h2>
              <Stack
                gap={2}
                className={cn(
                  "w-full items-center justify-center py-16 text-center",
                  PREVIEW_GRADIENT_CLASS,
                  cardRadiusClass,
                )}
              >
                <Icon icon={MapPin} className="size-10 text-white" />
              </Stack>
              <p className="max-w-reading text-body text-muted-foreground">
                {section.caption}
              </p>
            </Stack>
          </Container>
        </Section>
      );

    case "imageBanner": {
      const position = section.imagePosition ?? "full";

      if (position === "full") {
        return (
          <Section className={sectionClassName}>
            <Container size={gridWidth}>
              <CaptionedPhoto
                image={section.image}
                ratio={21 / 9}
                radiusClass={cardRadiusClass}
                caption={
                  <h2
                    className={cn(
                      "text-h2 text-white break-words",
                      headingWeightClass,
                    )}
                  >
                    {section.heading}
                  </h2>
                }
              />
            </Container>
          </Section>
        );
      }

      const photo = (
        <AspectRatio ratio={4 / 3} className={cardRadiusClass}>
          {/* eslint-disable-next-line @next/next/no-img-element -- plain
              <img> is deliberate, matching Avatar/Brand Link: next/image's
              optimization technique is not an approved decision
              (PERFORMANCE_GUIDE.md §3.2). Always below the fold, so
              explicitly lazy-loaded. */}
          <img
            src={section.image}
            alt=""
            loading="lazy"
            className="size-full object-cover"
          />
        </AspectRatio>
      );
      const heading = (
        <h2
          className={cn(
            "text-h2 text-foreground break-words",
            headingWeightClass,
          )}
        >
          {section.heading}
        </h2>
      );

      return (
        <Section className={sectionClassName}>
          <Container size={gridWidth}>
            <Grid cols={{ base: 1, md: 2 }} gap={8} className="items-center">
              {position === "left" ? (
                <>
                  {photo}
                  {heading}
                </>
              ) : (
                <>
                  {heading}
                  {photo}
                </>
              )}
            </Grid>
          </Container>
        </Section>
      );
    }

    case "featuredGrid":
      return (
        <Section className={sectionClassName}>
          <Container size={gridWidth}>
            <Stack gap={8} className="items-center text-center">
              <h2
                className={cn(
                  "text-h2 text-foreground break-words",
                  headingWeightClass,
                )}
              >
                {section.heading}
              </h2>
              <Grid cols={{ base: 1, md: 2 }} gap={6} className="w-full">
                {section.items.map((item) => (
                  <Card
                    key={item.label}
                    elevation="resting"
                    className={cn(
                      "relative p-6 pt-8",
                      cardRadiusClass,
                      PREVIEW_CARD_HOVER_CLASS,
                    )}
                  >
                    <Tag className="absolute -top-3 left-6 border-transparent bg-[var(--preview-accent)] text-white">
                      {item.badge}
                    </Tag>
                    <Stack gap={3} className="items-start text-left">
                      <Icon
                        icon={item.icon}
                        className="size-8 text-[var(--preview-accent)]"
                      />
                      <span className="text-title font-semibold text-foreground">
                        {item.label}
                      </span>
                      <p className="text-body text-muted-foreground">
                        {item.description}
                      </p>
                    </Stack>
                  </Card>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>
      );

    case "statHighlights":
      return (
        <Section className={sectionClassName}>
          <Container size={gridWidth}>
            <Stack gap={8} className="items-center text-center">
              <h2
                className={cn(
                  "text-h2 text-foreground break-words",
                  headingWeightClass,
                )}
              >
                {section.heading}
              </h2>
              <Grid cols={{ base: 1, md: 2, lg: 4 }} gap={5} className="w-full">
                {section.items.map((item) => (
                  <Card
                    key={item.metric}
                    elevation="resting"
                    className={cn(
                      "p-6",
                      cardRadiusClass,
                      PREVIEW_CARD_HOVER_CLASS,
                    )}
                  >
                    <Stack gap={1} className="items-center text-center">
                      <span className="text-h3 font-semibold text-[var(--preview-accent)]">
                        {item.metric}
                      </span>
                      <span className="text-caption text-muted-foreground">
                        {item.label}
                      </span>
                    </Stack>
                  </Card>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>
      );

    case "processSteps":
      return (
        <Section className={sectionClassName}>
          <Container size={gridWidth}>
            <Stack gap={8}>
              <h2
                className={cn(
                  "text-h2 text-foreground break-words text-center",
                  headingWeightClass,
                )}
              >
                {section.heading}
              </h2>
              <Timeline
                cols={{ base: 1, md: 2, lg: Math.min(section.steps.length, 4) }}
                gap={6}
              >
                {section.steps.map((step, index) => (
                  <li key={step.title}>
                    <Stack gap={3}>
                      <span className="text-caption font-semibold text-[var(--preview-accent)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-title font-semibold text-foreground">
                        {step.title}
                      </span>
                      <p className="text-body text-muted-foreground">
                        {step.description}
                      </p>
                    </Stack>
                  </li>
                ))}
              </Timeline>
            </Stack>
          </Container>
        </Section>
      );
  }
}
