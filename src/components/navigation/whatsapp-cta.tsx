"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { BUTTON_HOVER_LIFT, HOVER_TRANSITION } from "@/lib/hover-tokens";
import { buttonVariants } from "@/components/inputs/button";
import { VisuallyHidden } from "@/components/utilities/visually-hidden";
import { WhatsAppIcon } from "@/components/utilities/whatsapp-icon";
import { CONTACT_WHATSAPP_HREF } from "@/lib/site-config";

/**
 * A persistent WhatsApp entry point beside CTA inside Navigation (Design
 * Evolution Phase 2, Project Owner approved). Reuses Button's shared
 * shape via `buttonVariants` (padding, radius, height, focus ring,
 * transitions) so it matches the existing CTA exactly, overriding only
 * the background/border/text color to a tint of WhatsApp's own official
 * brand green (#25D366) — a deliberate, scoped exception to Weber's own
 * token system (WD-002/WD-036) and filled-only button variant set
 * (WD-136), since this color's entire purpose is external brand
 * recognition, not Weber's own palette or variant scheme. Same reasoning
 * for the icon: Weber's
 * icon system is Lucide-only (DECISIONS.md WD-019), which has no
 * WhatsApp brand glyph, so the official WhatsApp mark is inlined
 * directly here rather than approximated with a generic chat icon that
 * wouldn't actually read as WhatsApp. Hover motion mirrors Brand Link's
 * own pattern (Motion, WD-018, gated by `useReducedMotion`) rather than
 * introducing a second way of handling reduced motion in the codebase.
 */
export function WhatsAppCta({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href={CONTACT_WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={shouldReduceMotion ? undefined : BUTTON_HOVER_LIFT}
      transition={HOVER_TRANSITION}
      className={cn(
        buttonVariants("primary"),
        "gap-2 border bg-[rgba(37,211,102,0.08)] text-[#25D366] border-[rgba(37,211,102,0.22)]",
        "hover:bg-[rgba(37,211,102,0.14)] hover:border-[rgba(37,211,102,0.35)]",
        className,
      )}
    >
      <WhatsAppIcon className="size-4 fill-current" />
      WhatsApp
      <VisuallyHidden> (opens in a new tab)</VisuallyHidden>
    </motion.a>
  );
}
