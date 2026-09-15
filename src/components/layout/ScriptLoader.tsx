'use client';

import { useEffect } from 'react';

const SCRIPTS = [
  '/assets/js/jquery.min.js',
  '/assets/js/viewport.jquery.js',
  '/assets/js/bootstrap.bundle.min.js',
  '/assets/js/gsap.min.js',
  '/assets/js/ScrollTrigger.min.js',
  '/assets/js/ScrollSmoother.min.js',
  '/assets/js/ScrollToPlugin.min.js',
  '/assets/js/SplitText.min.js',
  '/assets/js/TextPlugin.js',
  '/assets/js/chroma.min.js',
  '/assets/js/jquery.nice-select.min.js',
  '/assets/js/jquery.waypoints.js',
  '/assets/js/jquery.counterup.min.js',
  '/assets/js/swiper-bundle.min.js',
  '/assets/js/jquery.meanmenu.min.js',
  '/assets/js/parallaxie.js',
  '/assets/js/jquery.magnific-popup.min.js',
  '/assets/js/wow.min.js',
  '/assets/js/three.js',
  '/assets/js/webgl.js',
  '/assets/js/slick.js',
  '/assets/js/split-type.min.js',
  '/assets/js/slider-active.js',
  '/assets/js/ajax-mail.js',
  '/assets/js/main.js',
];

export default function ScriptLoader() {
  useEffect(() => {
    let cancelled = false;

    async function loadInOrder() {
      for (const src of SCRIPTS) {
        if (cancelled) return;
        if (document.querySelector(`script[src="${src}"]`)) continue;
        await new Promise<void>((resolve) => {
          const el = document.createElement('script');
          el.src = src;
          el.async = false;
          el.onload = () => resolve();
          el.onerror = () => resolve();
          document.body.appendChild(el);
        });
      }
    }

    loadInOrder();
    return () => { cancelled = true; };
  }, []);

  return null;
}
