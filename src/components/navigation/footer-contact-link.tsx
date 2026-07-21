"use client";

import type { ReactNode } from "react";
import Link, { type LinkProps } from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { HOVER_TRANSITION, ICON_HOVER_SCALE } from "@/lib/hover-tokens";
import { VisuallyHidden } from "@/components/utilities/visually-hidden";

const MotionLink = motion.create(Link);

export interface FooterContactLinkProps extends Pick<LinkProps, "href"> {
  icon: ReactNode;
  label: string;
  /** Whether this links off-site (opens in a new tab, adds rel="noopener noreferrer"). Defaults to false (e.g. mailto:). */
  external?: boolean;
}

/**
 * A single, compact contact icon-link for the Footer (Footer Enhancement,
 * Design Evolution, Project Owner approved) — reuses the same
 * `useReducedMotion` + `whileHover` scale technique already established
 * for Brand Link and the WhatsApp CTA, at a scale appropriate for a
 * small icon rather than a full button (`buttonVariants` is deliberately
 * not used here — a pill-shaped button would read oddly around a bare
 * icon). Existing tokens only (`border-border`, `bg-surface`,
 * `text-muted-foreground`) — no arbitrary values. The icon is decorative
 * (callers pass it already marked `aria-hidden`, e.g. via the Icon
 * utility or WhatsAppIcon); the accessible name comes from the visible-
 * equivalent `label` inside VisuallyHidden.
 */
export function FooterContactLink({
  href,
  icon,
  label,
  external = false,
}: FooterContactLinkProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionLink
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      whileHover={shouldReduceMotion ? undefined : ICON_HOVER_SCALE}
      transition={HOVER_TRANSITION}
      className={cn(
        "inline-flex items-center justify-center rounded-md border border-border bg-surface p-3",
        "text-muted-foreground transition-colors duration-standard ease-in-out hover:text-foreground hover:border-primary/40",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      )}
    >
      {icon}
      <VisuallyHidden>
        {label}
        {external ? " (opens in a new tab)" : ""}
      </VisuallyHidden>
    </MotionLink>
  );
}
