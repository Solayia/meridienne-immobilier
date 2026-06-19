import { useMemo } from 'react';

/**
 * Given a global scroll progress (0→1), returns a local 0→1
 * progress for a specific section defined by [start, end].
 * Clamps to [0, 1].
 */
export function useSectionProgress(globalProgress, start, end) {
  return useMemo(() => {
    if (globalProgress <= start) return 0;
    if (globalProgress >= end) return 1;
    return (globalProgress - start) / (end - start);
  }, [globalProgress, start, end]);
}
