const STATS = [
  { value: '240', suffix: '+', label: 'biens vendus' },
  { value: '98', suffix: '%', label: 'de satisfaction' },
  { value: '72', suffix: 'h', label: 'délai moyen de vente' },
];

/**
 * Stats overlay — appears over the dark 3D stats room.
 * Active during progress 0.40 → 0.55.
 */
export default function StatsOverlay({ sectionProgress = 0 }) {
  const opacity =
    sectionProgress < 0.1
      ? sectionProgress * 10
      : sectionProgress > 0.85
        ? Math.max(0, (1 - sectionProgress) * 6.6)
        : 1;

  if (opacity <= 0) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 flex items-center"
      style={{ opacity }}
      aria-label="Chiffres clés"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-baseline md:gap-10">
          <p className="max-w-xs text-xl leading-relaxed text-cream/90 md:text-2xl">
            années d'excellence immobilière à Toulouse
          </p>
        </div>

        <div className="mt-16 flex flex-wrap gap-16 md:mt-24 md:gap-24">
          {STATS.map((s) => (
            <div key={s.label}>
              <span className="font-display text-4xl text-cream md:text-5xl">
                {s.value}
                <span className="text-terracotta">{s.suffix}</span>
              </span>
              <p className="mt-2 text-sm text-cream/40">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
