const BIENS_DATA = [
  { title: 'Hôtel particulier Saint-Étienne', surface: '320 m²', price: '1 850 000 €' },
  { title: 'Penthouse Capitole', surface: '180 m²', price: '1 200 000 €' },
  { title: 'Villa Côte Pavée', surface: '250 m²', price: '980 000 €' },
  { title: 'Loft Les Carmes', surface: '145 m²', price: '720 000 €' },
];

/**
 * Biens section overlay — property info appears as camera glides
 * through the gallery (progress 0.15 → 0.40).
 */
export default function BiensOverlay({ sectionProgress = 0 }) {
  // Show section header during first 30% of section
  const headerOpacity = sectionProgress < 0.1
    ? sectionProgress * 10
    : sectionProgress > 0.3
      ? Math.max(0, 1 - (sectionProgress - 0.3) * 5)
      : 1;

  // Each bien appears in its own 25% slice of the section
  const getBienOpacity = (index) => {
    const sliceStart = 0.15 + index * 0.2;
    const sliceEnd = sliceStart + 0.2;
    if (sectionProgress < sliceStart) return 0;
    if (sectionProgress > sliceEnd) return Math.max(0, 1 - (sectionProgress - sliceEnd) * 5);
    const t = (sectionProgress - sliceStart) / (sliceEnd - sliceStart);
    return Math.min(1, t * 4);
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-10">
      <div className="mx-auto h-full max-w-[1440px] px-6 md:px-12">
        {/* Section header */}
        <div
          className="absolute left-6 top-28 md:left-12"
          style={{ opacity: headerOpacity }}
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink/40">
            Sélection
          </span>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-ink md:text-6xl">
            Biens <em className="italic">d'exception</em>
          </h2>
        </div>

        {/* Property cards — bottom left */}
        {BIENS_DATA.map((bien, i) => {
          const opacity = getBienOpacity(i);
          if (opacity <= 0) return null;

          return (
            <div
              key={i}
              className="absolute bottom-20 left-6 md:bottom-28 md:left-12"
              style={{ opacity }}
            >
              <div className="bg-ink/60 px-6 py-4 backdrop-blur-sm">
                <h3 className="font-display text-lg text-cream md:text-xl">
                  {bien.title}
                </h3>
                <div className="mt-2 flex items-center gap-3 text-sm text-cream/70">
                  <span>{bien.surface}</span>
                  <span className="h-px w-3 bg-cream/40" aria-hidden="true" />
                  <span>{bien.price}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
