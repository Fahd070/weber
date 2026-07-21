import type { HTMLAttributes, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Stack } from "@/components/layout/stack";
import { Icon } from "@/components/utilities/icon";
import { LiveRegionAnnouncer } from "@/components/utilities/live-region-announcer";

/**
 * Communicates that a content region has nothing to show — either because
 * content doesn't exist yet (Default) or because it failed to load
 * (Error, absorbing what would otherwise be a separate "Error State"
 * component). Owns explaining why a region is empty and guiding toward a
 * next action; does not own field-level or system-level messaging.
 * Composes a message, optionally an Icon, and optionally a Button for
 * next-action guidance or retry. The two variants share one composition
 * shape, differentiated by tone and semantic color role — Neutral vs.
 * Danger (DECISIONS.md WD-036). Announced to assistive technology via
 * Live Region Announcer when it appears in response to a dynamic state
 * change. docs/components/05_FEEDBACK.md — Empty State.
 */
export type EmptyStateVariant = "default" | "error";

const EMPTY_STATE_COLOR_CLASS: Record<EmptyStateVariant, string> = {
  default: "text-neutral-300", // WCAG AA fix — semantic Neutral (#71717A) fails 4.5:1 as text; next-lighter step of the same neutral scale (WD-129) passes at ~7:1
  error: "text-danger", // WD-036 Danger semantic role
};

export interface EmptyStateProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  variant?: EmptyStateVariant;
  message: string;
  icon?: LucideIcon;
  /** Optional next-action or retry guidance — a Button element. */
  action?: ReactNode;
}

export function EmptyState({
  variant = "default",
  message,
  icon,
  action,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <Stack
      gap={4}
      className={cn("items-center text-center", className)}
      {...props}
    >
      {icon ? (
        <Icon
          icon={icon}
          className={cn("size-8", EMPTY_STATE_COLOR_CLASS[variant])}
        />
      ) : null}
      <p className={cn("text-body", EMPTY_STATE_COLOR_CLASS[variant])}>
        {message}
      </p>
      {action}
      <LiveRegionAnnouncer
        message={message}
        priority={variant === "error" ? "assertive" : "polite"}
      />
    </Stack>
  );
}
