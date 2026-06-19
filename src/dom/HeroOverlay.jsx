/**
 * Hero text overlay — fixed position, fades out as user scrolls.
 */
export default function HeroOverlay({ progress = 0 }) {
  const opacity = Math.max(0, 1 - progress * 8);
  const translateY = progress * 60;

  if (opacity <= 0) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 flex items-end pb-24 md:items-center md:pb-0"
      style={{ opacity }}
    >
      <div
        className="mx-auto w-full max-w-[1440px] px-6 md:px-12"
        style={{ transform: `translateY(${translateY}px)` }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/50">
          Toulouse — Immobilier d'exception
        </p>

        <h1 className="mt-5 max-w-3xl font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.92] tracking-tight text-ink">
          L'art de vivre{' '}
          <em className="font-display italic">autrement</em>
        </h1>

        <div className="mt-10 flex items-center gap-5">
          <span className="block h-px w-16 bg-terracotta" aria-hidden="true" />
          <p className="text-sm tracking-wide text-ink/55">
            Biens d'exception &amp; accompagnement sur-mesure
          </p>
        </div>
      </div>
    </div>
  );
}
