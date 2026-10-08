"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Industry } from "@/lib/industries";

export function IndustrySlider({ items }: { items: Industry[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ first: true, last: false, index: 1 });

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const update = () => {
      const cards = Array.from(element.children) as HTMLElement[];
      const origin = cards[0]?.offsetLeft ?? 0;
      const index = cards.reduce((nearest, card, i) =>
        Math.abs(card.offsetLeft - origin - element.scrollLeft) < Math.abs(cards[nearest].offsetLeft - origin - element.scrollLeft) ? i : nearest, 0);
      setPosition({ first: element.scrollLeft <= 2, last: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2, index: index + 1 });
    };
    update();
    const resize = new ResizeObserver(update);
    resize.observe(element);
    element.addEventListener("scroll", update, { passive: true });
    return () => { resize.disconnect(); element.removeEventListener("scroll", update); };
  }, [items]);

  const move = (direction: number) => {
    const element = track.current;
    if (!element) return;
    const first = element.children[0] as HTMLElement | undefined;
    const second = element.children[1] as HTMLElement | undefined;
    const step = first && second ? second.offsetLeft - first.offsetLeft : element.clientWidth;
    element.scrollBy({ left: direction * step, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };

  return (
    <div className="industry-slider">
      <div className="industry-slider-controls" aria-label="Industry slides">
        <span className="industry-slider-position" aria-live="polite">{String(position.index).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
        <button type="button" onClick={() => move(-1)} aria-label="Previous industries" disabled={position.first}>←</button>
        <button type="button" onClick={() => move(1)} aria-label="Next industries" disabled={position.last}>→</button>
      </div>
      <div className="industry-slider-track" ref={track}>
        {items.map((industry) => (
          <Link className="industry-slide" href={`/industries/${industry.slug}`} key={industry.slug}>
            <span className="industry-slide-media"><Image src={industry.image} alt={industry.imageAlt} width={1200} height={900} sizes="(max-width: 700px) 84vw, 520px" /></span>
            <div className="industry-slide-copy"><span>{industry.shortName}</span><h3>{industry.headline}</h3><p>{industry.summary}</p><b>Explore industry →</b></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
