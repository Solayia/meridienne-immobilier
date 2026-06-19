import { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { initLenis, onScrollProgress } from './lib/lenis';
import { useReducedMotion } from './hooks/useReducedMotion';
import { useSectionProgress } from './hooks/useSectionProgress';
import Scene from './canvas/Scene';
import Navbar from './dom/Navbar';
import WelcomeOverlay from './dom/WelcomeOverlay';
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

  // Sections: Welcome (0-10%), Showroom (10-70%), Stats (70-82%), CTA (82-100%)
  const welcomeP = useSectionProgress(progress, 0, 0.10);
  const ctaP = useSectionProgress(progress, 0.82, 1.0);

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
      {/* Scroll height */}
      <div className="h-[800vh]" aria-hidden="true" />

      {/* WebGL canvas */}
      <div className="fixed inset-0 z-0">
        <Canvas
          dpr={[1, Math.min(window.devicePixelRatio, 2)]}
          camera={{ fov: 50, near: 0.1, far: 80, position: [0, 2.5, 14] }}
          gl={{ antialias: true, alpha: false }}
        >
          <color attach="background" args={['#F5F0EB']} />
          <Suspense fallback={null}>
            <Scene progress={progress} reducedMotion={reducedMotion} />
          </Suspense>
        </Canvas>
      </div>

      {/* DOM overlays — minimal, let the 3D speak */}
      <Navbar progress={progress} />
      <WelcomeOverlay progress={welcomeP} />
      <CtaOverlay sectionProgress={ctaP} />

      {/* Scroll hint */}
      {progress < 0.03 && (
        <div className="pointer-events-none fixed bottom-8 left-1/2 z-10 -translate-x-1/2">
          <p className="animate-pulse text-xs uppercase tracking-[0.2em] text-ink/30">
            Scrollez pour entrer
          </p>
        </div>
      )}

      <div className="relative z-20">
        <Footer />
      </div>

      <div className="sr-only">
        <span id="biens" />
        <span id="estimer" />
      </div>
    </>
  );
}
