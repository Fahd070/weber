import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Stack } from "@/components/layout/stack";
import { Timeline } from "@/components/data-display/timeline";
import {
  ScrollReveal,
  SEQUENCE_REVEAL_STEP,
} from "@/components/utilities/scroll-reveal";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  points: string[];
}

const DEFAULT_PROCESS_STEPS: ProcessStep[] = [
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

export interface ProcessSectionProps {
  /** Defaults to Home's exact approved 4-step process (DECISIONS.md WD-040, WD-042, WD-142). */
  steps?: ProcessStep[];
  /** Defaults to "Process", matching every existing usage. */
  heading?: string;
  /**
   * Forwards straight to the underlying `Section` (Premium
   * Micro-interactions Phase 2, Project Owner approved) — the same
   * passthrough `ServiceDetailLayout` already offers — lets each page
   * decide this instance's own place in its own alternating background
   * rhythm (`alternateSectionClass`) without this component needing to
   * know anything about that rhythm itself.
   */
  className?: string;
}

/**
 * Reuses Home's approved "Process" pattern — a shared Marketing
 * component (moved here from `features/services` during the About Us
 * phase, since it's now used by Service Detail pages *and* the About
 * page, not Services-specific). Generalized to accept `steps`/`heading`
 * so a different, still-honest workflow breakdown (e.g. About's own
 * six-step version) can reuse the same Timeline-based structure instead
 * of a second, duplicated implementation — every existing caller that
 * omits both props keeps receiving Home's exact original 4-step content,
 * completely unchanged. A separate local copy of the default content
 * rather than an import from `src/app/page.tsx`, so Home's own file —
 * and its Motion Phase A/B behavior — stays completely untouched. Each
 * step's own content is center-aligned (Process Section Alignment,
 * Project Owner approved) via the existing `items-center text-center`
 * pair already used sitewide for centered Stack content — no new
 * utility, spacing, or typography value.
 */
export function ProcessSection({
  steps = DEFAULT_PROCESS_STEPS,
  heading = "Process",
  className,
}: ProcessSectionProps) {
  return (
    <Section className={className}>
      <Container>
        <Stack gap={8}>
          <ScrollReveal>
            <h2 className="text-h2 font-semibold text-foreground text-center">
              {heading}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={SEQUENCE_REVEAL_STEP}>
            <Timeline cols={{ base: 1, lg: 4 }} gap={6}>
              {steps.map((step) => (
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
  );
}
