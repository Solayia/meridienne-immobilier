import { useTexture } from '@react-three/drei';

const QUARTIERS_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=75',
    position: [-2.5, 2, -32],
    rotation: [0, 0.15, 0],
  },
  {
    src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=75',
    position: [2, 2.2, -34],
    rotation: [0, -0.1, 0],
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=800&q=75',
    position: [-1.5, 1.8, -36],
    rotation: [0, 0.08, 0],
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=75',
    position: [2.5, 2, -38],
    rotation: [0, -0.12, 0],
  },
];

function DepthPlane({ src, position, rotation }) {
  const texture = useTexture(src);

  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[3.5, 4.5]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}

/**
 * Quartiers — 4 image planes stacked in depth (z-axis),
 * like floating postcards. Camera glides past them.
 */
export default function QuartiersScene() {
  return (
    <group>
      {/* Floor continuation */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, -35]}>
        <planeGeometry args={[20, 16]} />
        <meshStandardMaterial color="#F5F0EB" roughness={0.9} />
      </mesh>

      {QUARTIERS_IMAGES.map((q, i) => (
        <DepthPlane key={i} {...q} />
      ))}
    </group>
  );
}
