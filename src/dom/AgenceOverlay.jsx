/**
 * Agence section overlay — appears as camera traverses the arch corridor.
 * Active during progress 0.55 → 0.70.
 */
export default function AgenceOverlay({ sectionProgress = 0 }) {
  const opacity =
    sectionProgress < 0.15
      ? sectionProgress / 0.15
      : sectionProgress > 0.85
        ? Math.max(0, (1 - sectionProgress) / 0.15)
        : 1;

  if (opacity <= 0) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 flex items-center"
      style={{ opacity }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
        <div className="max-w-lg">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink/40">
            L'agence
          </span>
          <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight text-ink md:text-6xl">
            Un accompagnement
            <br />
            <em className="italic">sur-mesure</em>
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/60 md:text-lg">
            <p>
              Depuis 2009, Méridienne accompagne une clientèle exigeante dans la
              recherche de biens d'exception à Toulouse et dans toute la région
              Occitanie.
            </p>
            <p>
              Notre approche repose sur trois piliers : une écoute attentive de
              vos besoins, une discrétion absolue dans chaque transaction, et une
              connaissance fine du marché local.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <span className="h-px w-8 bg-terracotta" aria-hidden="true" />
            <p className="text-sm font-medium tracking-wide text-terracotta">
              Caroline Verdier, fondatrice
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
