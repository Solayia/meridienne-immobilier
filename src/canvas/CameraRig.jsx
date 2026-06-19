import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

/**
 * Camera path through the luxury showroom.
 *
 * 0-10%   : Outside → approach the agency entrance
 * 10-25%  : Enter → pass first property (left wall)
 * 25-40%  : Pause on property 2 (right wall)
 * 40-55%  : Move to property 3 (left wall, deeper)
 * 55-70%  : Property 4 (center, large)
 * 70-82%  : Pull back slightly → stats moment
 * 82-100% : Settle → CTA zone
 */
const PATH = [
  { at: 0.0,  pos: [0, 2.5, 14],   look: [0, 2, 0] },
  { at: 0.08, pos: [0, 2, 8],      look: [0, 1.8, 0] },
  { at: 0.12, pos: [0, 1.8, 5],    look: [0, 1.6, -2] },
  { at: 0.18, pos: [-1, 1.8, 2],   look: [-3.5, 1.8, 0] },
  { at: 0.28, pos: [0, 1.8, -1],   look: [3.5, 1.8, -3] },
  { at: 0.38, pos: [1, 1.8, -4],   look: [-3.5, 1.8, -6] },
  { at: 0.48, pos: [0, 1.8, -7],   look: [3.5, 1.8, -9] },
  { at: 0.58, pos: [-0.5, 1.8, -10], look: [0, 1.8, -14] },
  { at: 0.68, pos: [0, 1.8, -13],  look: [0, 2, -16] },
  { at: 0.78, pos: [0, 2, -16],    look: [0, 2, -20] },
  { at: 0.88, pos: [0, 1.8, -19],  look: [0, 1.6, -23] },
  { at: 1.0,  pos: [0, 1.8, -22],  look: [0, 1.6, -26] },
];

function interpolate(progress) {
  let a = PATH[0];
  let b = PATH[PATH.length - 1];

  for (let i = 0; i < PATH.length - 1; i++) {
    if (progress >= PATH[i].at && progress <= PATH[i + 1].at) {
      a = PATH[i];
      b = PATH[i + 1];
      break;
    }
  }

  const t = a.at === b.at ? 0 : (progress - a.at) / (b.at - a.at);
  const ease = t * t * (3 - 2 * t);

  return {
    pos: a.pos.map((v, i) => THREE.MathUtils.lerp(v, b.pos[i], ease)),
    look: a.look.map((v, i) => THREE.MathUtils.lerp(v, b.look[i], ease)),
  };
}

const _tPos = new THREE.Vector3();
const _tLook = new THREE.Vector3();

export default function CameraRig({ progress = 0, reducedMotion = false }) {
  const { camera } = useThree();
  const lookRef = useRef(new THREE.Vector3(0, 2, 0));

  useFrame(() => {
    const { pos, look } = interpolate(progress);
    _tPos.set(...pos);
    _tLook.set(...look);

    const speed = reducedMotion ? 1 : 0.07;
    camera.position.lerp(_tPos, speed);
    lookRef.current.lerp(_tLook, speed);
    camera.lookAt(lookRef.current);
  });

  return null;
}
