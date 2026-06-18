import { useScrollReveal } from '../hooks/useScrollReveal';

const STATS = [
  { value: '240', suffix: '+', label: 'biens vendus' },
  { value: '98', suffix: '%', label: 'de satisfaction' },
  { value: '72', suffix: 'h', label: 'delai moyen de vente' },
];

export default function StatBreak() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="bg-ink py-28 md:py-44" aria-label="Chiffres cles">
      <div
        ref={ref}
        className={`mx-auto max-w-[1440px] px-6 md:px-12 transition-all duration-[1.2s] ease-expo-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Hero stat */}
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-baseline md:gap-10">
          <span className="font-display text-[clamp(6rem,15vw,14rem)] leading-none text-terracotta">
            15
          </span>
          <p className="max-w-xs text-xl leading-relaxed text-cream/90 md:text-2xl">
            annees d'excellence immobiliere a Toulouse
          </p>
        </div>

        {/* Secondary stats — horizontal, NOT a card grid */}
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
    </section>
  );
}
