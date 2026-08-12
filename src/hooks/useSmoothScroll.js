import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Initializes Lenis once for app-wide smooth, inertia-based scrolling.
 * If Lenis fails to init for any reason, native scrolling is left intact.
 */
export function useSmoothScroll() {
  useEffect(() => {
    let lenis;
    let rafId;

    try {
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
      });

      const raf = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);

      window.__lenis = lenis;
    } catch (err) {
      // Fall back silently to native scroll
      console.warn('Lenis init failed, using native scroll:', err);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) {
        lenis.destroy();
        delete window.__lenis;
      }
    };
  }, []);
}

export function scrollTo(target) {
  const lenis = window.__lenis;
  if (lenis) {
    lenis.scrollTo(target, { offset: -40, duration: 1.4 });
    return;
  }
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
