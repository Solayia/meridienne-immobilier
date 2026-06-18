import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-700 ease-expo-out ${
        scrolled
          ? 'border-b border-sand/60 bg-cream/95 backdrop-blur-sm'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12"
        aria-label="Navigation principale"
      >
        <a href="#" className="font-display text-2xl tracking-tight">
          Méridienne
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-10 md:flex">
          {['Biens', "L'Agence", 'Quartiers'].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace("l'", '')}`}
              className="text-sm tracking-wide text-ink/60 transition-colors duration-300 ease-smooth-out hover:text-ink"
            >
              {label}
            </a>
          ))}
          <a
            href="#estimer"
            className="border border-terracotta px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-terracotta transition-colors duration-300 ease-smooth-out hover:bg-terracotta hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            Estimer
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-500 ease-expo-out ${
              mobileOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-opacity duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-500 ease-expo-out ${
              mobileOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-expo-out md:hidden ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col gap-6 bg-cream px-6 pb-8 pt-2">
          <a href="#biens" className="text-sm tracking-wide" onClick={closeMobile}>Biens</a>
          <a href="#agence" className="text-sm tracking-wide" onClick={closeMobile}>L'Agence</a>
          <a href="#quartiers" className="text-sm tracking-wide" onClick={closeMobile}>Quartiers</a>
          <a
            href="#estimer"
            className="inline-block self-start border border-terracotta px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-terracotta"
            onClick={closeMobile}
          >
            Estimer
          </a>
        </div>
      </div>
    </header>
  );
}
