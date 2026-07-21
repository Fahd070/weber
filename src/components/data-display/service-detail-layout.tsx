import { forwardRef, type HTMLAttributes } from "react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Stack } from "@/components/layout/stack";

/**
 * Presents one Version 1 service's full detail content on its own route.
 * A Data Display content component, not a Layout-category primitive
 * (DECISIONS.md WD-089, WD-112). Owns arranging a single service's full
 * content into a coherent reading experience; does not own page-level
 * structural wrapping, the grid-listing presentation (Service Card's
 * job), or its conversion action (CTA Banner — a page-level
 * co-composition, never a dependency, WD-112). No service-detail content
 * is approved, so this stays fully generic — `children`, never named
 * content fields. Uses the Reading container (720px), which
 * DESIGN_TOKENS.md §9 names directly for "Services descriptions"
 * (DECISIONS.md WD-035). docs/components/06_DATA_DISPLAY.md — Service
 * Detail Layout.
 */
export type ServiceDetailLayoutProps = HTMLAttributes<HTMLElement>;

export const ServiceDetailLayout = forwardRef<
  HTMLElement,
  ServiceDetailLayoutProps
>(({ className, children, ...props }, ref) => {
  return (
    <Section ref={ref} className={className} {...props}>
      <Container size="reading">
        <Stack gap={5}>{children}</Stack>
      </Container>
    </Section>
  );
});

ServiceDetailLayout.displayName = "ServiceDetailLayout";
