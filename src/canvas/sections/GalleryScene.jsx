import { useTexture } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const BIENS = [
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1024&q=75',
    position: [-2.8, 2, -7],
    size: [3.2, 4],
    rotation: [0, 0.12, 0],
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=75',
    position: [3, 1.9, -9.5],
    size: [2.4, 3],
    rotation: [0, -0.08, 0],
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=75',
    position: [-2.5, 1.7, -12],
    size: [2.6, 3.2],
    rotation: [0, 0.06, 0],
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1024&q=75',
    position: [2, 1.5, -14],
    size: [3.8, 2.4],
    rotation: [0, -0.1, 0],
  },
];

function GalleryFrame({ image, position, size, rotation }) {
  const texture = useTexture(image);
  const groupRef = useRef();
  const baseY = position[1];

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y =
        baseY + Math.sin(clock.elapsedTime * 0.3 + position[2]) * 0.04;
    }
  });

  const frameW = size[0] + 0.2;
  const frameH = size[1] + 0.2;
  const frameDepth = 0.08;

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      {/* Shadow plane behind */}
      <mesh position={[0.15, -0.15, -0.12]}>
        <planeGeometry args={[frameW, frameH]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.08} />
      </mesh>

      {/* Frame — dark elegant border */}
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[frameW, frameH, frameDepth]} />
        <meshPhysicalMaterial
          color="#1A1A1A"
          roughness={0.3}
          metalness={0.4}
          clearcoat={0.6}
        />
      </mesh>

      {/* Inner mat (cream border between frame and image) */}
      <mesh position={[0, 0, 0.001]}>
        <planeGeometry args={[size[0] + 0.08, size[1] + 0.08]} />
        <meshStandardMaterial color="#F5F0EB" roughness={0.9} />
      </mesh>

      {/* Image */}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={size} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
    </group>
  );
}

/**
 * Gallery — framed property images in an open 3D space.
 * Alternating left/right, with slight rotation for depth.
 */
export default function GalleryScene() {
  return (
    <group>
      {/* Floor continuation */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, -10]}>
        <planeGeometry args={[20, 18]} />
        <meshPhysicalMaterial
          color="#F0EBE4"
          roughness={0.35}
          metalness={0.05}
          clearcoat={0.3}
          clearcoatRoughness={0.4}
        />
      </mesh>

      {/* Spotlights per frame */}
      <pointLight position={[-2.8, 4.5, -6.5]} intensity={3} distance={8} color="#FFF5E8" />
      <pointLight position={[3, 4.5, -9]} intensity={2.5} distance={7} color="#FFF5E8" />
      <pointLight position={[-2.5, 4.5, -11.5]} intensity={2.5} distance={7} color="#FFF5E8" />
      <pointLight position={[2, 4.5, -13.5]} intensity={3} distance={8} color="#FFF5E8" />

      {BIENS.map((bien, i) => (
        <GalleryFrame key={i} {...bien} />
      ))}
    </group>
  );
}
