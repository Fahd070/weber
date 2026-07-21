import { forwardRef, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * A small, circular representation of a person — typically a photo — for
 * attribution contexts. Owns rendering a single person's image at a fixed
 * small size only; does not own surrounding attribution text (Testimonial
 * Card's job). Shape uses `radius.full` — DESIGN_TOKENS.md §5 names
 * "avatars" directly as that token's use case (DECISIONS.md WD-031). No
 * image is bundled or hardcoded; `src`/`alt` are supplied by the caller.
 * docs/components/06_DATA_DISPLAY.md — Avatar.
 */
export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Must identify the person (or be explicitly marked decorative by the caller if redundant with adjacent visible text). */
  alt: string;
}

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  ({ className, alt, ...props }, ref) => {
    return (
      /* Plain <img> is deliberate: next/image's optimization technique
         (format, quality, loader) is not an approved decision
         (PERFORMANCE_GUIDE.md §3.2), same reasoning as Brand Link. */
      // eslint-disable-next-line @next/next/no-img-element
      <img
        ref={ref}
        alt={alt}
        className={cn("size-10 rounded-full object-cover", className)}
        {...props}
      />
    );
  },
);

Avatar.displayName = "Avatar";
