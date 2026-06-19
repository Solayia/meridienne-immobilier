/**
 * CTA overlay — estimation form. Active during progress 0.85 → 1.0.
 * pointer-events only active when form is visible.
 */
export default function CtaOverlay({ sectionProgress = 0 }) {
  const opacity =
    sectionProgress < 0.15
      ? sectionProgress / 0.15
      : 1;

  if (opacity <= 0.01) return null;

  const isActive = sectionProgress > 0.1;

  return (
    <div
      className={`fixed inset-0 z-10 flex items-center justify-center ${
        isActive ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      style={{ opacity }}
    >
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-display text-4xl tracking-tight text-ink md:text-7xl">
          Estimez votre bien
        </h2>
        <p className="mx-auto mt-6 max-w-md text-ink/50">
          Recevez une estimation gratuite, confidentielle et personnalisée
          sous 48 heures.
        </p>

        <form
          className="mt-12 flex flex-col gap-4 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="cta-address" className="sr-only">
            Adresse du bien
          </label>
          <input
            id="cta-address"
            type="text"
            placeholder="Adresse de votre bien"
            className="flex-1 border-b border-ink/20 bg-transparent px-1 py-3 text-sm placeholder:text-ink/30 transition-colors duration-300 focus:border-terracotta focus:outline-none"
          />
          <button
            type="submit"
            className="border border-terracotta bg-terracotta px-8 py-3 text-xs font-medium uppercase tracking-[0.15em] text-cream transition-colors duration-300 ease-smooth-out hover:border-terracotta-dark hover:bg-terracotta-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
          >
            Estimer
          </button>
        </form>
      </div>
    </div>
  );
}
