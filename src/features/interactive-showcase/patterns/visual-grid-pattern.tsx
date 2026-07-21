import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Stack } from "@/components/layout/stack";
import { Grid } from "@/components/layout/grid";
import { Card } from "@/components/surfaces/card";
import { Tag } from "@/components/data-display/tag";
import { Icon } from "@/components/utilities/icon";
import { MotionCtaLink } from "@/components/inputs/motion-cta-link";
import {
  ScrollReveal,
  SCROLL_REVEAL_STAGGER_STEP,
} from "@/components/utilities/scroll-reveal";
import type { VisualGridResolvedProps } from "@/content/interactive-showcase/types";

/**
 * Visual/Grid Preview Pattern (DECISIONS.md WD-154, WD-156, WD-160,
 * WD-161, WD-163, WD-166). Composed entirely from existing Design System
 * primitives — Section, Container, Stack, Grid, Card, Tag, Icon — no new
 * component. Receives only fully-resolved props; never aware of which
 * Business Type produced them (DECISIONS.md WD-164). Renders exactly
 * three shared, generic placeholder cards, each carrying an "Example" tag
 * so they cannot be mistaken for real products, listings, or inventory.
 * Reveals with the same reveal/stagger language used sitewide (Motion
 * Phase B, Design Evolution, Project Owner approved) — headline, then
 * supporting text, then cards in a small stagger, then the CTA.
 */
export function VisualGridPattern({
  headline,
  supportingText,
  cards,
  exampleTagLabel,
  cta,
}: VisualGridResolvedProps) {
  return (
    <Section>
      <Container>
        <Stack gap={8} className="items-center text-center">
          <ScrollReveal>
            <h2 className="text-h2 font-semibold text-foreground break-words">
              {headline}
            </h2>
          </ScrollReveal>
          {supportingText ? (
            <ScrollReveal delay={0.1}>
              <p className="max-w-reading text-body text-muted-foreground">
                {supportingText}
              </p>
            </ScrollReveal>
          ) : null}
          <Grid cols={{ base: 1, md: 3 }} gap={5} className="w-full">
            {cards.map((card, index) => (
              <ScrollReveal
                key={card.label}
                delay={0.15 + index * SCROLL_REVEAL_STAGGER_STEP}
              >
                <Card elevation="resting" className="p-6">
                  <Stack gap={3} className="items-center text-center">
                    <Icon
                      icon={card.icon}
                      className="size-8 text-muted-foreground"
                    />
                    <span className="text-body font-medium text-foreground">
                      {card.label}
                    </span>
                    <Tag>{exampleTagLabel}</Tag>
                  </Stack>
                </Card>
              </ScrollReveal>
            ))}
          </Grid>
          <ScrollReveal
            delay={0.15 + cards.length * SCROLL_REVEAL_STAGGER_STEP}
          >
            <MotionCtaLink href={cta.href} variant="primary">
              {cta.label}
            </MotionCtaLink>
          </ScrollReveal>
        </Stack>
      </Container>
    </Section>
  );
}
