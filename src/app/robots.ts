import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

/**
 * Generates /robots.txt (PROJECT_CONSTITUTION.md Part 5 — SEO; Part 8 —
 * Launch Readiness). Allows crawling of every public route; the previous
 * site-wide noindex configuration (`src/app/layout.tsx`) has been
 * removed, so this permits what that metadata now also allows.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
