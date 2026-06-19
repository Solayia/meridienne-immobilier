import {
  EffectComposer,
  Noise,
  Vignette,
  DepthOfField,
} from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

/**
 * Post-processing — film grain, vignette, subtle depth of field.
 * No bloom, no chromatic aberration (anti-slop).
 */
export default function PostEffects({ enabled = true }) {
  if (!enabled) return null;

  return (
    <EffectComposer multisampling={4}>
      <DepthOfField
        focusDistance={0.02}
        focalLength={0.06}
        bokehScale={1.5}
      />
      <Noise
        premultiply
        blendFunction={BlendFunction.SOFT_LIGHT}
        opacity={0.12}
      />
      <Vignette offset={0.25} darkness={0.4} />
    </EffectComposer>
  );
}
