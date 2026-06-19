import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PanoViewer from './PanoViewer';

const BIENS = [
  {
    id: 1,
    title: 'Hôtel particulier Saint-Étienne',
    surface: '320 m²',
    price: '1 850 000 €',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    pano: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&w=4096&q=80',
    alt: 'Façade d\u2019un hôtel particulier en briques roses avec jardin',
  },
  {
    id: 2,
    title: 'Penthouse Capitole',
    surface: '180 m²',
    price: '1 200 000 €',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    pano: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&w=4096&q=80',
    alt: 'Salon lumineux avec grandes baies vitrées et parquet',
  },
  {
    id: 3,
    title: 'Villa Côte Pavée',
    surface: '250 m²',
    price: '980 000 €',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80',
    pano: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&w=4096&q=80',
    alt: 'Villa moderne avec jardin paysager et piscine',
  },
  {
    id: 4,
    title: 'Loft Les Carmes',
    surface: '145 m²',
    price: '720 000 €',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
    pano: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&w=4096&q=80',
    alt: 'Loft industriel avec mezzanine et verrière',
  },
];

/** Minimal 360° icon */
function Icon360() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="7" />
      <ellipse cx="9" cy="9" rx="3" ry="7" />
      <line x1="2" y1="9" x2="16" y2="9" />
      {/* Rotation arrow */}
      <path d="M14 4.5 L16 3 L15.5 5.5" />
    </svg>
  );
}

function BienCard({ bien, className = '', onViewPano }) {
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
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="font-display text-lg text-cream md:text-xl">{bien.title}</h3>
            <div className="mt-2 flex items-center gap-3 text-sm text-cream/70">
              <span>{bien.surface}</span>
              <span className="h-px w-3 bg-cream/40" aria-hidden="true" />
              <span>{bien.price}</span>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewPano(bien);
            }}
            className="flex shrink-0 items-center gap-1.5 border border-cream/25 bg-ink/30 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-cream/80 backdrop-blur-sm transition-all duration-300 ease-expo-out hover:border-terracotta/60 hover:bg-terracotta/20 hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
            aria-label={`Visite virtuelle 360° — ${bien.title}`}
          >
            <Icon360 />
            <span>Visite 360°</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Biens() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [activePano, setActivePano] = useState(null);

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
            Sélection
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
            onViewPano={setActivePano}
          />
          {/* Two small stacked — 5 cols each */}
          <BienCard
            bien={BIENS[1]}
            className="col-span-12 md:col-span-5"
            onViewPano={setActivePano}
          />
          <BienCard
            bien={BIENS[2]}
            className="col-span-12 md:col-span-5"
            onViewPano={setActivePano}
          />
          {/* Wide horizontal — full width */}
          <BienCard
            bien={BIENS[3]}
            className="col-span-12"
            onViewPano={setActivePano}
          />
        </div>
      </div>

      {/* 360° panoramic viewer modal */}
      {activePano && (
        <PanoViewer
          src={activePano.pano}
          alt={activePano.title}
          onClose={() => setActivePano(null)}
        />
      )}
    </section>
  );
}
