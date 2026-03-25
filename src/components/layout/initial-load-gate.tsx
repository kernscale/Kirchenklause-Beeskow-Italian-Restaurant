"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type LoaderPhase = "loading" | "exiting" | "done";

const MAX_WARMUP_ASSETS = 140;
const IMAGE_EXT_RE = /\.(avif|bmp|gif|ico|jpe?g|png|svg|webp)(\?|$)/i;

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updatePreference);
      return () => mediaQuery.removeEventListener("change", updatePreference);
    }

    mediaQuery.addListener(updatePreference);
    return () => mediaQuery.removeListener(updatePreference);
  }, []);

  return prefersReducedMotion;
}

function parseSrcSet(srcset: string) {
  return srcset
    .split(",")
    .map((entry) => entry.trim().split(/\s+/)[0])
    .filter(Boolean);
}

function collectSameOriginAssetUrls() {
  const urls = new Set<string>();
  const currentOrigin = window.location.origin;
  const currentPage = new URL(window.location.href);
  currentPage.hash = "";

  const addUrl = (rawUrl: string | null | undefined) => {
    if (!rawUrl) return;
    if (rawUrl.startsWith("data:") || rawUrl.startsWith("blob:")) return;

    try {
      const parsed = new URL(rawUrl, window.location.href);
      if (parsed.origin !== currentOrigin) return;
      parsed.hash = "";
      if (parsed.href === currentPage.href) return;
      urls.add(parsed.href);
    } catch {
      // ignore malformed URLs from srcset/attrs
    }
  };

  document
    .querySelectorAll("img[src], source[src], script[src], link[rel='stylesheet'][href], link[rel='preload'][href], video[poster]")
    .forEach((el) => {
      if (el instanceof HTMLImageElement) addUrl(el.currentSrc || el.getAttribute("src"));
      if (el instanceof HTMLSourceElement) addUrl(el.getAttribute("src"));
      if (el instanceof HTMLScriptElement) addUrl(el.getAttribute("src"));
      if (el instanceof HTMLLinkElement) addUrl(el.getAttribute("href"));
      if (el instanceof HTMLVideoElement) addUrl(el.getAttribute("poster"));
    });

  document.querySelectorAll("img[srcset], source[srcset]").forEach((el) => {
    const srcset = el.getAttribute("srcset");
    if (!srcset) return;
    parseSrcSet(srcset).forEach(addUrl);
  });

  return Array.from(urls).slice(0, MAX_WARMUP_ASSETS);
}

