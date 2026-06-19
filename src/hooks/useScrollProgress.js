import { useEffect, useState } from 'react';
import { getLenis } from '../lib/lenis';

/**
 * Returns a normalized 0→1 scroll progress for the entire page.
 * Driven by Lenis smooth scroll.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const lenis = getLenis();
    if (!lenis) return;

    const onScroll = ({ progress: p }) => setProgress(p);
    lenis.on('scroll', onScroll);

    return () => lenis.off('scroll', onScroll);
  }, []);

  return progress;
}
