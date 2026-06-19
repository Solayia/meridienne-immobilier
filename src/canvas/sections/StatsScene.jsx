import { Text } from '@react-three/drei';

/**
 * Stats — dramatic dark room. "15" backlit in terracotta.
 * Elegant walls with material variation.
 */
export default function StatsScene() {
  return (
    <group position={[0, 0, -18]}>
      {/* Dark floor — matte */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[22, 14]} />
        <meshPhysicalMaterial
          color="#151515"
          roughness={0.85}
          metalness={0.1}
          clearcoat={0.15}
          clearcoatRoughness={0.6}
        />
      </mesh>

      {/* Ceiling — darker */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 6.5, 0]}>
        <planeGeometry args={[22, 14]} />
        <meshStandardMaterial color="#0A0A0A" roughness={0.98} />
      </mesh>

      {/* Side walls — subtle texture difference */}
      <mesh position={[-11, 3.25, 0]}>
        <boxGeometry args={[0.15, 6.5, 14]} />
        <meshPhysicalMaterial color="#1A1A1A" roughness={0.9} metalness={0.05} />
      </mesh>
      <mesh position={[11, 3.25, 0]}>
        <boxGeometry args={[0.15, 6.5, 14]} />
        <meshPhysicalMaterial color="#1A1A1A" roughness={0.9} metalness={0.05} />
      </mesh>

      {/* "15" — large terracotta text */}
      <Text
        position={[0, 3, 0]}
        fontSize={6}
        color="#C4653A"
        anchorX="center"
        anchorY="middle"
        fontWeight="bold"
        letterSpacing={0.05}
      >
        15
      </Text>

      {/* Backlight behind the 15 — dramatic orange glow */}
      <pointLight
        position={[0, 3, -1.5]}
        intensity={8}
        distance={12}
        color="#C4653A"
      />

      {/* Subtle overhead light */}
      <pointLight
        position={[0, 6, 0]}
        intensity={1.5}
        distance={10}
        color="#FFF0E0"
      />

      {/* Thin terracotta accent lines on floor */}
      <mesh position={[-4, 0.005, 2]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.03, 6]} />
        <meshBasicMaterial color="#C4653A" />
      </mesh>
      <mesh position={[4, 0.005, 2]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.03, 6]} />
        <meshBasicMaterial color="#C4653A" />
      </mesh>
    </group>
  );
}
