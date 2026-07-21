import { Cluster } from "@/components/layout/cluster";
import { NavigationItem } from "./navigation-item";
import { NAV_ITEMS } from "./nav-items";

/**
 * Supplies Footer with the same approved destinations Header uses
 * (DECISIONS.md WD-043, via the shared nav-items list), reusing
 * Navigation Item and the same Cluster arrangement Navigation Menu uses
 * so Header and Footer stay visually and semantically consistent. Its
 * own `aria-label` keeps this landmark distinct from Header's Primary
 * Navigation Menu for assistive technology.
 */
export function FooterNav() {
  return (
    <nav aria-label="Footer">
      <Cluster gap={5}>
        {NAV_ITEMS.map((item) => (
          <NavigationItem key={item.href} href={item.href}>
            {item.label}
          </NavigationItem>
        ))}
      </Cluster>
    </nav>
  );
}
