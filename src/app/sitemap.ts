import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

/**
 * Generates /sitemap.xml (PROJECT_CONSTITUTION.md Part 5 — SEO; Part 8 —
 * Launch Readiness). Lists only currently-implemented public routes —
 * not-yet-built destinations (Blog) are intentionally excluded,
 * consistent with the standing prohibition on inventing pages. The four
 * Service Detail routes were added in Service Detail Pages Phase 1.
 * /portfolio was removed and /about added in the About Us phase (Project
 * Owner approved).
 */
const PUBLIC_ROUTES = [
  "",
  "/services",
  "/services/websites",
  "/services/mobile-applications",
  "/services/desktop-applications",
  "/services/templates",
  "/interactive-showcase",
  "/about",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PUBLIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
  }));
}
