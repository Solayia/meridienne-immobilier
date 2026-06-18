import { useScrollReveal } from '../hooks/useScrollReveal';

const BIENS = [
  {
    id: 1,
    title: 'Hotel particulier Saint-Etienne',
    surface: '320 m\u00B2',
    price: '1 850 000 \u20AC',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Facade d\u2019un hotel particulier en briques roses avec jardin',
  },
  {
    id: 2,
    title: 'Penthouse Capitole',
    surface: '180 m\u00B2',
    price: '1 200 000 \u20AC',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    alt: 'Salon lumineux avec grandes baies vitrees et parquet',
  },
  {
    id: 3,
    title: 'Villa Cote Pavee',
    surface: '250 m\u00B2',
    price: '980 000 \u20AC',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80',
    alt: 'Villa moderne avec jardin paysager et piscine',
  },
  {
    id: 4,
    title: 'Loft Les Carmes',
    surface: '145 m\u00B2',
    price: '720 000 \u20AC',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
    alt: 'Loft industriel avec mezzanine et verriere',
  },
];

function BienCard({ bien, className = '' }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <article
      ref={ref}
      className={`group relative overflow-hidden ${className} transition-all duration-[1s] ease-expo-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <img
        src={bien.image}
        alt={bien.alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-expo-out group-hover:-translate-y-1"
        loading="lazy"
      />
      {/* Functional overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
        <h3 className="font-display text-lg text-cream md:text-xl">{bien.title}</h3>
        <div className="mt-2 flex items-center gap-3 text-sm text-cream/70">
          <span>{bien.surface}</span>
          <span className="h-px w-3 bg-cream/40" aria-hidden="true" />
          <span>{bien.price}</span>
        </div>
      </div>
    </article>
  );
}

export default function Biens() {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="biens" className="py-20 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`mb-12 transition-all duration-[1s] ease-expo-out ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink/40">
            Selection
          </span>
          <h2 className="mt-3 font-display text-4xl tracking-tight md:text-6xl">
            Biens <em className="italic">d'exception</em>
          </h2>
        </div>

        {/* Bento grid — asymmetric, NOT equal cards */}
        <div className="grid auto-rows-[260px] grid-cols-12 gap-3 md:auto-rows-[300px] md:gap-4">
          {/* Large — 7 cols, 2 rows */}
          <BienCard
            bien={BIENS[0]}
            className="col-span-12 row-span-2 md:col-span-7"
          />
          {/* Two small stacked — 5 cols each */}
          <BienCard
            bien={BIENS[1]}
            className="col-span-12 md:col-span-5"
          />
          <BienCard
            bien={BIENS[2]}
            className="col-span-12 md:col-span-5"
          />
          {/* Wide horizontal — full width */}
          <BienCard
            bien={BIENS[3]}
            className="col-span-12"
          />
        </div>
      </div>
    </section>
  );
}
