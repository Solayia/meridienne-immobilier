import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

/**
 * Drives the camera along a path based on scroll progress (0→1).
 * Uses smooth interpolation (lerp) for cinematic feel.
 */

const CAMERA_PATH = [
  // [progress, position, lookAt]
  { at: 0.0, pos: [0, 8, 12], look: [0, 2, 0] },       // Hero — high angle
  { at: 0.1, pos: [0, 4, 8], look: [0, 2, -2] },        // Descending
  { at: 0.15, pos: [0, 2.5, 5], look: [0, 2, -4] },     // Entering gallery
  { at: 0.25, pos: [0, 2, 0], look: [0, 1.8, -8] },     // Mid gallery
  { at: 0.38, pos: [0, 2, -6], look: [0, 1.8, -14] },   // End gallery
  { at: 0.42, pos: [0, 2, -10], look: [0, 3, -18] },    // Stats entrance
  { at: 0.55, pos: [0, 2.5, -16], look: [0, 2.5, -24] },// Stats center
  { at: 0.6, pos: [0, 2, -20], look: [0, 2, -28] },     // Arch entrance
  { at: 0.7, pos: [0, 2, -26], look: [0, 2, -34] },     // Through arch
  { at: 0.78, pos: [0, 2, -30], look: [0, 1.8, -38] },  // Quartiers
  { at: 0.88, pos: [0, 2, -36], look: [0, 1.8, -44] },  // CTA
  { at: 1.0, pos: [0, 2, -40], look: [0, 1.8, -48] },   // End
];

function getInterpolated(progress) {
  let a = CAMERA_PATH[0];
  let b = CAMERA_PATH[CAMERA_PATH.length - 1];

  for (let i = 0; i < CAMERA_PATH.length - 1; i++) {
    if (progress >= CAMERA_PATH[i].at && progress <= CAMERA_PATH[i + 1].at) {
      a = CAMERA_PATH[i];
      b = CAMERA_PATH[i + 1];
      break;
    }
  }

  const t = a.at === b.at ? 0 : (progress - a.at) / (b.at - a.at);
  // Smooth step easing
  const ease = t * t * (3 - 2 * t);

  return {
    pos: a.pos.map((v, i) => THREE.MathUtils.lerp(v, b.pos[i], ease)),
    look: a.look.map((v, i) => THREE.MathUtils.lerp(v, b.look[i], ease)),
  };
}

const _targetPos = new THREE.Vector3();
const _targetLook = new THREE.Vector3();
const _currentLook = new THREE.Vector3();

export default function CameraRig({ progress = 0, reducedMotion = false }) {
  const { camera } = useThree();
  const lookRef = useRef(new THREE.Vector3(0, 2, 0));

  useFrame(() => {
    const { pos, look } = getInterpolated(progress);

    _targetPos.set(...pos);
    _targetLook.set(...look);

    const lerpSpeed = reducedMotion ? 1 : 0.06;

    camera.position.lerp(_targetPos, lerpSpeed);
    lookRef.current.lerp(_targetLook, lerpSpeed);
    camera.lookAt(lookRef.current);
  });

  return null;
}
