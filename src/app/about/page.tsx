import type { Metadata } from "next";
import { Compass, Gem, Minimize2, Wrench, Zap } from "lucide-react";
import { Page } from "@/components/layout/page";
import { Hero } from "@/components/marketing/hero";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { WhyWeberSection } from "@/components/marketing/why-weber-section";
import { ProcessSection } from "@/components/marketing/process-section";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Stack } from "@/components/layout/stack";
import { Cluster } from "@/components/layout/cluster";
import { Grid } from "@/components/layout/grid";
import { Card } from "@/components/surfaces/card";
import { Tag } from "@/components/data-display/tag";
import { Icon } from "@/components/utilities/icon";
import { MotionCtaLink } from "@/components/inputs/motion-cta-link";
import {
  ScrollReveal,
  SCROLL_REVEAL_STAGGER_STEP,
  SEQUENCE_REVEAL_STEP,
} from "@/components/utilities/scroll-reveal";
import { alternateSectionClass } from "@/lib/section-rhythm";

const ABOUT_DESCRIPTION =
  "Weber creates modern digital experiences focused on quality, simplicity, usability, and long-term maintainability.";

export const metadata: Metadata = {
  title: "About Us",
  description: ABOUT_DESCRIPTION,
  openGraph: {
    title: "About Us | Weber",
    description: ABOUT_DESCRIPTION,
    type: "website",
    siteName: "Weber",
  },
};

const BELIEFS = [
  {
    icon: Minimize2,
    title: "Simplicity over complexity",
    description:
      "The simplest solution that fully solves the problem is usually the right one.",
  },
  {
    icon: Zap,
    title: "Performance matters",
    description:
      "A fast experience feels dependable. A slow one feels unfinished.",
  },
  {
    icon: Compass,
    title: "Design should support usability",
    description:
      "Design exists to make things clearer, not just more attractive.",
  },
  {
    icon: Gem,
    title: "Quality before quantity",
    description:
      "A few things done well outperform a longer list done halfway.",
  },
  {
    icon: Wrench,
    title: "Long-term maintainability",
    description:
      "Software should still make sense to work with years after it ships.",
  },
];

const HOW_WE_WORK_STEPS = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understand the client's goals, requirements, and the right direction before starting the project.",
    points: ["Project goals", "Requirements", "Initial direction"],
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Turn requirements into a clear, realistic plan before any design work begins.",
    points: ["Scope", "Timeline", "Technical approach"],
  },
  {
    number: "03",
    title: "Design",
    description:
      "Create a thoughtful digital experience that matches the project's goals.",
    points: ["User experience", "Interface design", "Visual direction"],
  },
  {
    number: "04",
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
    number: "05",
    title: "Testing",
    description:
      "Verify that everything works as expected before anything goes live.",
    points: ["Functional testing", "Cross-device checks", "Final review"],
  },
  {
    number: "06",
    title: "Launch",
    description:
      "Deliver the final website and support the next steps after launch.",
    points: ["Website launch", "Deployment", "Post-launch support"],
  },
];

const TECHNOLOGIES = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Electron",
];

export default function AboutPage() {
  return (
    <Page>
      <Hero
        heading="About Weber"
        body={ABOUT_DESCRIPTION}
        action={
          <MotionCtaLink href="/contact" variant="primary">
            Let&apos;s discuss your project
          </MotionCtaLink>
        }
      />

      <Section className={alternateSectionClass(false)}>
        <Container size="reading">
          <Stack gap={5}>
            <ScrollReveal>
              <h2 className="text-h2 font-semibold text-foreground">
                Our Mission
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={SEQUENCE_REVEAL_STEP}>
              <Stack gap={4}>
                <p className="text-body text-muted-foreground">
                  Weber exists to help businesses turn a real problem into a
                  working, dependable solution. Software is the tool — the
                  outcome that matters is a business that can operate with more
                  clarity, more confidence, and less friction.
                </p>
                <p className="text-body text-muted-foreground">
                  That starts with understanding the problem before reaching for
                  any particular technology, and it means building something
                  that still makes sense to use and maintain long after launch,
                  not just something that looks good on day one.
                </p>
              </Stack>
            </ScrollReveal>
          </Stack>
        </Container>
      </Section>

      <Section className={alternateSectionClass(true)}>
        <Container>
          <Stack gap={8}>
            <ScrollReveal>
              <h2 className="text-h2 font-semibold text-foreground text-center">
                What We Believe
              </h2>
            </ScrollReveal>
            <Grid cols={{ base: 1, md: 2, lg: 3 }} gap={5}>
              {BELIEFS.map((belief, index) => (
                <ScrollReveal
                  key={belief.title}
                  delay={(index + 1) * SCROLL_REVEAL_STAGGER_STEP}
                >
                  <Card elevation="resting" className="h-full p-6">
                    <Stack gap={3}>
                      <Icon
                        icon={belief.icon}
                        className="size-6 text-muted-foreground"
                      />
                      <h3 className="text-h3 font-semibold text-foreground">
                        {belief.title}
                      </h3>
                      <p className="text-body text-muted-foreground">
                        {belief.description}
                      </p>
                    </Stack>
                  </Card>
                </ScrollReveal>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      <ProcessSection
        steps={HOW_WE_WORK_STEPS}
        heading="How We Work"
        className={alternateSectionClass(false)}
      />

      <WhyWeberSection className={alternateSectionClass(true)} />

      <Section className={alternateSectionClass(false)}>
        <Container size="reading">
          <Stack gap={5} className="items-center text-center">
            <ScrollReveal>
              <h2 className="text-h2 font-semibold text-foreground">
                Technologies
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={SEQUENCE_REVEAL_STEP}>
              <p className="max-w-reading text-body text-muted-foreground">
                A modern, practical stack — the specific technologies vary by
                project, chosen to match what that project actually needs.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={SEQUENCE_REVEAL_STEP * 2}>
              <Cluster gap={3} className="justify-center">
                {TECHNOLOGIES.map((technology) => (
                  <Tag key={technology}>{technology}</Tag>
                ))}
              </Cluster>
            </ScrollReveal>
          </Stack>
        </Container>
      </Section>

      <Section className={alternateSectionClass(true)}>
        <Container>
          <CtaBanner
            message="Ready to discuss your project? Let's talk about your goals and find the right solution together."
            actionLabel="Let's discuss your project"
            href="/contact"
          />
        </Container>
      </Section>
    </Page>
  );
}
