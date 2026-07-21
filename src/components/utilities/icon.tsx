import { forwardRef, type SVGAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Renders a single icon glyph consistently, drawing from the approved icon
 * family (Lucide React, DECISIONS.md WD-019) at the conceptual level only
 * — no specific icon is fixed by this component. Never the sole carrier of
 * meaning: pair with VisuallyHidden when used icon-only, or place beside a
 * visible label otherwise. Color inherits from the surrounding text color
 * (currentColor) rather than an independent prop, so it automatically
 * follows whatever token-driven color class the consuming context already
 * applies. docs/components/09_UTILITIES.md — Icon.
 */
export interface IconProps extends SVGAttributes<SVGSVGElement> {
  /** Any Lucide icon component, e.g. `icon={ArrowRight}`. */
  icon: LucideIcon;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ icon: IconComponent, className, ...props }, ref) => {
    return (
      <IconComponent
        ref={ref}
        aria-hidden="true"
        className={cn("size-4", className)}
        {...props}
      />
    );
  },
);

Icon.displayName = "Icon";
