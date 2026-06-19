import {
  EffectComposer,
  Noise,
  Vignette,
} from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

/**
 * Subtle postprocessing — film grain + vignette only.
 * No bloom, no chromatic aberration (anti-slop).
 */
export default function PostEffects({ enabled = true }) {
  if (!enabled) return null;

  return (
    <EffectComposer multisampling={4}>
      <Noise
        premultiply
        blendFunction={BlendFunction.SOFT_LIGHT}
        opacity={0.15}
      />
      <Vignette offset={0.3} darkness={0.35} />
    </EffectComposer>
  );
}
