"use client";

import { usePathname } from "next/navigation";
import { NavigationItem } from "./navigation-item";
import { NAV_ITEMS } from "./nav-items";

/**
 * Supplies Header's Navigation Menu with Weber's approved Primary
 * Navigation destinations (DECISIONS.md WD-043), marking the current
 * route via Navigation Item's own `current` prop (DECISIONS.md WD-050,
 * WD-060). Marking the active route requires client-side route
 * awareness, so this is a dedicated Client Component composed into
 * Header's `navItems` slot rather than changing Header's own contract.
 */
export function PrimaryNav() {
  const pathname = usePathname();

  return (
    <>
      {NAV_ITEMS.map((item) => (
        <NavigationItem
          key={item.href}
          href={item.href}
          current={pathname === item.href}
        >
          {item.label}
        </NavigationItem>
      ))}
    </>
  );
}
