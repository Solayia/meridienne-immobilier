import { useState, useEffect, useCallback, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { initLenis } from './lib/lenis';
import { useReducedMotion } from './hooks/useReducedMotion';
import { useSectionProgress } from './hooks/useSectionProgress';
import Scene from './canvas/Scene';
import Navbar from './dom/Navbar';
import HeroOverlay from './dom/HeroOverlay';
import BiensOverlay from './dom/BiensOverlay';
import StatsOverlay from './dom/StatsOverlay';
import AgenceOverlay from './dom/AgenceOverlay';
import QuartiersOverlay from './dom/QuartiersOverlay';
import CtaOverlay from './dom/CtaOverlay';
import Footer from './dom/Footer';

/**
 * Fallback DOM-only site when WebGL is not available.
 */
function DomFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-6">
      <div className="max-w-2xl text-center">
        <h1 className="font-display text-5xl tracking-tight md:text-7xl">
          Méridienne
        </h1>
        <p className="mt-6 text-lg text-ink/60">
          Immobilier d'exception à Toulouse
        </p>
        <a
          href="tel:+33561000000"
          className="mt-10 inline-block border border-terracotta px-8 py-3 text-sm uppercase tracking-[0.15em] text-terracotta transition-colors hover:bg-terracotta hover:text-cream"
        >
          Nous contacter
        </a>
      </div>
    </div>
  );
}

/**
 * Detects if WebGL is supported.
 */
function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
}

export default function App() {
  const [progress, setProgress] = useState(0);
  const [webglSupported, setWebglSupported] = useState(true);
  const reducedMotion = useReducedMotion();

  // Section progress helpers
  const heroProgress = useSectionProgress(progress, 0, 0.15);
  const biensProgress = useSectionProgress(progress, 0.15, 0.40);
  const statsProgress = useSectionProgress(progress, 0.40, 0.55);
  const agenceProgress = useSectionProgress(progress, 0.55, 0.70);
  const quartiersProgress = useSectionProgress(progress, 0.70, 0.85);
  const ctaProgress = useSectionProgress(progress, 0.85, 1.0);

  const handleScroll = useCallback(({ progress: p }) => {
    setProgress(p);
  }, []);

  useEffect(() => {
    setWebglSupported(supportsWebGL());
  }, []);

  useEffect(() => {
    if (!webglSupported) return;

    const lenis = initLenis();
    lenis.on('scroll', handleScroll);

    return () => lenis.off('scroll', handleScroll);
  }, [handleScroll, webglSupported]);

  if (!webglSupported || reducedMotion) {
    return (
      <>
        <Navbar />
        <DomFallback />
        <Footer />
      </>
    );
  }

  return (
    <>
      {/* Scrollable height — drives Lenis progress */}
      <div className="h-[800vh]" aria-hidden="true" />

      {/* Fixed WebGL canvas */}
      <div className="fixed inset-0 z-0">
        <Canvas
          dpr={[1, Math.min(window.devicePixelRatio, 2)]}
          camera={{ fov: 50, near: 0.1, far: 100, position: [0, 8, 12] }}
          gl={{ antialias: true, alpha: false }}
        >
          <color attach="background" args={['#F5F0EB']} />
          <Suspense fallback={null}>
            <Scene progress={progress} reducedMotion={reducedMotion} />
          </Suspense>
        </Canvas>
      </div>

      {/* DOM overlays */}
      <Navbar />
      <HeroOverlay progress={progress} />
      <BiensOverlay sectionProgress={biensProgress} />
      <StatsOverlay sectionProgress={statsProgress} />
      <AgenceOverlay sectionProgress={agenceProgress} />
      <QuartiersOverlay sectionProgress={quartiersProgress} />
      <CtaOverlay sectionProgress={ctaProgress} />

      {/* Footer at the bottom */}
      <div className="relative z-20">
        <Footer />
      </div>

      {/* Hidden anchors for accessibility */}
      <div className="sr-only" aria-hidden="false">
        <div id="biens" />
        <div id="agence" />
        <div id="quartiers" />
        <div id="estimer" />
      </div>
    </>
  );
}
