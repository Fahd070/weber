import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { CSS_CARD_HOVER_CLASS } from "@/lib/hover-tokens";
import { Card } from "@/components/surfaces/card";
import { Stack } from "@/components/layout/stack";
import { AspectRatio } from "@/components/layout/aspect-ratio";
import { Tag } from "./tag";

/**
 * Presents one blog post as a scannable listing entry, linking to its
 * full Article Layout. Owns presenting a post's thumbnail, title,
 * category, and excerpt at listing scale; does not own the full article
 * content. Composes the Surfaces Card primitive, an Aspect Ratio for its
 * thumbnail, a Tag for its category label, and a Stack for internal
 * rhythm. Does not itself render a Grid — Blog Post Card is a single
 * grid item; the surrounding Blog listing decides its own column count
 * (DECISIONS.md WD-137), mirroring Service Card and Portfolio Card. The
 * whole card is the link target, per this component's own documented
 * States field, so it renders as a real link (next/link). Unlike
 * Portfolio Card's technology tags — explicitly documented as "optional,
 * secondary metadata" (`INFORMATION_ARCHITECTURE.md` §8) — this
 * component's Responsibilities field names category as co-equal content
 * alongside title and excerpt, with no equivalent "secondary" framing
 * anywhere in `INFORMATION_ARCHITECTURE.md` §9 (Blog). The category Tag
 * is therefore left in the link's normal accessible-name computation,
 * not marked `aria-hidden`. No content is hardcoded — title, thumbnail,
 * category, excerpt, and href are supplied entirely by the caller
 * (DECISIONS.md WD-010). docs/components/06_DATA_DISPLAY.md — Blog Post
 * Card.
 */
export interface BlogPostCardProps
  extends
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "title">,
    Pick<LinkProps, "href"> {
  title: ReactNode;
  thumbnailSrc: string;
  /** Must identify the post's thumbnail image, or be explicitly marked decorative (empty string) by the caller, mirroring Avatar's own alt-text contract. */
  thumbnailAlt: string;
  category: ReactNode;
  excerpt: ReactNode;
}

export function BlogPostCard({
  title,
  thumbnailSrc,
  thumbnailAlt,
  category,
  excerpt,
  href,
  className,
  ...props
}: BlogPostCardProps) {
  return (
    <Link href={href} className={cn("block", className)} {...props}>
      <Card
        elevation="resting"
        className={cn("overflow-hidden", CSS_CARD_HOVER_CLASS)}
      >
        <AspectRatio ratio={16 / 9}>
          {/* eslint-disable-next-line @next/next/no-img-element -- plain <img> is deliberate, matching Avatar/Brand Link/Portfolio Card: next/image's optimization technique is not an approved decision (PERFORMANCE_GUIDE.md §3.2). */}
          <img
            src={thumbnailSrc}
            alt={thumbnailAlt}
            className="h-full w-full object-cover"
          />
        </AspectRatio>
        <Stack gap={3} className="p-6">
          <Tag>{category}</Tag>
          <h3 className="text-h3 font-semibold text-foreground">{title}</h3>
          <p className="text-body text-muted-foreground">{excerpt}</p>
        </Stack>
      </Card>
    </Link>
  );
}
