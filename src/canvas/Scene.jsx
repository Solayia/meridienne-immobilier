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
 * Main 3D scene — environment-lit, warm architectural mood.
 */
export default function Scene({ progress = 0, reducedMotion = false }) {
  return (
    <>
      <CameraRig progress={progress} reducedMotion={reducedMotion} />

      {/* Key light — warm, from upper-right */}
      <directionalLight
        position={[10, 15, 8]}
        intensity={2.5}
        color="#FFEEDD"
      />
      {/* Fill — softer, from left */}
      <directionalLight
        position={[-6, 8, -4]}
        intensity={0.6}
        color="#E8E0D8"
      />
      {/* Back fill — for deep scenes */}
      <directionalLight
        position={[0, 6, -45]}
        intensity={1.2}
        color="#FFF5E8"
      />
      {/* Ambient — low, warm */}
      <ambientLight intensity={0.35} color="#FFF5E8" />

      {/* Fog — gentle depth, doesn't kill back scenes */}
      <fog attach="fog" args={['#F5F0EB', 30, 90]} />

      {/* Environment — subtle reflections on physical materials */}
      <Environment preset="apartment" environmentIntensity={0.2} />

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
