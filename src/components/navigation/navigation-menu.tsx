"use client";

import { forwardRef, useEffect, useState, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Cluster } from "@/components/layout/cluster";

/** Matches Tailwind's own `lg` breakpoint (DECISIONS.md WD-034) — the exact width this component already switches on via its `lg:` utility classes. */
const DESKTOP_QUERY = "(min-width: 1024px)";

/**
 * Surfaces the Core Pages in a predictable, minimal set (ROUTES.md §4;
 * INFORMATION_ARCHITECTURE.md §4). Owns rendering the list of destinations
 * and adapting across breakpoints — collapsed (Mobile/Tablet) vs. expanded
 * (Laptop/Desktop), the same component adapting rather than a chosen
 * visual variant (DECISIONS.md WD-034, WD-059). Composed of Navigation
 * Item instances, supplied as children by the caller (Primary Nav, using
 * Weber's approved Version 1 destinations — DECISIONS.md WD-043) and never
 * hardcoded here.
 *
 * Collapse/expand animates via the same `grid-template-rows` technique
 * already established by Accordion (`0fr` ↔ `1fr`, plus a fade on the
 * inner content) rather than the previous instant `hidden`/`block` swap
 * (Mobile Navigation Animation, Project Owner approved) — reused, not
 * duplicated, down to the exact duration/easing tokens and
 * `motion-reduce:transition-none` handling. One real difference from
 * Accordion's panel: this content is a set of focusable links, not
 * plain text, so a collapsed-but-still-tab-reachable panel would be a
 * genuine keyboard-accessibility bug Accordion's own panels don't have.
 * `inert` (native HTML, not a Motion/JS focus-trap reimplementation)
 * removes the collapsed panel from both focus order and the
 * accessibility tree — but it must never apply at the Desktop tier,
 * where this same nav is always expanded regardless of `open`, so a
 * small `matchMedia` check (mirroring this component's own existing
 * `lg:` breakpoint) tracks whether that tier is currently active. This
 * is the one addition to this component that required becoming a
 * Client Component — it already only ever renders inside Header, itself
 * already a Client Component, so this crosses no new server/client
 * boundary that didn't already exist.
 * docs/components/03_NAVIGATION.md — Navigation Menu.
 */
export interface NavigationMenuProps extends HTMLAttributes<HTMLElement> {
  /** Whether the collapsed (Mobile/Tablet) menu is currently open. */
  open?: boolean;
}

export const NavigationMenu = forwardRef<HTMLElement, NavigationMenuProps>(
  ({ open = false, className, children, ...props }, ref) => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
      const query = window.matchMedia(DESKTOP_QUERY);
      setIsDesktop(query.matches);
      const handleChange = (event: MediaQueryListEvent) =>
        setIsDesktop(event.matches);
      query.addEventListener("change", handleChange);
      return () => query.removeEventListener("change", handleChange);
    }, []);

    const expanded = isDesktop || open;

    return (
      <nav
        ref={ref}
        aria-label="Primary"
        inert={!expanded || undefined}
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows] duration-standard ease-in-out motion-reduce:transition-none lg:overflow-visible",
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          className,
        )}
        {...props}
      >
        <div
          className={cn(
            "min-h-0 overflow-hidden transition-opacity duration-standard ease-in-out motion-reduce:transition-none lg:min-h-fit lg:overflow-visible",
            expanded ? "opacity-100" : "opacity-0",
          )}
        >
          <Cluster gap={5}>{children}</Cluster>
        </div>
      </nav>
    );
  },
);

NavigationMenu.displayName = "NavigationMenu";
