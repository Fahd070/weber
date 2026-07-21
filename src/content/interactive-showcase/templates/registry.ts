import type { TemplateRegistry } from "./types";

/**
 * Business Type → Template mapping (Interactive Showcase V2, Design
 * Evolution, Project Owner approved; extended to all fourteen Business
 * Types in the Premium Realism Phase, Project Owner approved). Every key
 * is one of the fourteen already-approved Business Type values
 * (DECISIONS.md WD-152) — no new taxonomy values were introduced. Adding
 * a future template still requires exactly two steps: register its
 * content in `content.ts`, then add its mapping entry here. Nothing else
 * needs to change — the renderer is fully data-driven
 * (`template-renderer.tsx`).
 *
 * Mapping notes carried over from the original seven-template rollout
 * (still accurate — content for these was enriched, not re-mapped):
 * - "Restaurant" covers the requested "Coffee Shop" concept too —
 *   `restaurants-cafes` is already one combined Business Type value
 *   (WD-152), so it can only carry one template; a full-service
 *   restaurant layout generalizes to a café more naturally than the
 *   reverse.
 * - "Law Firm" maps to `professional-services` rather than "Corporate,"
 *   matching that Business Type's own established rationale in WD-155
 *   ("converts primarily on confidence in the provider — expertise").
 * - "Corporate" maps to `other`, becoming a richer upgrade of the
 *   previously bare-bones Neutral/Fallback treatment.
 * - "Gym" maps to `beauty-personal-care`; its content was rewritten this
 *   phase away from literal gym/fitness copy to salon/spa-appropriate
 *   copy, correcting a mismatch between the template's original
 *   (fitness-flavored) content and the Business Type it was actually
 *   assigned to.
 *
 * All seven remaining Business Type values now have their own dedicated
 * template too, each with a template id chosen to match the Business
 * Type directly (no reused/repurposed naming needed at 14:14). The
 * original, unmodified four-pattern system remains fully intact
 * underneath as the resolution path for any future Business Type that
 * doesn't register a template — none currently take it, since every
 * value is mapped, but the fallback in `resolve-template.ts` still
 * applies unchanged.
 */
export const BUSINESS_TYPE_TEMPLATE_REGISTRY: TemplateRegistry = {
  "restaurants-cafes": "restaurant",
  "professional-services": "law-firm",
  other: "corporate",
  "health-wellness": "medical-clinic",
  "beauty-personal-care": "gym",
  "real-estate": "real-estate",
  ecommerce: "ecommerce",
  "retail-shops": "retail-boutique",
  "home-trade-services": "home-trade-craft",
  "education-training": "education-academy",
  "hospitality-events": "hospitality-venue",
  "technology-software": "technology-saas",
  automotive: "automotive-showcase",
  "nonprofit-community": "nonprofit-mission",
};
