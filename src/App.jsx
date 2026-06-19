import { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { initLenis, onScrollProgress } from './lib/lenis';
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

function supportsWebGL() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

export default function App() {
  const [progress, setProgress] = useState(0);
  const [webglOk, setWebglOk] = useState(true);
  const reducedMotion = useReducedMotion();

  const heroP = useSectionProgress(progress, 0, 0.15);
  const biensP = useSectionProgress(progress, 0.15, 0.40);
  const statsP = useSectionProgress(progress, 0.40, 0.55);
  const agenceP = useSectionProgress(progress, 0.55, 0.70);
  const quartiersP = useSectionProgress(progress, 0.70, 0.85);
  const ctaP = useSectionProgress(progress, 0.85, 1.0);

  useEffect(() => {
    setWebglOk(supportsWebGL());
  }, []);

  useEffect(() => {
    if (!webglOk || reducedMotion) return;

    initLenis();
    const unsub = onScrollProgress((p) => setProgress(p));
    return unsub;
  }, [webglOk, reducedMotion]);

  if (!webglOk || reducedMotion) {
    return (
      <>
        <Navbar progress={0} />
        <DomFallback />
        <Footer />
      </>
    );
  }

  return (
    <>
      {/* Scroll height — drives Lenis 0→1 progress */}
      <div className="h-[800vh]" aria-hidden="true" />

      {/* WebGL canvas — fixed fullscreen */}
      <div className="fixed inset-0 z-0">
        <Canvas
          dpr={[1, Math.min(window.devicePixelRatio, 2)]}
          camera={{ fov: 50, near: 0.1, far: 150, position: [0, 8, 12] }}
          gl={{ antialias: true, alpha: false }}
        >
          <color attach="background" args={['#F5F0EB']} />
          <Suspense fallback={null}>
            <Scene progress={progress} reducedMotion={reducedMotion} />
          </Suspense>
        </Canvas>
      </div>

      {/* DOM overlays on top */}
      <Navbar progress={progress} />
      <HeroOverlay progress={progress} />
      <BiensOverlay sectionProgress={biensP} />
      <StatsOverlay sectionProgress={statsP} />
      <AgenceOverlay sectionProgress={agenceP} />
      <QuartiersOverlay sectionProgress={quartiersP} />
      <CtaOverlay sectionProgress={ctaP} />

      {/* Footer in flow */}
      <div className="relative z-20">
        <Footer />
      </div>

      {/* Accessibility anchors */}
      <div className="sr-only">
        <span id="biens" />
        <span id="agence" />
        <span id="quartiers" />
        <span id="estimer" />
      </div>
    </>
  );
}
