"use client";

import type { HTMLAttributes, ReactNode } from "react";
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

/**
 * Presents one of Weber's four Version 1 services in a scannable summary
 * (DECISIONS.md WD-037). Owns presenting a single service's name, short
 * description, and an optional entry point to learn more; does not own the
 * full service detail content (Service Detail Layout's job) or the grid
 * arrangement of multiple cards — Service Card is a single grid item, not
 * a Grid container itself; whatever composes several of these (e.g. the
 * Home Services section) is what renders the surrounding Grid and decides
 * its own column count (DECISIONS.md WD-137). Composes the Surfaces Card
 * primitive and Motion CTA Link (Button's visual treatment plus the
 * sitewide button hover/tap motion, Motion Phase B) as a real link — not a
 * native `<button>`, mirroring the exact pattern already established by
 * CTA inside Navigation. The entry point's visible label and accessible
 * suffix are both caller-supplied (`actionLabel`/`accessibleSuffix`),
 * defaulting to Home's exact WD-171 wording ("View all services" / ",
 * including {name}") so every existing caller keeps its current,
 * already-approved behavior unchanged. The Services listing page (Service
 * Detail Pages Phase 1) overrides both to "View Details" / " about
 * {name}", since its cards now link to a genuinely dedicated Service
 * Detail route per card — accurate, not the overpromise WD-171 rejected
 * for the shared-listing case. The entry point is omitted entirely
 * (`showAction={false}`) where there is no destination to link to at all
 * (DECISIONS.md WD-146). No content is hardcoded — name, description,
 * and href are supplied entirely by the caller (DECISIONS.md WD-010).
 * The whole card lifts slightly and its border brightens on hover
 * (Premium UI Polish, Project Owner approved) — the same border-color
 * technique already used by Contact Method Card, and the same Motion
 * `whileHover` translateY already used sitewide, gated by
 * `useReducedMotion`, since the card now leads to one genuinely unique
 * destination per service (Service Detail Pages Phase 1) rather than a
 * shared listing. Fills its Grid cell's full height and keeps its action
 * anchored to the bottom edge via a pure flex chain — `h-full` down
 * through the hover wrapper and Card, `flex-1` on the name/description
 * group only (UI Refinement Pass, Project Owner approved) — so cards in
 * the same row stay equal height and their buttons stay aligned
 * regardless of how many lines a given description wraps to, with no
 * hardcoded height anywhere. Grid already stretches its items to equal
 * height by default (CSS Grid's own `align-items: stretch`); this only
 * makes Service Card's own visible box actually fill that already-equal
 * cell instead of shrinking to its own shorter content.
 * docs/components/06_DATA_DISPLAY.md — Service Card.
 */
export interface ServiceCardProps extends HTMLAttributes<HTMLDivElement> {
  name: ReactNode;
  description: ReactNode;
  /** Link to this service's destination. Required when `showAction` is true. */
  href?: string;
  /** Whether to render the entry point. Defaults to true. Set to false when there is no destination to link to (DECISIONS.md WD-146). */
  showAction?: boolean;
  /** The entry point's visible text. Defaults to "View all services" (DECISIONS.md WD-171). */
  actionLabel?: ReactNode;
  /** Appended inside VisuallyHidden after `actionLabel` to build the accessible name. Defaults to ", including {name}" (DECISIONS.md WD-171). */
  accessibleSuffix?: ReactNode;
}

export function ServiceCard({
  name,
  description,
  href,
  showAction = true,
  actionLabel = "View all services",
  accessibleSuffix,
  className,
  ...props
}: ServiceCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : CARD_HOVER_LIFT}
      transition={HOVER_TRANSITION}
      className="h-full"
    >
      <Card
        elevation="resting"
        className={cn(
          "flex h-full flex-col p-6",
          CARD_HOVER_BORDER_CLASS,
          className,
        )}
        {...props}
      >
        <Stack gap={4} className="h-full">
          <Stack gap={2} className="flex-1">
            <h3 className="text-h3 font-semibold text-foreground">{name}</h3>
            <p className="text-body text-muted-foreground">{description}</p>
          </Stack>
          {showAction && href && (
            <MotionCtaLink
              href={href}
              variant="secondary"
              className="self-start"
            >
              {actionLabel}
              <VisuallyHidden>
                {accessibleSuffix ?? <>, including {name}</>}
              </VisuallyHidden>
            </MotionCtaLink>
          )}
        </Stack>
      </Card>
    </motion.div>
  );
}
