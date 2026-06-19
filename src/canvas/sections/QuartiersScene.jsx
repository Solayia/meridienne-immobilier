import { useTexture } from '@react-three/drei';

const QUARTIERS = [
  {
    src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=75',
    position: [-2.8, 2, -32],
    rotation: [0, 0.12, 0],
    size: [3, 4],
  },
  {
    src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=75',
    position: [2.5, 2.2, -34],
    rotation: [0, -0.08, 0],
    size: [3.2, 4.2],
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=800&q=75',
    position: [-2, 1.8, -36.5],
    rotation: [0, 0.06, 0],
    size: [2.8, 3.6],
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=75',
    position: [3, 2, -39],
    rotation: [0, -0.1, 0],
    size: [3.4, 4.4],
  },
];

function QuartierFrame({ src, position, rotation, size }) {
  const texture = useTexture(src);
  const frameW = size[0] + 0.16;
  const frameH = size[1] + 0.16;

  return (
    <group position={position} rotation={rotation}>
      {/* Soft shadow */}
      <mesh position={[0.1, -0.1, -0.1]}>
        <planeGeometry args={[frameW, frameH]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.06} />
      </mesh>

      {/* Thin frame */}
      <mesh position={[0, 0, -0.04]}>
        <boxGeometry args={[frameW, frameH, 0.06]} />
        <meshPhysicalMaterial
          color="#F5F0EB"
          roughness={0.5}
          metalness={0.1}
          clearcoat={0.3}
        />
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
 * Quartiers — large framed images in depth, alternating left/right.
 * Light cream frames, floating in a luminous space.
 */
export default function QuartiersScene() {
  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, -36]}>
        <planeGeometry args={[22, 20]} />
        <meshPhysicalMaterial
          color="#F0EBE4"
          roughness={0.35}
          metalness={0.05}
          clearcoat={0.3}
        />
      </mesh>

      {/* Soft illumination per image */}
      <pointLight position={[-2.8, 4.5, -31.5]} intensity={2} distance={7} color="#FFF5E8" />
      <pointLight position={[2.5, 4.5, -33.5]} intensity={2} distance={7} color="#FFF5E8" />
      <pointLight position={[-2, 4.5, -36]} intensity={2} distance={7} color="#FFF5E8" />
      <pointLight position={[3, 4.5, -38.5]} intensity={2} distance={7} color="#FFF5E8" />

      {QUARTIERS.map((q, i) => (
        <QuartierFrame key={i} {...q} />
      ))}
    </group>
  );
}
