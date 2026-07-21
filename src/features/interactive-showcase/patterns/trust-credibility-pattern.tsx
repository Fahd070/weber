import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Stack } from "@/components/layout/stack";
import { MotionCtaLink } from "@/components/inputs/motion-cta-link";
import {
  ScrollReveal,
  SCROLL_REVEAL_STAGGER_STEP,
  SEQUENCE_REVEAL_STEP,
} from "@/components/utilities/scroll-reveal";
import type { TrustCredibilityResolvedProps } from "@/content/interactive-showcase/types";

/**
 * Trust/Credibility Preview Pattern (DECISIONS.md WD-154, WD-157, WD-161,
 * WD-163, WD-166). Text-only — no visual assets, per WD-163. Renders
 * exactly three generic, aspirational, layout-focused value propositions
 * as plain text, never icon-paired (Feature List's icon-per-item shape
 * would contradict WD-163's text-only requirement for this pattern, so
 * it is deliberately not reused here). Receives only fully-resolved
 * props; never aware of which Business Type produced them. Reveals with
 * the same reveal/stagger language used sitewide (Motion Phase B, Design
 * Evolution, Project Owner approved).
 */
export function TrustCredibilityPattern({
  headline,
  valueProps,
  cta,
}: TrustCredibilityResolvedProps) {
  return (
    <Section>
      <Container>
        <Stack gap={8} className="items-center text-center">
          <ScrollReveal>
            <h2 className="text-h2 font-semibold text-foreground break-words">
              {headline}
            </h2>
          </ScrollReveal>
          <Stack gap={3} className="items-center text-center">
            {valueProps.map((valueProp, index) => (
              <ScrollReveal
                key={valueProp}
                delay={
                  SEQUENCE_REVEAL_STEP + index * SCROLL_REVEAL_STAGGER_STEP
                }
              >
                <p className="text-body text-muted-foreground">{valueProp}</p>
              </ScrollReveal>
            ))}
          </Stack>
          <ScrollReveal
            delay={
              SEQUENCE_REVEAL_STEP +
              valueProps.length * SCROLL_REVEAL_STAGGER_STEP
            }
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
