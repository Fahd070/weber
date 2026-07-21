import { cn } from "@/lib/utils";

/**
 * A single soft, out-of-focus radial glow — ambient light, not a shape
 * with visible edges (Premium Micro-interactions Phase 2, Project Owner
 * approved). Built entirely from already-approved tokens: `--primary`
 * (white) at very low opacity, `blur-3xl` (a stock Tailwind utility, not
 * a new value) — the same "subtle background-lightness shift instead of
 * a shadow" technique DECISIONS.md WD-132 already establishes as this
 * design system's preferred way to suggest depth against Weber's
 * near-black background, applied here as ambient decoration rather than
 * elevation. `aria-hidden` and `pointer-events-none` since it carries no
 * meaning and must never intercept a click meant for real content
 * beneath it. Position-agnostic by design (the same "value-agnostic
 * primitive" precedent as Grid, DECISIONS.md WD-137) — the consumer
 * supplies its own position/size via `className`; this component only
 * owns the visual treatment. The consuming element must itself provide
 * `relative overflow-hidden` (not added here, so nothing sitewide changes
 * unless a caller explicitly opts in by rendering this component).
 */
export function SectionGlow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full bg-primary/[0.06] blur-3xl",
        className,
      )}
    />
  );
}
