/**
 * Native drag/animation event handlers whose signatures Motion repurposes
 * for its own gesture/animation lifecycle API — omitted from generic
 * `HTMLAttributes`/`AnchorHTMLAttributes`/`ButtonHTMLAttributes` spreads
 * onto `motion.*` components so they don't collide with Motion's own prop
 * types. Shared by every component that wraps a native element in Motion
 * (Button, Motion CTA Link, Header) rather than redeclaring the same union
 * in each file (Final Cleanup Phase, Project Owner approved).
 */
export type MotionReservedHandlers =
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onDragEnter"
  | "onDragExit"
  | "onDragLeave"
  | "onDragOver"
  | "onDrop"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration"
  | "onTransitionEnd";
