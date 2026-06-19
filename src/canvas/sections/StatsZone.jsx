import { Text } from '@react-three/drei';

/**
 * Stats zone — at the back of the showroom.
 * Dark alcove with key numbers, separated by a step change.
 */
export default function StatsZone() {
  return (
    <group position={[0, 0, -16]}>
      {/* Dark back wall */}
      <mesh position={[0, 2, -4]}>
        <boxGeometry args={[13, 4, 0.15]} />
        <meshPhysicalMaterial
          color="#1A1A1A"
          roughness={0.85}
          metalness={0.1}
        />
      </mesh>

      {/* Dark floor section */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.005, -2]}>
        <planeGeometry args={[13, 8]} />
        <meshPhysicalMaterial
          color="#1A1A1A"
          roughness={0.4}
          metalness={0.1}
          clearcoat={0.3}
        />
      </mesh>

      {/* "15" large number */}
      <Text
        position={[0, 2.5, -3.85]}
        fontSize={2.5}
        color="#C4653A"
        anchorX="center"
        anchorY="middle"
        fontWeight="bold"
      >
        15
      </Text>
      <Text
        position={[0, 1.3, -3.85]}
        fontSize={0.18}
        color="#E8E0D8"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.12}
      >
        ANNÉES D'EXCELLENCE
      </Text>

      {/* Stats text */}
      <Text
        position={[-3.5, 0.7, -3.85]}
        fontSize={0.35}
        color="#F5F0EB"
        anchorX="center"
        anchorY="middle"
        fontWeight="bold"
      >
        240+
      </Text>
      <Text
        position={[-3.5, 0.35, -3.85]}
        fontSize={0.1}
        color="#888"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.08}
      >
        BIENS VENDUS
      </Text>

      <Text
        position={[0, 0.7, -3.85]}
        fontSize={0.35}
        color="#F5F0EB"
        anchorX="center"
        anchorY="middle"
        fontWeight="bold"
      >
        98%
      </Text>
      <Text
        position={[0, 0.35, -3.85]}
        fontSize={0.1}
        color="#888"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.08}
      >
        SATISFACTION
      </Text>

      <Text
        position={[3.5, 0.7, -3.85]}
        fontSize={0.35}
        color="#F5F0EB"
        anchorX="center"
        anchorY="middle"
        fontWeight="bold"
      >
        72h
      </Text>
      <Text
        position={[3.5, 0.35, -3.85]}
        fontSize={0.1}
        color="#888"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.08}
      >
        DÉLAI MOYEN
      </Text>

      {/* Backlight glow */}
      <pointLight
        position={[0, 2.5, -3]}
        intensity={4}
        distance={8}
        color="#C4653A"
      />
      <pointLight
        position={[0, 0.5, -3]}
        intensity={2}
        distance={6}
        color="#FFF5E8"
      />
    </group>
  );
}
