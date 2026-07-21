import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Stack } from "@/components/layout/stack";
import { Grid } from "@/components/layout/grid";
import { Tag } from "./tag";

/**
 * Presents one portfolio project's full case study content on its own
 * route. A Data Display content component, not a Layout-category
 * primitive (DECISIONS.md WD-089). Owns arranging a single case study's
 * content into a coherent reading experience; does not own page-level
 * structural wrapping or the grid-listing presentation (Portfolio Card's
 * job). Composes Section, Container, Stack, and Grid for its internal
 * structure, plus a Tag per technology and, optionally, a facts region
 * for structured project details (client, timeline, etc.) — Key Value
 * Pair itself is an optional, not-yet-implemented Data Display component,
 * so `facts` accepts any content until it exists. Uses the Reading
 * container (720px), the same width Article Layout and Service Detail
 * Layout use for narrative content (DECISIONS.md WD-035). Content
 * (heading/technologies/facts/body) is supplied entirely by the caller
 * (DECISIONS.md WD-010). docs/components/06_DATA_DISPLAY.md — Case Study
 * Layout.
 */
export interface CaseStudyLayoutProps extends HTMLAttributes<HTMLElement> {
  /** Project name. */
  heading: ReactNode;
  /** One or more technology labels — each composed into its own Tag (required, per this component's documented Composition). */
  technologies: ReactNode[];
  /** Structured project facts (e.g. client, timeline), arranged in a responsive Grid. Optional. */
  facts?: ReactNode;
  /** Case study narrative — overview and outcome content. */
  children: ReactNode;
}

export const CaseStudyLayout = forwardRef<HTMLElement, CaseStudyLayoutProps>(
  ({ heading, technologies, facts, children, className, ...props }, ref) => {
    return (
      <Section ref={ref} className={className} {...props}>
        <Container size="reading">
          <Stack gap={5}>
            <Stack gap={3}>
              <h1 className="text-h1 font-semibold text-foreground">
                {heading}
              </h1>
              <div className="flex flex-wrap gap-2">
                {technologies.map((technology, index) => (
                  <Tag key={index}>{technology}</Tag>
                ))}
              </div>
            </Stack>
            {facts !== undefined && (
              <Grid cols={{ base: 1, md: 2 }} gap={3}>
                {facts}
              </Grid>
            )}
            <Stack gap={4} className="text-body text-foreground">
              {children}
            </Stack>
          </Stack>
        </Container>
      </Section>
    );
  },
);

CaseStudyLayout.displayName = "CaseStudyLayout";
