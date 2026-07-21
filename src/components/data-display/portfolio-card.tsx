import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { CSS_CARD_HOVER_CLASS } from "@/lib/hover-tokens";
import { Card } from "@/components/surfaces/card";
import { Stack } from "@/components/layout/stack";
import { AspectRatio } from "@/components/layout/aspect-ratio";
import { Tag } from "./tag";

/**
 * Presents one portfolio project as a scannable grid entry, linking to
 * its full Case Study Layout. Owns presenting a project's thumbnail,
 * name, and technology tags at listing scale; does not own the full case
 * study content. Composes the Surfaces Card primitive, an Aspect Ratio
 * for its thumbnail, and one or more Tag instances for its technologies.
 * Does not itself render a Grid — Portfolio Card is a single grid item;
 * the surrounding listing (Home Portfolio section or Portfolio page)
 * decides its own column count (DECISIONS.md WD-137), mirroring Service
 * Card's treatment. The whole card is the link target, per this
 * component's own documented States field, so it renders as a real link
 * (next/link) rather than a native `<button>` or a link nested inside a
 * non-interactive card. Technology tags are marked `aria-hidden` — the
 * Information Architecture explicitly frames them as "optional, secondary
 * metadata... never the primary way a piece is understood"
 * (`INFORMATION_ARCHITECTURE.md` §8) — so the link's accessible name
 * resolves to the project name, not a mix of the name and tag labels, per
 * this component's own Accessibility requirement ("must have an
 * accessible name matching the project name, not a generic 'View
 * project'"). No content is hardcoded — name, thumbnail, technologies,
 * and href are supplied entirely by the caller (DECISIONS.md WD-010).
 * docs/components/06_DATA_DISPLAY.md — Portfolio Card.
 */
export interface PortfolioCardProps
  extends
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    Pick<LinkProps, "href"> {
  name: ReactNode;
  thumbnailSrc: string;
  /** Must identify the project image, or be explicitly marked decorative (empty string) by the caller, mirroring Avatar's own alt-text contract. */
  thumbnailAlt: string;
  technologies: ReactNode[];
}

export function PortfolioCard({
  name,
  thumbnailSrc,
  thumbnailAlt,
  technologies,
  href,
  className,
  ...props
}: PortfolioCardProps) {
  return (
    <Link href={href} className={cn("block", className)} {...props}>
      <Card
        elevation="resting"
        className={cn("overflow-hidden", CSS_CARD_HOVER_CLASS)}
      >
        <AspectRatio ratio={16 / 9}>
          {/* eslint-disable-next-line @next/next/no-img-element -- plain <img> is deliberate, matching Avatar/Brand Link: next/image's optimization technique is not an approved decision (PERFORMANCE_GUIDE.md §3.2). */}
          <img
            src={thumbnailSrc}
            alt={thumbnailAlt}
            className="h-full w-full object-cover"
          />
        </AspectRatio>
        <Stack gap={3} className="p-6">
          <h3 className="text-h3 font-semibold text-foreground">{name}</h3>
          <div className="flex flex-wrap gap-2" aria-hidden="true">
            {technologies.map((technology, index) => (
              <Tag key={index}>{technology}</Tag>
            ))}
          </div>
        </Stack>
      </Card>
    </Link>
  );
}
