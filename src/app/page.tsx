import type { Metadata } from "next";
import {
  BadgeCheck,
  Gem,
  LifeBuoy,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import { Page } from "@/components/layout/page";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Stack } from "@/components/layout/stack";
import { Grid } from "@/components/layout/grid";
import { Hero } from "@/components/marketing/hero";
import { FeatureList } from "@/components/marketing/feature-list";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { ServiceCard } from "@/components/data-display/service-card";
import { Timeline } from "@/components/data-display/timeline";
import { MotionCtaLink } from "@/components/inputs/motion-cta-link";
import {
  ScrollReveal,
  SCROLL_REVEAL_STAGGER_STEP,
  SEQUENCE_REVEAL_STEP,
} from "@/components/utilities/scroll-reveal";
import { alternateSectionClass } from "@/lib/section-rhythm";

const HOME_DESCRIPTION =
  "Weber designs and builds premium, professional websites that help businesses present themselves with clarity, credibility, and confidence.";

export const metadata: Metadata = {
  description: HOME_DESCRIPTION,
  openGraph: {
    title: "Weber",
    description: HOME_DESCRIPTION,
    type: "website",
    siteName: "Weber",
  },
};

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understand the client's goals, requirements, and the right direction before starting the project.",
    points: ["Project goals", "Requirements", "Initial direction"],
  },
  {
    number: "02",
    title: "Design",
    description:
      "Create a thoughtful digital experience that matches the project's goals.",
    points: ["User experience", "Interface design", "Visual direction"],
  },
  {
    number: "03",
    title: "Development",
    description:
      "Build a responsive and optimized website using modern development practices.",
    points: [
      "Responsive development",
      "Performance optimization",
      "Quality checks",
    ],
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Deliver the final website and support the next steps after launch.",
    points: ["Final testing", "Website launch", "Post-launch support"],
  },
];

export default function Home() {
  return (
    <Page>
      <Hero
        heading="A professional digital presence your business can trust."
        headingClassName="text-[calc(var(--text-display)+3px)] leading-[var(--text-display-leading)]"
        body="Weber designs and builds premium websites that help businesses present themselves with clarity, credibility, and confidence — through thoughtful design and dependable, transparent delivery."
        bodyClassName="text-[calc(var(--text-body)+3px)] leading-[var(--text-body-leading)]"
        action={
          <MotionCtaLink href="/services" variant="primary">
            Explore Our Services
          </MotionCtaLink>
        }
      />
      <Section className={alternateSectionClass(false)}>
        <Container>
          <Stack gap={8}>
            <ScrollReveal>
              <h2 className="text-h2 font-semibold text-foreground text-center">
                Services
              </h2>
            </ScrollReveal>
            <Grid cols={{ base: 1, md: 2, lg: 4 }} gap={5}>
              <ScrollReveal delay={1 * SCROLL_REVEAL_STAGGER_STEP}>
                <ServiceCard
                  name="Website Development"
                  description="A professional website that gives your business a strong digital presence."
                  href="/services"
                />
              </ScrollReveal>
              <ScrollReveal delay={2 * SCROLL_REVEAL_STAGGER_STEP}>
                <ServiceCard
                  name="Mobile Applications"
                  description="A mobile-native experience for businesses whose customer relationship depends on being on the go."
                  href="/services"
                />
              </ScrollReveal>
              <ScrollReveal delay={3 * SCROLL_REVEAL_STAGGER_STEP}>
                <ServiceCard
                  name="Desktop Applications"
                  description="A practical option that gives your business a smoother way to get things done."
                  href="/services"
                />
              </ScrollReveal>
              <ScrollReveal delay={4 * SCROLL_REVEAL_STAGGER_STEP}>
                <ServiceCard
                  name="Templates"
                  description="A faster, self-serve option for businesses wanting a quicker path to a professional site."
                  href="/services"
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
      <Section className={alternateSectionClass(true)}>
        <Container>
          <Stack gap={5} className="items-center text-center">
            <ScrollReveal>
              <h2 className="text-h2 font-semibold text-foreground">
                Interactive Showcase
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={SEQUENCE_REVEAL_STEP}>
              <p className="max-w-reading text-body text-muted-foreground">
                See what your business could look like online. Share your
                business type and company name to preview a realistic concept
                for your future website — no commitment, no pressure.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={SEQUENCE_REVEAL_STEP * 2}>
              <MotionCtaLink href="/interactive-showcase" variant="primary">
                Preview Your Website
              </MotionCtaLink>
            </ScrollReveal>
          </Stack>
        </Container>
      </Section>
      <Section className={alternateSectionClass(false)}>
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
      <Section className={alternateSectionClass(true)}>
        <Container>
          <Stack gap={5} className="items-center text-center">
            <ScrollReveal>
              <h2 className="text-h2 font-semibold text-foreground">
                Digital experiences crafted with purpose
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={SEQUENCE_REVEAL_STEP}>
              <p className="max-w-reading text-body text-muted-foreground">
                We create modern web experiences that combine thoughtful design
                and reliable performance to help businesses grow digitally.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={SEQUENCE_REVEAL_STEP * 2}>
              <MotionCtaLink href="/contact" variant="primary">
                Build Your Website
              </MotionCtaLink>
            </ScrollReveal>
          </Stack>
        </Container>
      </Section>
      <Section className={alternateSectionClass(false)}>
        <Container>
          <Stack gap={8}>
            <ScrollReveal>
              <h2 className="text-h2 font-semibold text-foreground text-center">
                Process
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={SEQUENCE_REVEAL_STEP}>
              <Timeline cols={{ base: 1, lg: 4 }} gap={6}>
                {PROCESS_STEPS.map((step) => (
                  <li key={step.number}>
                    <Stack gap={3} className="items-center text-center">
                      <span className="text-caption font-semibold text-neutral-300">
                        {step.number}
                      </span>
                      <h3 className="text-h3 font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-body text-muted-foreground">
                        {step.description}
                      </p>
                      <ul className="list-disc space-y-1 pl-5 text-body text-muted-foreground">
                        {step.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </Stack>
                  </li>
                ))}
              </Timeline>
            </ScrollReveal>
          </Stack>
        </Container>
      </Section>
      <Section className={alternateSectionClass(true)}>
        <Container>
          <Stack gap={5} className="items-center text-center">
            <ScrollReveal>
              <h2 className="text-h2 font-semibold text-foreground">
                Have an Idea for Your Next Project?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={SEQUENCE_REVEAL_STEP}>
              <p className="max-w-reading text-body text-muted-foreground">
                Every successful website starts with a conversation. Share your
                idea with us, and let&apos;s explore the right direction
                together.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={SEQUENCE_REVEAL_STEP * 2}>
              <MotionCtaLink href="/contact" variant="primary">
                Discuss Your Idea
              </MotionCtaLink>
            </ScrollReveal>
          </Stack>
        </Container>
      </Section>
    </Page>
  );
}
