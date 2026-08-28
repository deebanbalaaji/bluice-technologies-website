"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import type { Industry } from "@/lib/industries";

export function IndustrySlider({ items }: { items: Industry[] }) {
  const track = useRef<HTMLDivElement>(null);

  const move = (direction: number) => {
    track.current?.scrollBy({ left: direction * Math.min(560, window.innerWidth * 0.78), behavior: "smooth" });
  };

  return (
    <div className="industry-slider">
      <div className="industry-slider-controls" aria-label="Industry slides">
        <button type="button" onClick={() => move(-1)} aria-label="Previous industries">←</button>
        <button type="button" onClick={() => move(1)} aria-label="Next industries">→</button>
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
