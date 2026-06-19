import { useTexture } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const BIENS = [
  {
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1024&q=75',
    position: [-2.5, 2.2, -7],
    scale: [3.5, 4.5, 1],
  },
  {
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=75',
    position: [2.8, 2, -9],
    scale: [2.5, 3, 1],
  },
  {
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=75',
    position: [-3, 1.8, -11],
    scale: [2.5, 3, 1],
  },
  {
    image:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1024&q=75',
    position: [1.5, 1.5, -13],
    scale: [4, 2.5, 1],
  },
];

function FloatingFrame({ image, position, scale }) {
  const texture = useTexture(image);
  const meshRef = useRef();
  const initialY = position[1];

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Gentle floating — NOT a pulse, just a subtle breath
      meshRef.current.position.y =
        initialY + Math.sin(clock.elapsedTime * 0.4 + position[0]) * 0.08;
    }
  });

  return (
    <group position={position}>
      {/* Frame border */}
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[scale[0] + 0.15, scale[1] + 0.15, 0.06]} />
        <meshStandardMaterial color="#1A1A1A" roughness={0.9} />
      </mesh>
      {/* Image */}
      <mesh ref={meshRef}>
        <planeGeometry args={[scale[0], scale[1]]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
    </group>
  );
}

/**
 * Gallery — 4 floating framed images in 3D space (bento-like layout).
 * Positioned at z=-7 to z=-14 along the camera path.
 */
export default function GalleryScene() {
  return (
    <group>
      {/* Side walls for gallery feel */}
      <mesh position={[-6, 2.5, -10]}>
        <boxGeometry args={[0.3, 5, 14]} />
        <meshStandardMaterial color="#F5F0EB" roughness={0.85} />
      </mesh>
      <mesh position={[6, 2.5, -10]}>
        <boxGeometry args={[0.3, 5, 14]} />
        <meshStandardMaterial color="#F5F0EB" roughness={0.85} />
      </mesh>

      {BIENS.map((bien, i) => (
        <FloatingFrame key={i} {...bien} />
      ))}
    </group>
  );
}
