/**
 * Welcome overlay — agency name, fades as you enter the showroom.
 */
export default function WelcomeOverlay({ progress = 0 }) {
  const opacity = Math.max(0, 1 - progress * 2.5);

  if (opacity <= 0) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 flex items-center justify-center"
      style={{ opacity }}
    >
      <div className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-ink/40">
          Toulouse — Immobilier d'exception
        </p>
        <h1 className="mt-4 font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.92] tracking-tight text-ink">
          Méridienne
        </h1>
        <div className="mx-auto mt-6 flex items-center justify-center gap-4">
          <span className="block h-px w-12 bg-terracotta" aria-hidden="true" />
          <p className="text-sm tracking-wide text-ink/50">
            Entrez dans notre showroom
          </p>
          <span className="block h-px w-12 bg-terracotta" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