export function InitialLoadGate({ children }: { children: ReactNode }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [phase, setPhase] = useState<LoaderPhase>("loading");
  const [displayProgress, setDisplayProgress] = useState(0);
  const progressRef = useRef(0);

  useEffect(() => {
    if (phase !== "loading") return;

    const MIN_DURATION = prefersReducedMotion ? 520 : 1050;
    const SOFT_DURATION = prefersReducedMotion ? 1400 : 3600;
    const HARD_TIMEOUT = 9000;
    const startedAt = performance.now();
    let lastFrame = startedAt;
    let raf = 0;
    let hardTimeout = 0;
    let cancelled = false;
    let transitioning = false;
    let onDomReady: (() => void) | null = null;
    let onWindowLoad: (() => void) | null = null;
    const controllers: AbortController[] = [];

    const completion = {
      dom: false,
      fonts: false,
      load: false,
      min: false,
      assetsDone: false,
    };

    const assets = {
      total: 0,
      done: 0,
      started: false,
    };

    const weights = {
      dom: 12,
      fonts: 13,
      load: 20,
      min: 15,
      assets: 40,
    } as const;

    const mark = (task: keyof typeof completion) => {
      completion[task] = true;
    };

    const assetRatio = () => {
      if (!assets.started) return 0;
      if (assets.total === 0) return 1;
      return Math.min(1, assets.done / assets.total);
    };

    const completeAsset = () => {
      assets.done += 1;
      if (assets.done >= assets.total) mark("assetsDone");
    };

    const preloadAsset = (url: string) => {
      let completed = false;
      const finish = () => {
        if (completed) return;
        completed = true;
        completeAsset();
      };

      if (IMAGE_EXT_RE.test(url)) {
        const img = new Image();
        img.decoding = "async";
        img.onload = finish;
        img.onerror = finish;
        img.src = url;
        if (img.complete) finish();
        return;
      }

      const controller = new AbortController();
      controllers.push(controller);
      fetch(url, {
        method: "GET",
        cache: "force-cache",
        credentials: "same-origin",
        signal: controller.signal,
      })
        .catch(() => undefined)
        .finally(finish);
    };

    if (document.readyState === "complete" || document.readyState === "interactive") {
      mark("dom");
    } else {
      onDomReady = () => {
        mark("dom");
        if (onDomReady) {
          window.removeEventListener("DOMContentLoaded", onDomReady);
          onDomReady = null;
        }
      };
      window.addEventListener("DOMContentLoaded", onDomReady);
    }

    if (document.readyState === "complete") {
      mark("load");
    } else {
      onWindowLoad = () => {
        mark("load");
        if (onWindowLoad) {
          window.removeEventListener("load", onWindowLoad);
          onWindowLoad = null;
        }
      };
      window.addEventListener("load", onWindowLoad);
    }

    if ("fonts" in document && document.fonts?.ready) {
      document.fonts.ready
        .then(() => mark("fonts"))
        .catch(() => mark("fonts"));
    } else {
      mark("fonts");
    }

    const warmupUrls = collectSameOriginAssetUrls();
    assets.started = true;
    assets.total = warmupUrls.length;
    if (assets.total === 0) {
      mark("assetsDone");
    } else {
      warmupUrls.forEach(preloadAsset);
    }

    const computeRealProgress = () => {
      let value = 0;
      if (completion.dom) value += weights.dom;
      if (completion.fonts) value += weights.fonts;
      if (completion.load) value += weights.load;
      if (completion.min) value += weights.min;
      value += weights.assets * assetRatio();
      return value;
    };

    const isFullyReady = () =>
      completion.dom &&
      completion.fonts &&
      completion.load &&
      completion.min &&
      completion.assetsDone;

    const renderProgress = () => {
      if (cancelled) return;

      const now = performance.now();
      const elapsed = now - startedAt;
      const deltaSeconds = Math.min((now - lastFrame) / 1000, 0.05);
      lastFrame = now;

      if (elapsed >= MIN_DURATION) mark("min");

      const syntheticProgress = Math.min(92, (elapsed / SOFT_DURATION) * 92);
      const realProgress = computeRealProgress();
      const ready = isFullyReady();
      const target = ready ? 100 : Math.max(realProgress, syntheticProgress);

      const current = progressRef.current;
      const pull = 1 - Math.exp(-deltaSeconds * (ready ? 11 : 5.2));
      const easedTarget = current + (target - current) * pull;
      const maxRate = ready
        ? prefersReducedMotion
          ? 180
          : 66
        : prefersReducedMotion
          ? 110
          : 18;
      const maxStep = maxRate * deltaSeconds;
      let next = current + Math.min(Math.max(0, easedTarget - current), maxStep);

      if (!ready) next = Math.min(next, 96);
      if (ready && 100 - next < 0.08) next = 100;
      next = Math.min(100, Math.max(current, next));

      progressRef.current = next;
      setDisplayProgress(next);

      if (!transitioning && ready && next >= 99.85) {
        transitioning = true;
        setPhase("exiting");
        return;
      }

      raf = window.requestAnimationFrame(renderProgress);
    };

    hardTimeout = window.setTimeout(() => {
      completion.dom = true;
      completion.fonts = true;
      completion.load = true;
      completion.min = true;
      completion.assetsDone = true;
      assets.done = assets.total;
    }, HARD_TIMEOUT);

    raf = window.requestAnimationFrame(renderProgress);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(raf);
      window.clearTimeout(hardTimeout);
      controllers.forEach((controller) => controller.abort());
      if (onDomReady) window.removeEventListener("DOMContentLoaded", onDomReady);
      if (onWindowLoad) window.removeEventListener("load", onWindowLoad);
    };
  }, [phase, prefersReducedMotion]);

  useEffect(() => {
    if (phase !== "exiting") return;
    const timer = window.setTimeout(
      () => setPhase("done"),
      prefersReducedMotion ? 180 : 320,
    );
    return () => window.clearTimeout(timer);
  }, [phase, prefersReducedMotion]);

  const done = phase === "done";
  const contentVisible = phase !== "loading";

  return (
    <>
      <div className="site-preload-root" data-phase={phase} aria-hidden={done}>
        <div className="site-preload-line-track" aria-hidden="true">
          <div
            className="site-preload-line-fill"
            style={{ transform: `scaleY(${displayProgress / 100})` }}
          />
        </div>
      </div>
      <div
        className="site-preload-content"
        data-visible={done}
        style={{
          opacity: contentVisible ? 1 : 0,
          transform: contentVisible ? "translateY(0)" : "translateY(6px)",
          pointerEvents: done ? "auto" : "none",
        }}
      >
        {children}
      </div>
    </>
  );
}
