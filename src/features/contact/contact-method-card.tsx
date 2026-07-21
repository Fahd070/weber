"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  CARD_HOVER_BORDER_CLASS,
  CARD_HOVER_LIFT,
  HOVER_TRANSITION,
} from "@/lib/hover-tokens";
import { Card } from "@/components/surfaces/card";
import { Stack } from "@/components/layout/stack";
import { MotionCtaLink } from "@/components/inputs/motion-cta-link";
import { VisuallyHidden } from "@/components/utilities/visually-hidden";
import { ScrollReveal } from "@/components/utilities/scroll-reveal";

export interface ContactMethodCardProps {
  /** A decorative icon element — callers supply it already correctly marked (e.g. via the Icon utility or WhatsAppIcon). */
  icon: ReactNode;
  title: string;
  /** Short supporting line — never the raw contact address/number itself (Contact Card Privacy, Project Owner approved). */
  description: string;
  /** The action button's visible label, e.g. "Contact via Email". */
  buttonLabel: string;
  href: string;
  /** Whether this links off-site (opens in a new tab, adds rel="noopener noreferrer"). Defaults to false (e.g. mailto:). */
  external?: boolean;
  /** Additional entrance-reveal delay (seconds) — used to stagger multiple cards. Defaults to 0. */
  delay?: number;
}

/**
 * A single contact method — Email, WhatsApp, or any future direct
 * channel documented in INFORMATION_ARCHITECTURE.md §10 — presented
 * beside the Contact form (Design Evolution Phase 3, Project Owner
 * approved). Restructured (Contact Card Privacy, Project Owner approved)
 * to the same shape Service Card already established: a non-interactive
 * Card holding descriptive text, plus one distinct Motion CTA Link as
 * the actual, single link target — not the whole card wrapped in a
 * `<Link>`. Two reasons, both reused from Service Card rather than
 * invented here: (1) the raw email address / WhatsApp URL is
 * configuration only (`site-config.ts`, DECISIONS.md WD-010 — Single
 * Source of Truth) and must never be rendered as visible text, so there
 * is no longer a "value" line to show, and (2) wrapping an icon, title,
 * and description in one giant link gave it an unnecessarily verbose
 * accessible name — a dedicated button with its own clear label
 * ("Contact via Email") is both more honest about what happens on click
 * and more accessible. Reuses Surfaces Card's existing elevation
 * treatment and Motion CTA Link's existing button styling/hover motion
 * rather than either a new surface style or new button styling. Wrapped
 * in ScrollReveal for its entrance (Motion Phase B) around the existing
 * hover-lift `motion.div`, left completely untouched, so the two
 * animations — entrance and hover — stay independent.
 */
export function ContactMethodCard({
  icon,
  title,
  description,
  buttonLabel,
  href,
  external = false,
  delay = 0,
}: ContactMethodCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <ScrollReveal delay={delay}>
      <motion.div
        whileHover={shouldReduceMotion ? undefined : CARD_HOVER_LIFT}
        transition={HOVER_TRANSITION}
      >
        <Card
          elevation="resting"
          className={cn("p-6", CARD_HOVER_BORDER_CLASS)}
        >
          <Stack gap={4}>
            <Stack gap={2}>
              {icon}
              <span className="text-body font-semibold text-foreground">
                {title}
              </span>
              <span className="text-caption text-muted-foreground">
                {description}
              </span>
            </Stack>
            <MotionCtaLink
              href={href}
              variant="secondary"
              className="self-start"
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {buttonLabel}
              {external ? (
                <VisuallyHidden> (opens in a new tab)</VisuallyHidden>
              ) : null}
            </MotionCtaLink>
          </Stack>
        </Card>
      </motion.div>
    </ScrollReveal>
  );
}
