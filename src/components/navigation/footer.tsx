import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { Stack } from "@/components/layout/stack";
import { ScrollReveal } from "@/components/utilities/scroll-reveal";
import { BrandLink } from "./brand-link";

/**
 * The landmark region that fills App Shell's Footer slot — the closing
 * counterpart to Header, carrying supporting trust signals and utility
 * links (INFORMATION_ARCHITECTURE.md §4). Composes Container and Stack,
 * and reuses Brand Link rather than duplicating it (DECISIONS.md WD-111).
 * Language Switcher is explicitly not composed here by default (WD-111).
 * The root layout supplies Footer Nav (Weber's approved Version 1
 * destinations, DECISIONS.md WD-043) as `children` — no trust signals,
 * Support Pages tier, or legal pages are approved yet (DECISIONS.md
 * WD-110), and none are hardcoded here. One Footer, no variants, used
 * on every route, non-sticky, appears exactly once per page (WD-043,
 * WD-045). Reveals when scrolled into view, the same reveal language
 * used sitewide (Motion Phase B, Design Evolution, Project Owner
 * approved). Renders Brand Link logo-only, at its larger size variant,
 * as the footer's own visual anchor (Footer Enhancement, Design
 * Evolution, Project Owner approved) — Header's own Brand Link usage is
 * untouched, since both variants live on the same component rather than
 * a second implementation. docs/components/03_NAVIGATION.md — Footer.
 */
export interface FooterProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

export function Footer({ className, children, ...props }: FooterProps) {
  return (
    <footer className={cn("border-t border-border", className)} {...props}>
      <Container>
        <ScrollReveal>
          <Stack gap={8} className="items-center py-12 text-center">
            <BrandLink showWordmark={false} size="large" />
            {children}
          </Stack>
        </ScrollReveal>
      </Container>
    </footer>
  );
}
