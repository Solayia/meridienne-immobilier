import { useEffect, useRef, useState } from 'react';

/**
 * Triggers a one-shot visibility flag when the element enters the viewport.
 * Respects prefers-reduced-motion (always visible, no animation).
 */
export function useScrollReveal({ threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}
