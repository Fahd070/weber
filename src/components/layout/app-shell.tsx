import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SkipLink } from "../utilities/skip-link";

/**
 * The persistent outer wrapper present on every route — provides
 * structural slots for persistent chrome around a per-route content slot.
 * Owns the definition and placement of its slots and the Skip Link's
 * position as the first focusable element. Does not own what fills the
 * Navigation or Footer slots — that composition happens at a higher level
 * — or page-specific content/metadata. One App Shell for the entire
 * product; no variants. docs/components/02_LAYOUT.md — App Shell.
 */
export interface AppShellProps extends HTMLAttributes<HTMLDivElement> {
  /** Fills the Navigation slot. Not owned/composed by App Shell itself — App Shell does not compose Navigation-category components. */
  navigation?: ReactNode;
  /** Fills the Footer slot. Not owned/composed by App Shell itself. */
  footer?: ReactNode;
  /** The content slot — renders a Page. */
  children: ReactNode;
}

export const AppShell = forwardRef<HTMLDivElement, AppShellProps>(
  ({ navigation, footer, children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex min-h-full flex-col", className)}
        {...props}
      >
        <SkipLink>Skip to main content</SkipLink>
        {navigation}
        <main id="main-content" className="flex-1">
          {children}
        </main>
        {footer}
      </div>
    );
  },
);

AppShell.displayName = "AppShell";
