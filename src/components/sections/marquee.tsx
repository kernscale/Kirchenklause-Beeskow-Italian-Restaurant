"use client";

import { homeContent } from "@/content/home";

export function MarqueeSection() {
  const items = [...homeContent.highlights, ...homeContent.highlights, ...homeContent.highlights, ...homeContent.highlights];

  return (
    <section className="marquee-shell py-5">
      <div className="marquee-track">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-4 px-8 text-sm text-foreground/50">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
            <span className="whitespace-nowrap font-display text-base">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
