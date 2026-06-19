import { Suspense } from 'react';
import CameraRig from './CameraRig';
import HeroScene from './sections/HeroScene';
import GalleryScene from './sections/GalleryScene';
import StatsScene from './sections/StatsScene';
import ArchScene from './sections/ArchScene';
import QuartiersScene from './sections/QuartiersScene';
import PostEffects from './effects/PostEffects';

/**
 * Main 3D scene — single canvas, camera driven by scroll progress.
 */
export default function Scene({ progress = 0, reducedMotion = false }) {
  return (
    <>
      <CameraRig progress={progress} reducedMotion={reducedMotion} />

      {/* Lighting — warm, directional, architectural */}
      <ambientLight intensity={0.6} color="#FFF5E8" />
      <directionalLight
        position={[8, 12, 5]}
        intensity={2}
        color="#FFEEDD"
      />
      <directionalLight
        position={[-4, 6, -8]}
        intensity={0.5}
        color="#E8E0D8"
      />
      {/* Fill light from behind for later scenes */}
      <directionalLight
        position={[0, 4, -40]}
        intensity={0.8}
        color="#FFF5E8"
      />

      {/* Soft fog — extended far to not kill later sections */}
      <fog attach="fog" args={['#F5F0EB', 25, 80]} />

      <Suspense fallback={null}>
        <HeroScene />
        <GalleryScene />
        <StatsScene />
        <ArchScene />
        <QuartiersScene />
      </Suspense>

      <PostEffects enabled={!reducedMotion} />
    </>
  );
}
