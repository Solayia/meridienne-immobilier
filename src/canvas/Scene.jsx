import { Suspense } from 'react';
import { Environment } from '@react-three/drei';
import CameraRig from './CameraRig';
import HeroScene from './sections/HeroScene';
import GalleryScene from './sections/GalleryScene';
import StatsScene from './sections/StatsScene';
import ArchScene from './sections/ArchScene';
import QuartiersScene from './sections/QuartiersScene';
import PostEffects from './effects/PostEffects';

/**
 * Main 3D scene — single canvas for the entire page.
 * Contains all section scenes, camera rig, lighting, and post-effects.
 */
export default function Scene({ progress = 0, reducedMotion = false }) {
  return (
    <>
      <CameraRig progress={progress} reducedMotion={reducedMotion} />

      {/* Warm directional lighting */}
      <ambientLight intensity={0.4} color="#FFF5E8" />
      <directionalLight
        position={[8, 12, 5]}
        intensity={1.8}
        color="#FFEEDD"
        castShadow={false}
      />
      <directionalLight
        position={[-4, 6, -8]}
        intensity={0.4}
        color="#E8E0D8"
      />

      {/* Fog for depth — cream-tinted */}
      <fog attach="fog" args={['#F5F0EB', 15, 55]} />

      {/* Environment for subtle reflections */}
      <Environment preset="apartment" environmentIntensity={0.15} />

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
