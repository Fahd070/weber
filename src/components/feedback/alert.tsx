import type { HTMLAttributes, ReactNode } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Info,
  XCircle,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Cluster } from "@/components/layout/cluster";
import { Icon } from "@/components/utilities/icon";
import { LiveRegionAnnouncer } from "@/components/utilities/live-region-announcer";

/**
 * Communicates a system-level message to the visitor — the direct
 * implementation of the four approved feedback message types (DECISIONS.md
 * WD-049). Owns rendering one message type with a calm, non-alarmist tone.
 * Does not own field-level validation messaging (Error Message's job) or
 * page-level "nothing to show" states (Empty State's job). Color is never
 * the only signal distinguishing its four types — each variant also gets
 * a distinct icon. Announced to assistive technology via Live Region
 * Announcer when it appears. docs/components/05_FEEDBACK.md — Alert.
 */
export type AlertVariant = "success" | "warning" | "error" | "informational";

const ALERT_ICON: Record<AlertVariant, LucideIcon> = {
  success: CheckCircle2,
  warning: AlertTriangle,
  error: XCircle,
  informational: Info,
};

const ALERT_COLOR_CLASS: Record<AlertVariant, string> = {
  success: "border-success text-success",
  warning: "border-warning text-warning",
  error: "border-danger text-danger",
  informational: "border-information text-information",
};

export interface AlertProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  variant: AlertVariant;
  message: string;
  /** Optional dismiss action — a Button element. */
  action?: ReactNode;
}

export function Alert({
  variant,
  message,
  action,
  className,
  ...props
}: AlertProps) {
  return (
    <div
      className={cn(
        "rounded-md border bg-surface p-4",
        ALERT_COLOR_CLASS[variant],
        className,
      )}
      {...props}
    >
      <Cluster gap={3} className="items-start justify-between">
        <Cluster gap={3} className="items-start">
          <Icon
            icon={ALERT_ICON[variant]}
            className={cn("mt-0.5 shrink-0", ALERT_COLOR_CLASS[variant])}
          />
          <p className="text-body text-foreground">{message}</p>
        </Cluster>
        {action}
      </Cluster>
      <LiveRegionAnnouncer
        message={message}
        priority={variant === "error" ? "assertive" : "polite"}
      />
    </div>
  );
}
