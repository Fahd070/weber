"use client";

import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import type { MotionReservedHandlers } from "@/lib/motion-types";
import {
  BUTTON_HOVER_LIFT,
  HOVER_TRANSITION,
  TAP_SCALE,
} from "@/lib/hover-tokens";
import { buttonVariants, type ButtonVariant } from "./button";

const MotionLink = motion.create(Link);

export interface MotionCtaLinkProps
  extends
    Omit<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      "href" | MotionReservedHandlers
    >,
    Pick<LinkProps, "href" | "prefetch"> {
  variant?: ButtonVariant;
}

/**
 * Button's visual treatment (`buttonVariants`), reused exactly as-is,
 * plus the same subtle hover lift/scale and tap feedback already
 * established for the WhatsApp CTA and Brand Link (Motion Phase B,
 * Design Evolution, Project Owner approved) — one shared wrapper so
 * every internal CTA link sitewide gets identical button motion instead
 * of each call site duplicating its own whileHover/whileTap props.
 * Visual classes are untouched; this only layers motion on top.
 * Skipped entirely under `prefers-reduced-motion`.
 */
export function MotionCtaLink({
  variant = "primary",
  className,
  ...props
}: MotionCtaLinkProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionLink
      className={cn(buttonVariants(variant), className)}
      whileHover={shouldReduceMotion ? undefined : BUTTON_HOVER_LIFT}
      whileTap={shouldReduceMotion ? undefined : TAP_SCALE}
      transition={HOVER_TRANSITION}
      {...props}
    />
  );
}
