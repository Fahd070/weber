import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Stack } from "@/components/layout/stack";
import { MotionCtaLink } from "@/components/inputs/motion-cta-link";
import {
  ScrollReveal,
  SEQUENCE_REVEAL_STEP,
} from "@/components/utilities/scroll-reveal";
import type { NeutralFallbackResolvedProps } from "@/content/interactive-showcase/types";

/**
 * Neutral/Fallback Preview Pattern (DECISIONS.md WD-154, WD-157, WD-160,
 * WD-161, WD-163, WD-166). Renders Pattern-owned fixed content only — the
 * "Other" Business Type supplies no content payload, so every prop here
 * originates from the Pattern registry, never from Business Type data.
 * Deliberately sector-agnostic; text-only, per WD-163. Reveals with the
 * same reveal/stagger language used sitewide (Motion Phase B, Design
 * Evolution, Project Owner approved).
 */
export function NeutralFallbackPattern({
  headline,
  supportingText,
  cta,
}: NeutralFallbackResolvedProps) {
  return (
    <Section>
      <Container>
        <Stack gap={5} className="items-center text-center">
          <ScrollReveal>
            <h2 className="text-h2 font-semibold text-foreground break-words">
              {headline}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={SEQUENCE_REVEAL_STEP}>
            <p className="max-w-reading text-body text-muted-foreground">
              {supportingText}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={SEQUENCE_REVEAL_STEP * 2}>
            <MotionCtaLink href={cta.href} variant="primary">
              {cta.label}
            </MotionCtaLink>
          </ScrollReveal>
        </Stack>
      </Container>
    </Section>
  );
}
