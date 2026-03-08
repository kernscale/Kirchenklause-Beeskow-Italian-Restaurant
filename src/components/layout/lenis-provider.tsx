"use client";

import Lenis from "lenis";
import { useEffect } from "react";

import { siteConfig } from "@/config/site";
import { setLenisInstance } from "@/lib/lenis-store";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!siteConfig.features.smoothScroll) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.9,
    });
    setLenisInstance(lenis);

    let frameId = 0;

    const frame = (time: number) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(frame);
    };

    frameId = window.requestAnimationFrame(frame);

    return () => {
      window.cancelAnimationFrame(frameId);
      lenis.destroy();
      setLenisInstance(null);
    };
  }, []);

  return <>{children}</>;
}
