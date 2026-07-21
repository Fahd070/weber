import type { LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Stack } from "@/components/layout/stack";
import type { ButtonVariant } from "@/components/inputs/button";
import { MotionCtaLink } from "@/components/inputs/motion-cta-link";
import { ScrollReveal } from "@/components/utilities/scroll-reveal";

/**
 * A reusable message-plus-action banner converting attention into the
 * next step — the most-reused Marketing component, used across Home,
 * Services, Service Detail pages, and About Us. Owns presenting one
 * message and one primary action consistently;
 * does not own the content/context around it. Composes Stack for
 * message/action rhythm and Motion CTA Link (Button's visual treatment
 * plus the sitewide button hover/tap motion, Motion Phase B) as a real
 * link — Button itself "does not own a link's destination/navigation
 * logic," the same pattern already used for CTA inside Navigation.
 * Reveals as one unit when scrolled into view (ScrollReveal, Motion
 * Phase B). Message and action are entirely caller-supplied — six
 * different contexts need six different messages, never hardcoded here.
 * docs/components/08_MARKETING.md — CTA Banner.
 */
export interface CtaBannerProps
  extends
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    Pick<LinkProps, "href" | "prefetch"> {
  message: ReactNode;
  actionLabel: string;
  variant?: ButtonVariant;
}

export function CtaBanner({
  message,
  actionLabel,
  variant = "primary",
  href,
  className,
  ...props
}: CtaBannerProps) {
  return (
    <ScrollReveal>
      <Stack gap={4} className={cn("items-center text-center", className)}>
        <p className="text-h3 font-semibold text-foreground">{message}</p>
        <MotionCtaLink href={href} variant={variant} {...props}>
          {actionLabel}
        </MotionCtaLink>
      </Stack>
    </ScrollReveal>
  );
}
