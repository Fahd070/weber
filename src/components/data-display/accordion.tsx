"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Divider } from "@/components/layout/divider";

/**
 * Presents a list of expandable/collapsible items — the direct
 * implementation of the FAQ section's accordion-style interaction
 * (INFORMATION_ARCHITECTURE.md §15, DECISIONS.md WD-040). Owns the
 * expand/collapse interaction and state for its items, not the FAQ
 * content itself. Single-expand vs. multi-expand are the same component's
 * interaction model via `type`, not separate components (Variant
 * Philosophy, WD-057). Composes a Divider between items. Toggle controls
 * are keyboard operable and expose state via `aria-expanded`; focus never
 * moves on toggle, since the trigger is never unmounted. The panel stays
 * in the DOM (grid-rows technique) so the collapse transition can
 * actually animate, with `aria-hidden` keeping collapsed content out of
 * the accessibility tree; motion respects `prefers-reduced-motion`.
 * docs/components/06_DATA_DISPLAY.md — Accordion.
 */
export interface AccordionItem {
  id: string;
  trigger: ReactNode;
  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  /** Single-expand or multi-expand behavior. Defaults to "single". */
  type?: "single" | "multiple";
  defaultOpenIds?: string[];
  className?: string;
}

export function Accordion({
  items,
  type = "single",
  defaultOpenIds = [],
  className,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds);

  function toggle(id: string) {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id);
      if (type === "single") {
        return isOpen ? [] : [id];
      }
      return isOpen ? prev.filter((openId) => openId !== id) : [...prev, id];
    });
  }

  return (
    <div className={cn(className)}>
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id);
        const triggerId = `${item.id}-trigger`;
        const panelId = `${item.id}-panel`;

        return (
          <div key={item.id}>
            {index > 0 ? <Divider /> : null}
            <h3>
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className={cn(
                  "flex w-full items-center justify-between py-4 text-left text-body font-medium text-foreground",
                  "transition-colors duration-standard ease-in-out hover:opacity-90",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                )}
              >
                {item.trigger}
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              aria-hidden={!isOpen}
              className={cn(
                "grid overflow-hidden transition-[grid-template-rows] duration-standard ease-in-out motion-reduce:transition-none",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="pb-4 text-body text-muted-foreground">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
