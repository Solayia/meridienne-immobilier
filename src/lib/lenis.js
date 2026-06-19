import Lenis from 'lenis';

let lenisInstance = null;
let scrollProgress = 0;
const listeners = new Set();

export function initLenis() {
  if (lenisInstance) return lenisInstance;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  lenisInstance = new Lenis({
    duration: prefersReducedMotion ? 0 : 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: !prefersReducedMotion,
    touchMultiplier: 1.5,
  });

  lenisInstance.on('scroll', (e) => {
    scrollProgress = e.progress || 0;
    listeners.forEach((fn) => fn(scrollProgress));
  });

  function raf(time) {
    lenisInstance.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return lenisInstance;
}

export function onScrollProgress(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function getScrollProgress() {
  return scrollProgress;
}

export function getLenis() {
  return lenisInstance;
}
