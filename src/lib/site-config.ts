/**
 * Weber's canonical production URL — used to build the absolute URLs
 * app/sitemap.ts and app/robots.ts require (PROJECT_CONSTITUTION.md Part
 * 5 — SEO; Part 8 — Launch Readiness). Hosting/domain is not yet decided
 * (DECISIONS.md WD-024 leaves it explicitly pending), so this reads from
 * an environment variable the Project Owner sets once it is, rather than
 * inventing a placeholder production domain. The localhost fallback keeps
 * sitemap/robots generation correct in development in the meantime.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/**
 * Weber's canonical direct contact channels (Contact page, DECISIONS.md
 * WD-052; Footer Enhancement and Header WhatsApp CTA, Design Evolution,
 * Project Owner approved) — a single source of truth (DECISIONS.md WD-010)
 * so the phone number and email address are never re-typed at each call
 * site (Final Cleanup Phase, Project Owner approved).
 */
const CONTACT_EMAIL = "alkatheri1966@gmail.com";
export const CONTACT_EMAIL_HREF = `mailto:${CONTACT_EMAIL}`;
export const CONTACT_WHATSAPP_HREF = "https://wa.me/966501698445";
