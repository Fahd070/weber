import type { LinkProps } from "next/link";
import type { AnchorHTMLAttributes } from "react";
import type { ButtonVariant } from "@/components/inputs/button";
import { MotionCtaLink } from "@/components/inputs/motion-cta-link";

/**
 * Keeps a partnership-toned invitation to Contact persistently reachable
 * from every route (DECISIONS.md WD-045), without being buried inside the
 * collapsed mobile menu. Composed of Motion CTA Link — Button's visual
 * treatment plus the sitewide button hover/tap motion (Motion Phase B) —
 * with Contact-directed link behavior, using next/link under the hood
 * (DECISIONS.md WD-014). Copy is one of the partnership-toned examples
 * DECISIONS.md WD-007 itself provides verbatim, not invented.
 * docs/components/03_NAVIGATION.md — CTA inside Navigation.
 */
export interface CtaInsideNavigationProps
  extends
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    Partial<Pick<LinkProps, "href" | "prefetch">> {
  variant?: ButtonVariant;
}

export function CtaInsideNavigation({
  variant = "primary",
  className,
  href = "/contact",
  ...props
}: CtaInsideNavigationProps) {
  return (
    <MotionCtaLink
      href={href}
      variant={variant}
      className={className}
      {...props}
    >
      Let&apos;s discuss your project
    </MotionCtaLink>
  );
}
