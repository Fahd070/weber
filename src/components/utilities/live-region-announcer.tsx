import { forwardRef } from "react";
import { VisuallyHidden, type VisuallyHiddenProps } from "./visually-hidden";

/**
 * A generic mechanism for announcing dynamic content changes to assistive
 * technology without a page navigation. Rendered locally by whichever
 * component needs to announce something (Alert, Spinner, Empty State,
 * Form, Preview Frame — none yet implemented); does not own the visual
 * message itself or decide when to announce it. Visually hidden at all
 * times, the same treatment as VisuallyHidden.
 * docs/components/09_UTILITIES.md — Live Region Announcer.
 */
export interface LiveRegionAnnouncerProps extends Omit<
  VisuallyHiddenProps,
  "children"
> {
  /** The message to announce. */
  message: string;
  /**
   * Announcement urgency — "assertive" interrupts immediately (role="alert"),
   * "polite" waits for a pause (role="status"). Defaults to "polite".
   */
  priority?: "polite" | "assertive";
}

export const LiveRegionAnnouncer = forwardRef<
  HTMLSpanElement,
  LiveRegionAnnouncerProps
>(({ message, priority = "polite", ...props }, ref) => {
  return (
    <VisuallyHidden
      ref={ref}
      role={priority === "assertive" ? "alert" : "status"}
      aria-live={priority}
      {...props}
    >
      {message}
    </VisuallyHidden>
  );
});

LiveRegionAnnouncer.displayName = "LiveRegionAnnouncer";
