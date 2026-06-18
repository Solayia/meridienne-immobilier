import { useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero() {
  const imgRef = useRef(null);
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.05 });

  /* Subtle parallax on the hero image — respects reduced motion */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (imgRef.current) {
            imgRef.current.style.transform = `translateY(${window.scrollY * 0.1}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden pb-20 md:items-center md:pb-0">
      {/* Photo — right 62 % on desktop, full on mobile */}
      <div className="absolute inset-0 md:left-[38%]" aria-hidden="true">
        <img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="h-[115%] w-full object-cover will-change-transform"
          loading="eager"
          fetchPriority="high"
        />
        {/* Readability overlay — not a decorative gradient */}
        <div className="absolute inset-0 bg-cream/75 md:hero-overlay" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className={`relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-12 transition-all duration-[1.2s] ease-expo-out ${
          contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/50">
          Toulouse — Immobilier d'exception
        </p>

        <h1 className="mt-5 max-w-3xl font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.92] tracking-tight">
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
    </section>
  );
}
