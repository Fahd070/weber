import { forwardRef, type AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Lets a keyboard user jump directly to a page's main content, bypassing
 * repeated Navigation. This component's entire purpose is accessibility —
 * intended as the first focusable element in App Shell (DECISIONS.md
 * WD-050, WD-060; UI_FOUNDATION.md §7 — Keyboard Navigation). Visually
 * hidden by default (the same sr-only treatment as VisuallyHidden), and
 * revealed only on keyboard focus.
 * docs/components/09_UTILITIES.md — Skip Link.
 */
export interface SkipLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Defaults to "#main-content" — the id RootLayout's <main> exposes. */
  href?: string;
}

export const SkipLink = forwardRef<HTMLAnchorElement, SkipLinkProps>(
  ({ href = "#main-content", className, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={cn(
          "sr-only focus:not-sr-only",
          "fixed left-4 top-4 z-skip-link",
          "rounded-md bg-primary px-6 py-3 text-button font-medium text-background",
          "transition-opacity duration-micro",
          className,
        )}
        {...props}
      >
        {children}
      </a>
    );
  },
);

SkipLink.displayName = "SkipLink";
