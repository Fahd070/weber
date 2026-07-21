import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Stack } from "@/components/layout/stack";
import { MotionCtaLink } from "@/components/inputs/motion-cta-link";
import {
  ScrollReveal,
  SEQUENCE_REVEAL_STEP,
} from "@/components/utilities/scroll-reveal";
import type { OfferingForwardResolvedProps } from "@/content/interactive-showcase/types";

/**
 * Offering-Forward Preview Pattern (DECISIONS.md WD-154, WD-157, WD-161,
 * WD-163, WD-166). Hero-led, text-only — no visual assets, per WD-163.
 * Renders one headline and one supporting line describing the
 * presentation only, never a specific invented menu item, feature, or
 * technical claim. Receives only fully-resolved props; never aware of
 * which Business Type produced them. Reveals with the same reveal/
 * stagger language used sitewide (Motion Phase B, Design Evolution,
 * Project Owner approved) — mirrors Hero's own heading/body/action
 * cadence, since this pattern shares that same shape.
 */
export function OfferingForwardPattern({
  headline,
  supportingLine,
  cta,
}: OfferingForwardResolvedProps) {
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
              {supportingLine}
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
