'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function loadScript(src: string): Promise<void> {
  return new Promise((resolve) => {
    if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
    const el = document.createElement('script');
    el.src = src;
    el.async = false;
    el.onload = () => resolve();
    el.onerror = () => resolve();
    document.body.appendChild(el);
  });
}

function loadGroup(srcs: string[]): Promise<void> {
  return Promise.all(srcs.map(loadScript)).then(() => undefined);
}

// Dismiss the preloader if main.js missed the window.load event.
// This happens when window.load fires before Phase 4 scripts are
// registered — the $(window).on("load") handler never runs and the
// preloader div blocks the page permanently.
function safelyDismissPreloader() {
  const el = document.querySelector('.preloader') as HTMLElement | null;
  if (!el) return;
  // main.js already handled it (set display:none / zIndex:-1)
  if (el.style.display === 'none' || el.style.zIndex === '-1') return;
  const computed = window.getComputedStyle(el);
  if (computed.display === 'none') return;
  // Force-dismiss with a quick fade
  el.style.transition = 'opacity 0.4s ease';
  el.style.opacity = '0';
  setTimeout(() => { el.style.display = 'none'; el.style.zIndex = '-1'; }, 420);
}

export default function ScriptLoader() {
  const pathname = usePathname();

  // Reset GSAP ScrollSmoother scroll position on every route change.
  useEffect(() => {
    try {
      const smoother = (window as any).ScrollSmoother?.get?.();
      if (smoother) smoother.scrollTop(0);
      else window.scrollTo(0, 0);
    } catch {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  // Load scripts in parallel dependency groups instead of one-by-one.
  // Old sequential approach: ~2.5 MB downloaded serially.
  // New approach: independent scripts load in parallel; each phase only
  // waits for the specific scripts its members actually depend on.
  useEffect(() => {
    async function boot() {
      // Phase 1 — independent foundations (parallel)
      await loadGroup([
        '/assets/js/jquery.min.js',
        '/assets/js/gsap.min.js',
        '/assets/js/chroma.min.js',
        '/assets/js/swiper-bundle.min.js',
        '/assets/js/wow.min.js',
        '/assets/js/split-type.min.js',
      ]);

      // Phase 2 — jQuery plugins + GSAP plugins (parallel, need Phase 1)
      await loadGroup([
        '/assets/js/viewport.jquery.js',
        '/assets/js/bootstrap.bundle.min.js',
        '/assets/js/jquery.nice-select.min.js',
        '/assets/js/jquery.waypoints.js',
        '/assets/js/jquery.meanmenu.min.js',
        '/assets/js/parallaxie.js',
        '/assets/js/jquery.magnific-popup.min.js',
        '/assets/js/ajax-mail.js',
        '/assets/js/slick.js',
        '/assets/js/ScrollTrigger.min.js',
        '/assets/js/ScrollToPlugin.min.js',
        '/assets/js/SplitText.min.js',
        '/assets/js/TextPlugin.js',
      ]);

      // Phase 3 — needs ScrollTrigger + waypoints + slick (parallel)
      await loadGroup([
        '/assets/js/ScrollSmoother.min.js',
        '/assets/js/jquery.counterup.min.js',
        '/assets/js/slider-active.js',
      ]);

      // Phase 4 — main.js needs everything above
      await loadScript('/assets/js/main.js');

      // Phase 4b — scroll-linked experience slider (needs Swiper from main.js)
      await loadScript('/assets/js/scroll-experience.js');

      // Failsafe: if window.load already fired before main.js registered
      // its $(window).on("load") handler, the preloader never got dismissed.
      // Fire immediately — main.js has had its chance by this point.
      safelyDismissPreloader();

      // Phase 5 — three.js (1.8 MB) and webgl.js loaded last, non-blocking.
      // Does not delay any user-visible content.
      loadScript('/assets/js/three.js').then(() =>
        loadScript('/assets/js/webgl.js')
      );
    }

    // Hard cap: preloader must be gone within 2 seconds no matter what.
    const hardCap = setTimeout(safelyDismissPreloader, 2000);
    boot().finally(() => clearTimeout(hardCap));
  }, []);

  return null;
}
