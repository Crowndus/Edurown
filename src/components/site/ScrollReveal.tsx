import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Applies a premium, consistent scroll-reveal treatment across every route
 * with zero per-page markup: it walks the top-level <section> elements
 * inside <main>, fades/lifts each one in as it enters the viewport, and
 * staggers any grid or list children inside it for a cascading effect.
 *
 * Re-runs on every route change so newly rendered pages pick it up too.
 */
export function ScrollReveal() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const main = document.querySelector("main");
    if (!main) return;

    // Skip the very first section on each page: it's the above-the-fold
    // hero, already visible on load and handled by its own load-in
    // animation, so it shouldn't also wait on an intersection observer.
    const sections = Array.from(main.querySelectorAll(":scope > section")).slice(1);
    if (sections.length === 0) return;

    if (reduceMotion) {
      sections.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    sections.forEach((section) => {
      section.classList.add("reveal-section");

      // Stagger direct children of grids/lists inside this section so cards
      // cascade in together rather than the whole block popping at once.
      const groups = section.querySelectorAll(":scope .grid, :scope ul");
      groups.forEach((group) => {
        Array.from(group.children).forEach((child, i) => {
          if (child instanceof HTMLElement && child.children.length >= 0) {
            child.classList.add("reveal-item");
            child.style.setProperty("--reveal-delay", `${Math.min(i, 7) * 70}ms`);
          }
        });
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );

    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
