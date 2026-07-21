import {
  BadgeCheck,
  Gem,
  LifeBuoy,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Stack } from "@/components/layout/stack";
import { FeatureList } from "@/components/marketing/feature-list";
import {
  ScrollReveal,
  SEQUENCE_REVEAL_STEP,
} from "@/components/utilities/scroll-reveal";

/**
 * Reuses Home's exact approved "Why Choose Weber" content (DECISIONS.md
 * WD-041, WD-168, WD-169) — a shared Marketing component (moved here
 * from `features/services` during the About Us phase, since it's used
 * by both Service Detail pages and the About page, not Services-
 * specific). A separate local copy rather than an import from
 * `src/app/page.tsx`, so Home's own file — and its Motion Phase A/B
 * behavior — stays completely untouched. Wording is copied verbatim;
 * nothing here is new content. `className` (Premium Micro-interactions
 * Phase 2, Project Owner approved) forwards straight to the underlying
 * `Section`, the same passthrough `ServiceDetailLayout` already offers —
 * lets each page decide this instance's own place in its own alternating
 * background rhythm (`alternateSectionClass`) without this component
 * needing to know anything about that rhythm itself.
 */
export function WhyWeberSection({ className }: { className?: string }) {
  return (
    <Section className={className}>
      <Container>
        <Stack gap={8} className="items-center text-center">
          <ScrollReveal>
            <h2 className="text-h2 font-semibold text-foreground">
              Why Choose Weber
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={SEQUENCE_REVEAL_STEP}>
            <FeatureList
              cols={{ base: 1, md: 2, lg: 3 }}
              gap={6}
              className="text-left"
              items={[
                {
                  icon: ShieldCheck,
                  label: "Clear expectations on every project",
                },
                { icon: Gem, label: "Consistent, professional quality" },
                { icon: Zap, label: "Built with performance in mind" },
                { icon: Wrench, label: "A lasting partnership" },
                {
                  icon: BadgeCheck,
                  label: "A transparent, professional process",
                },
                { icon: LifeBuoy, label: "Long-term support after launch" },
              ]}
            />
          </ScrollReveal>
        </Stack>
      </Container>
    </Section>
  );
}
