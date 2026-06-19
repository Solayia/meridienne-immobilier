import { Suspense } from 'react';
import { Environment } from '@react-three/drei';
import CameraRig from './CameraRig';
import ShowroomScene from './sections/ShowroomScene';
import StatsZone from './sections/StatsZone';
import PostEffects from './effects/PostEffects';

/**
 * Main scene — luxury real estate showroom.
 * One cohesive space: entrance → gallery → stats wall.
 */
export default function Scene({ progress = 0, reducedMotion = false }) {
  return (
    <>
      <CameraRig progress={progress} reducedMotion={reducedMotion} />

      {/* Ambient — soft warm base */}
      <ambientLight intensity={0.3} color="#FFF8F0" />

      {/* Key light — simulates skylight from above */}
      <directionalLight
        position={[2, 10, 4]}
        intensity={1.5}
        color="#FFF5E8"
      />

      {/* Fill from entrance */}
      <directionalLight
        position={[0, 4, 12]}
        intensity={0.6}
        color="#F5F0EB"
      />

      {/* Gentle fog — gives depth without killing visibility */}
      <fog attach="fog" args={['#F5F0EB', 18, 50]} />

      {/* Environment for physical material reflections */}
      <Environment preset="apartment" environmentIntensity={0.15} />

      <Suspense fallback={null}>
        <ShowroomScene />
        <StatsZone />
      </Suspense>

      <PostEffects enabled={!reducedMotion} />
    </>
  );
}
