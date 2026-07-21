"use client";

import {
  createContext,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

/**
 * A ref, not reactive state — mutating it never triggers a re-render on
 * its own, so this Provider itself never re-renders. `useSkipRepeatEntrance`
 * (below) is what turns a read of this ref into the correctly-timed,
 * pre-paint corrected value each consuming component needs.
 *
 * No `sessionStorage`/`localStorage` — an in-memory ref already provides
 * exactly the needed scope ("persists across client-side navigation
 * within this tab, resets on a real page load") for free, since this
 * Provider lives in the root layout, which does not remount across
 * navigations. Reaching for Web Storage would add serialization and
 * private-browsing/quota edge cases to solve a problem plain React state
 * already solves.
 *
 * Final Provider Audit (Project Owner requested): also evaluated
 * replacing this Context+ref entirely with a bare module-scope mutable
 * variable, read directly during render instead of through
 * `useContext`. That would be marginally smaller, and — correcting an
 * over-cautious claim in this file's original version — it would *not*
 * actually risk leaking state across different users' server requests:
 * the only place this flag is ever written is inside a `useLayoutEffect`
 * in `useSkipRepeatEntrance`, and effects never execute during React's
 * server-side rendering (there is no "commit to a real DOM" phase for
 * them to run after) — this holds for every Next.js rendering mode,
 * and doubly so here since every Weber route is statically prerendered
 * at build time, not rendered per-request at all. So the earlier concern
 * about module state was not a real safety issue. It was kept as
 * Context regardless, because Context is what makes this value visible
 * in React DevTools and independently resettable per test render, and
 * because it's the same shared-client-value pattern this codebase
 * already established with `IntlProvider` — a bare module singleton
 * would be a second, different pattern for the same category of need,
 * for a byte-count difference too small to measure in this codebase's
 * actual bundle output.
 */
const NavigationMotionContext = createContext<{ current: boolean } | null>(
  null,
);

/**
 * Tracks, for the lifetime of the current document (i.e., until a full
 * page reload), whether an entrance animation has already played this
 * session (Navigation Performance Optimization, Project Owner approved —
 * Architecture Report, "Recommended architecture"). Mounted once in the
 * root layout wrapping `{children}`; because the root layout does not
 * remount across client-side navigations (confirmed: Header already
 * relies on this same property), this Provider's own ref naturally
 * persists across every navigation in the session without any per-route
 * bookkeeping. A hard refresh creates a fresh document and a fresh ref,
 * so the full entrance sequence correctly plays again — expected,
 * unsurprising behavior, not a regression.
 */
export function NavigationMotionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const hasPlayedRef = useRef(false);
  return (
    <NavigationMotionContext.Provider value={hasPlayedRef}>
      {children}
    </NavigationMotionContext.Provider>
  );
}

/**
 * Whether an earlier page's entrance animation has already played this
 * session. Always starts `false` on a component's own first render — a
 * ref's `.current` may only be read inside an effect or event handler,
 * never during render itself (`react-hooks/refs`), so there is no safe
 * way to know the real answer synchronously on that first render. The
 * correction, if needed, happens in a `useLayoutEffect`: if the shared
 * ref is already `true` (an earlier page already played its entrance
 * this session), this hook flips its own returned value to `true`
 * *before the browser paints* — `useLayoutEffect` runs synchronously
 * after commit but before paint, so the corrected value is the only one
 * ever visible to the user. If the ref was not yet `true`, this call is
 * the one that claims it for whichever page mounts next, and this
 * instance's own value correctly stays `false` (it's the real first
 * play). Both `Hero` and `ScrollReveal` (DECISIONS.md — Navigation
 * Performance Optimization) render a structurally different, non-Motion
 * element for the `true` case rather than merely changing a `motion.*`
 * element's props after its own first commit — the safe way to apply a
 * value that can change between a component's first and second render,
 * since Motion's `initial` prop is only ever read once and simply
 * changing `animate`/`whileInView` targets on an already-mounted
 * instance is not guaranteed to resolve cleanly.
 */
export function useSkipRepeatEntrance(): boolean {
  const ref = useContext(NavigationMotionContext);
  const [alreadyPlayed, setAlreadyPlayed] = useState(false);

  useLayoutEffect(() => {
    if (!ref) {
      return;
    }
    if (ref.current) {
      setAlreadyPlayed(true);
    } else {
      ref.current = true;
    }
  }, [ref]);

  return alreadyPlayed;
}
