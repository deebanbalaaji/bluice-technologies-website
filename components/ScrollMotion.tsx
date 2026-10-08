"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTOR = [
  "main > section",
  "main > div > section",
  "main > header + section",
  "main > header + div",
].join(",");

export function ScrollMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    let disposed = false;
    let frame = 0;
    let observer: IntersectionObserver | undefined;
    let elements: HTMLElement[] = [];

    const onTransitionEnd = (event: TransitionEvent) => {
      if (event.propertyName === "transform") (event.currentTarget as HTMLElement).classList.remove("is-revealing");
    };

    const setup = () => {
      frame = window.requestAnimationFrame(() => {
        frame = window.requestAnimationFrame(() => {
          if (disposed) return;
          const candidates = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
          elements = candidates.filter((element, index) => {
            const className = typeof element.className === "string" ? element.className : "";
            return !className.includes("hero") && candidates.indexOf(element) === index;
          });
          if (!elements.length) return;

          const variants = ["motion-rise", "motion-veil", "motion-side"] as const;
          elements.forEach((element, index) => {
            const variant = variants[index % variants.length];
            element.classList.add("scroll-reveal", variant);
            if (variant === "motion-side" && index % 2 === 0) element.classList.add("motion-side-reverse");
            element.addEventListener("transitionend", onTransitionEnd);
            if (element.getBoundingClientRect().top < window.innerHeight * 0.9) element.classList.add("is-revealed");
          });

          root.classList.add("scroll-motion-ready");
          observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              const element = entry.target as HTMLElement;
              element.classList.add("is-revealing", "is-revealed");
              observer?.unobserve(element);
            });
          }, { rootMargin: "0px 0px -40px", threshold: 0 });

          elements.filter((element) => !element.classList.contains("is-revealed")).forEach((element) => observer?.observe(element));
        });
      });
    };

    void document.fonts.ready.then(setup);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
      elements.forEach((element) => {
        element.removeEventListener("transitionend", onTransitionEnd);
        element.classList.remove("scroll-reveal", "motion-rise", "motion-side", "motion-side-reverse", "motion-veil", "is-revealing", "is-revealed");
      });
      root.classList.remove("scroll-motion-ready");
    };
  }, [pathname]);

  return null;
}
