import { Hero } from "@/components/marketing/hero";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { FeatureList } from "@/components/marketing/feature-list";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Stack } from "@/components/layout/stack";
import { Cluster } from "@/components/layout/cluster";
import { Accordion } from "@/components/data-display/accordion";
import { ServiceDetailLayout } from "@/components/data-display/service-detail-layout";
import { MotionCtaLink } from "@/components/inputs/motion-cta-link";
import { WhatsAppCta } from "@/components/navigation/whatsapp-cta";
import {
  ScrollReveal,
  SEQUENCE_REVEAL_STEP,
} from "@/components/utilities/scroll-reveal";
import { WhyWeberSection } from "@/components/marketing/why-weber-section";
import { ProcessSection } from "@/components/marketing/process-section";
import { alternateSectionClass } from "@/lib/section-rhythm";
import type { ServiceDetailContent } from "@/content/services/service-detail-content";

export interface ServiceDetailPageProps {
  content: ServiceDetailContent;
}

/**
 * The shared Service Detail page structure (Service Detail Pages Phase
 * 1, Project Owner approved) — one template composed onto each of the
 * four service routes, so the seven-section structure lives in exactly
 * one place rather than being rebuilt per page. Reuses Service Detail
 * Layout (DECISIONS.md WD-112 — approved and implemented ahead of its
 * route, now finally used) for the two reading-width, text-first
 * sections, and Accordion (already documented for this exact FAQ use
 * case) rather than building new interaction patterns. CTA Banner is
 * composed here, at the page level, never inside Service Detail Layout,
 * matching WD-112's own explicit architecture note. Motion is the same
 * ScrollReveal/MotionCtaLink language already established sitewide
 * (Motion Phase A/B) — extended here, not modified.
 */
export function ServiceDetailPage({ content }: ServiceDetailPageProps) {
  return (
    <>
      <Hero
        heading={content.name}
        body={content.shortDescription}
        action={
          <Cluster gap={3} className="justify-center">
            <MotionCtaLink href="/contact" variant="primary">
              Tell us about your business
            </MotionCtaLink>
            <WhatsAppCta />
          </Cluster>
        }
      />

      <ServiceDetailLayout className={alternateSectionClass(false)}>
        <ScrollReveal>
          <h2 className="text-h2 font-semibold text-foreground">
            What we build
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={SEQUENCE_REVEAL_STEP}>
          <ul className="list-disc space-y-1 pl-5 text-body text-muted-foreground">
            {content.whatWeBuild.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </ScrollReveal>
      </ServiceDetailLayout>

      <Section className={alternateSectionClass(true)}>
        <Container>
          <Stack gap={8} className="items-center text-center">
            <ScrollReveal>
              <h2 className="text-h2 font-semibold text-foreground">
                What you receive
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={SEQUENCE_REVEAL_STEP}>
              <FeatureList
                cols={{ base: 1, md: 2, lg: 3 }}
                gap={6}
                className="text-left"
                items={content.whatYouReceive}
              />
            </ScrollReveal>
          </Stack>
        </Container>
      </Section>

      <WhyWeberSection className={alternateSectionClass(false)} />
      <ProcessSection className={alternateSectionClass(true)} />

      <ServiceDetailLayout className={alternateSectionClass(false)}>
        <ScrollReveal>
          <h2 className="text-h2 font-semibold text-foreground text-center">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={SEQUENCE_REVEAL_STEP}>
          <Accordion
            items={content.faq.map((item, index) => ({
              id: `faq-${index}`,
              trigger: item.question,
              content: item.answer,
            }))}
          />
        </ScrollReveal>
      </ServiceDetailLayout>

      <Section className={alternateSectionClass(true)}>
        <Container>
          <CtaBanner
            message="Ready to discuss your project? Let's talk about your goals and find the right solution together."
            actionLabel="Let's discuss your project"
            href="/contact"
          />
        </Container>
      </Section>
    </>
  );
}
