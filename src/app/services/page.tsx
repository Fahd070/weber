import type { Metadata } from "next";
import { Page } from "@/components/layout/page";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Stack } from "@/components/layout/stack";
import { Grid } from "@/components/layout/grid";
import { ServiceCard } from "@/components/data-display/service-card";
import { CtaBanner } from "@/components/marketing/cta-banner";
import {
  ScrollReveal,
  SCROLL_REVEAL_STAGGER_STEP,
} from "@/components/utilities/scroll-reveal";

const SERVICES_DESCRIPTION =
  "Website Development, Mobile Applications, Desktop Applications, and Templates — Weber's services for a professional digital presence.";

export const metadata: Metadata = {
  title: "Services",
  description: SERVICES_DESCRIPTION,
  openGraph: {
    title: "Services | Weber",
    description: SERVICES_DESCRIPTION,
    type: "website",
    siteName: "Weber",
  },
};

export default function ServicesPage() {
  return (
    <Page>
      <Section>
        <Container>
          <Stack gap={8}>
            <ScrollReveal>
              <h1 className="text-h1 font-semibold text-foreground text-center">
                Services
              </h1>
            </ScrollReveal>
            <h2 className="sr-only">Available services</h2>
            <Grid cols={{ base: 1, md: 2, lg: 4 }} gap={5}>
              <ScrollReveal delay={1 * SCROLL_REVEAL_STAGGER_STEP}>
                <ServiceCard
                  name="Website Development"
                  description="A professional website that gives your business a strong digital presence."
                  href="/services/websites"
                  actionLabel="View Details"
                  accessibleSuffix={<> about Website Development</>}
                />
              </ScrollReveal>
              <ScrollReveal delay={2 * SCROLL_REVEAL_STAGGER_STEP}>
                <ServiceCard
                  name="Mobile Applications"
                  description="A mobile-native experience for businesses whose customer relationship depends on being on the go."
                  href="/services/mobile-applications"
                  actionLabel="View Details"
                  accessibleSuffix={<> about Mobile Applications</>}
                />
              </ScrollReveal>
              <ScrollReveal delay={3 * SCROLL_REVEAL_STAGGER_STEP}>
                <ServiceCard
                  name="Desktop Applications"
                  description="A practical option that gives your business a smoother way to get things done."
                  href="/services/desktop-applications"
                  actionLabel="View Details"
                  accessibleSuffix={<> about Desktop Applications</>}
                />
              </ScrollReveal>
              <ScrollReveal delay={4 * SCROLL_REVEAL_STAGGER_STEP}>
                <ServiceCard
                  name="Templates"
                  description="A faster, self-serve option for businesses wanting a quicker path to a professional site."
                  href="/services/templates"
                  actionLabel="View Details"
                  accessibleSuffix={<> about Templates</>}
                />
              </ScrollReveal>
            </Grid>
            <CtaBanner
              message="Ready to discuss your project? Let's talk about your goals and find the right solution together."
              actionLabel="Let's discuss your project"
              href="/contact"
            />
          </Stack>
        </Container>
      </Section>
    </Page>
  );
}
