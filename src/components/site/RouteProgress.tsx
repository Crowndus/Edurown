import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

export function RouteProgress() {
  const status = useRouterState({ select: (s) => s.status });
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (status === "pending") {
      setState("loading");
    } else if (state === "loading") {
      setState("done");
      timeoutRef.current = setTimeout(() => setState("idle"), 500);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  // Scroll to the top smoothly on each completed navigation, like a native app.
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div
      aria-hidden="true"
      className="route-progress"
      data-state={state === "idle" ? undefined : state}
      style={{ width: state === "loading" ? "72%" : state === "done" ? "100%" : "0%" }}
    />
  );
}
