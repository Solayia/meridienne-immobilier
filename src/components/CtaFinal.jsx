import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CtaFinal() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="estimer" className="bg-sand/40 py-28 md:py-44">
      <div
        ref={ref}
        className={`mx-auto max-w-[1440px] px-6 md:px-12 transition-all duration-[1s] ease-expo-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl tracking-tight md:text-7xl">
            Estimez votre bien
          </h2>
          <p className="mx-auto mt-6 max-w-md text-ink/50">
            Recevez une estimation gratuite, confidentielle et personnalisee
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
              className="border border-terracotta bg-terracotta px-8 py-3 text-xs font-medium uppercase tracking-[0.15em] text-cream transition-colors duration-300 ease-smooth-out hover:bg-terracotta-dark hover:border-terracotta-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-sand"
            >
              Estimer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
