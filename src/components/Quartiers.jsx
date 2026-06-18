import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const QUARTIERS = [
  {
    num: '01',
    name: 'Capitole',
    desc: 'Coeur vibrant de Toulouse, entre theatre, terrasses et patrimoine historique.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '02',
    name: 'Saint-Etienne',
    desc: 'Quartier bourgeois par excellence. Hotels particuliers, jardins discrets.',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '03',
    name: 'Cote Pavee',
    desc: 'Residentiel et arbore. Villas d\'architecte avec vue sur la Ville rose.',
    image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '04',
    name: 'Les Carmes',
    desc: 'Ruelles pavees, artisans, bistrots. L\'authenticite au quotidien.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Quartiers() {
  const [active, setActive] = useState('01');
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="quartiers" className="py-20 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        {/* Header */}
        <div
          ref={headerRef}
          className={`transition-all duration-[1s] ease-expo-out ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink/40">
            Nos quartiers
          </span>
          <h2 className="mt-3 font-display text-4xl tracking-tight md:text-6xl">
            Toulouse, <em className="italic">intime</em>
          </h2>
        </div>

        {/* Content: list + image reveal */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-5">
          {/* Editorial numbered list */}
          <div className="md:col-span-3">
            {QUARTIERS.map((q) => (
              <div
                key={q.num}
                className="group cursor-default border-t border-sand py-7 md:py-9"
                onMouseEnter={() => setActive(q.num)}
                onFocus={() => setActive(q.num)}
                tabIndex={0}
                role="listitem"
                aria-label={q.name}
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-display text-sm text-terracotta">
                    {q.num}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl transition-colors duration-300 ease-smooth-out group-hover:text-terracotta md:text-3xl">
                      {q.name}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm text-ink/45">
                      {q.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-sand" aria-hidden="true" />
          </div>

          {/* Sticky image — desktop only */}
          <div className="relative hidden md:col-span-2 md:block" aria-hidden="true">
            <div className="sticky top-32 ml-12 aspect-[3/4] overflow-hidden">
              {QUARTIERS.map((q) => (
                <img
                  key={q.num}
                  src={q.image}
                  alt=""
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-expo-out ${
                    active === q.num ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
