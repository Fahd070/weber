import type { HTMLAttributes } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/utilities/icon";
import { LiveRegionAnnouncer } from "@/components/utilities/live-region-announcer";

/**
 * Communicates that an operation of unknown duration and layout is in
 * progress (DECISIONS.md WD-048). Owns indicating indeterminate progress
 * only — not the operation's own logic. A single ongoing state,
 * non-interactive. Respects `prefers-reduced-motion` (WD-033) — a static
 * treatment substitutes for continuous spin when requested. Announced to
 * assistive technology via Live Region Announcer when it appears.
 * docs/components/05_FEEDBACK.md — Spinner.
 */
export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  /** Text announced to assistive technology when the spinner appears. */
  label: string;
  /**
   * Overrides the icon's own size/color (default: size-5, muted-foreground
   * standalone-on-page treatment). Button's loading state (Premium Forms
   * Phase 1) passes "text-current" so the glyph matches whatever text
   * color its own variant already sets, rather than a new color.
   */
  iconClassName?: string;
}

export function Spinner({
  label,
  className,
  iconClassName,
  ...props
}: SpinnerProps) {
  return (
    <div className={cn("inline-flex", className)} {...props}>
      <Icon
        icon={Loader2}
        className={cn(
          "size-5 animate-spin text-muted-foreground motion-reduce:animate-none",
          iconClassName,
        )}
      />
      <LiveRegionAnnouncer message={label} priority="polite" />
    </div>
  );
}
