import Arch from '../geometry/Arch';

/**
 * Arch corridor — two arches in enfilade with dramatic light at the end.
 * Transition between dark Stats → light Quartiers.
 */
export default function ArchScene() {
  return (
    <group position={[0, 0, -24]}>
      {/* Floor — transition from dark to light */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, -2]}>
        <planeGeometry args={[14, 14]} />
        <meshPhysicalMaterial
          color="#E8E0D8"
          roughness={0.4}
          metalness={0.05}
          clearcoat={0.3}
        />
      </mesh>

      {/* First arch — sand color, thicker */}
      <Arch
        position={[0, 0, 0]}
        width={5.5}
        height={6}
        depth={0.6}
        archRadius={2}
        color="#E0D8CE"
      />

      {/* Second arch — cream, slightly narrower = perspective depth */}
      <Arch
        position={[0, 0, -4.5]}
        width={5}
        height={5.8}
        depth={0.5}
        archRadius={1.8}
        color="#F0EBE4"
      />

      {/* Warm light spilling through the corridor */}
      <pointLight
        position={[0, 3, -8]}
        intensity={6}
        distance={16}
        color="#FFEEDD"
      />

      {/* Accent light on arch surface */}
      <pointLight
        position={[3, 4, -2]}
        intensity={2}
        distance={8}
        color="#FFF5E8"
      />
    </group>
  );
}
