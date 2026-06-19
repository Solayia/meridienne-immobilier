const QUARTIERS = [
  { num: '01', name: 'Capitole', desc: 'Cœur vibrant de Toulouse, entre théâtre, terrasses et patrimoine historique.' },
  { num: '02', name: 'Saint-Étienne', desc: 'Quartier bourgeois par excellence. Hôtels particuliers, jardins discrets.' },
  { num: '03', name: 'Côte Pavée', desc: "Résidentiel et arboré. Villas d'architecte avec vue sur la Ville rose." },
  { num: '04', name: 'Les Carmes', desc: "Ruelles pavées, artisans, bistrots. L'authenticité au quotidien." },
];

/**
 * Quartiers overlay — numbered editorial list.
 * Active during progress 0.70 → 0.85.
 */
export default function QuartiersOverlay({ sectionProgress = 0 }) {
  const opacity =
    sectionProgress < 0.1
      ? sectionProgress * 10
      : sectionProgress > 0.9
        ? Math.max(0, (1 - sectionProgress) * 10)
        : 1;

  if (opacity <= 0) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 flex items-center"
      style={{ opacity }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
        <div className="max-w-xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink/40">
            Nos quartiers
          </span>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-ink md:text-6xl">
            Toulouse, <em className="italic">intime</em>
          </h2>

          <div className="mt-10 space-y-0">
            {QUARTIERS.map((q, i) => {
              const itemProgress = Math.max(
                0,
                Math.min(1, (sectionProgress - 0.15 - i * 0.15) * 5),
              );
              return (
                <div
                  key={q.num}
                  className="border-t border-sand py-5"
                  style={{
                    opacity: itemProgress,
                    transform: `translateY(${(1 - itemProgress) * 12}px)`,
                  }}
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-display text-sm text-terracotta">
                      {q.num}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl text-ink md:text-3xl">
                        {q.name}
                      </h3>
                      <p className="mt-1 max-w-sm text-sm text-ink/45">
                        {q.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="border-t border-sand" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}
