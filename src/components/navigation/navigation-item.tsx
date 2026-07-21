import { forwardRef, type AnchorHTMLAttributes } from "react";
import Link, { type LinkProps } from "next/link";
import { cn } from "@/lib/utils";

/**
 * A single link within Navigation Menu, representing one destination.
 * Owns its own destination link and active/current-route state. Content
 * (destination, label) is never hardcoded — supplied entirely by whoever
 * composes it. Uses next/link (DECISIONS.md WD-014) for internal
 * navigation, the same pattern already established by Brand Link and CTA
 * inside Navigation.
 * docs/components/03_NAVIGATION.md — Navigation Item.
 */
export interface NavigationItemProps
  extends
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    Pick<LinkProps, "href"> {
  /**
   * Whether this is the active route ("Current" — a Navigation-specific
   * state beyond the nine canonical states, DECISIONS.md WD-044).
   * Communicated to assistive technology via aria-current, not visually
   * only (WD-050, WD-060).
   */
  current?: boolean;
}

export const NavigationItem = forwardRef<
  HTMLAnchorElement,
  NavigationItemProps
>(({ current = false, className, children, ...props }, ref) => {
  return (
    <Link
      ref={ref}
      aria-current={current ? "page" : undefined}
      className={cn(
        "text-body transition-colors duration-standard ease-in-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        current ? "text-primary" : "text-muted-foreground hover:text-primary",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
});

NavigationItem.displayName = "NavigationItem";
