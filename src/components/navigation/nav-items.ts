/**
 * The single source of truth for Weber's approved Primary Navigation
 * destinations, shared by Header (via Primary Nav) and Footer (via
 * Footer Nav) so both stay identical without duplicating the list
 * (DECISIONS.md WD-010 — Single Source of Truth Rule). Originally
 * established per DECISIONS.md WD-037/WD-043/WD-146; the About Us phase
 * (Project Owner approved) replaced Portfolio with About Us — Portfolio
 * is no longer a Version 1 destination, superseding WD-043's original
 * route list and retiring WD-147 (Portfolio Page Strategy). Home is
 * deliberately omitted — Brand Link already links to Home from both
 * Header and Footer. Blog is deliberately omitted — approved for
 * Version 1 in principle (DECISIONS.md WD-039) but has no implemented
 * route yet.
 */
export interface NavItem {
  href: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { href: "/services", label: "Services" },
  { href: "/interactive-showcase", label: "Interactive Showcase" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];
