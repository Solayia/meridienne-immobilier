import { Text } from '@react-three/drei';
import Column from '../geometry/Column';

/**
 * Stats section — dark environment. Large "15" in terracotta.
 * Two columns framing it. Positioned around z=-18.
 */
export default function StatsScene() {
  return (
    <group position={[0, 0, -18]}>
      {/* Dark floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[20, 12]} />
        <meshStandardMaterial color="#1A1A1A" roughness={0.95} />
      </mesh>

      {/* Dark ceiling */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 6, 0]}>
        <planeGeometry args={[20, 12]} />
        <meshStandardMaterial color="#1A1A1A" roughness={0.95} />
      </mesh>

      {/* Dark side walls */}
      <mesh position={[-10, 3, 0]}>
        <boxGeometry args={[0.3, 6, 12]} />
        <meshStandardMaterial color="#1A1A1A" roughness={0.95} />
      </mesh>
      <mesh position={[10, 3, 0]}>
        <boxGeometry args={[0.3, 6, 12]} />
        <meshStandardMaterial color="#1A1A1A" roughness={0.95} />
      </mesh>

      {/* "15" — large text */}
      <Text
        position={[0, 2.8, 0]}
        fontSize={5}
        color="#C4653A"
        anchorX="center"
        anchorY="middle"
        fontWeight={700}
      >
        15
      </Text>

      {/* Framing columns */}
      <Column position={[-4, 0, 1]} height={6} color="#2A2A2A" />
      <Column position={[4, 0, 1]} height={6} color="#2A2A2A" />
    </group>
  );
}
