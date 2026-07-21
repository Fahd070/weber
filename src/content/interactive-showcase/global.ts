import type { GlobalRegistry } from "./types";

/**
 * Global layer registry (DECISIONS.md WD-159, WD-161, WD-165) — data only,
 * no rendering logic, no React import. Owns the "Concept Preview" label,
 * the single shared CTA record, and the Company Name placeholder
 * convention. Never varies by Pattern or Business Type.
 */
export const GLOBAL_REGISTRY: GlobalRegistry = {
  conceptPreviewLabel: "Concept Preview",
  cta: {
    label: "Let's discuss your project",
    href: "/contact",
  },
  companyNamePlaceholder: "{{companyName}}",
};
