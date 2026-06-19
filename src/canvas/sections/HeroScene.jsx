import Arch from '../geometry/Arch';

/**
 * Hero — elegant architectural composition.
 * Central arch, terracotta monoliths, reflective floor.
 */
export default function HeroScene() {
  return (
    <group position={[0, 0, 0]}>
      {/* Reflective ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[50, 80]} />
        <meshPhysicalMaterial
          color="#F0EBE4"
          roughness={0.3}
          metalness={0.05}
          clearcoat={0.4}
          clearcoatRoughness={0.3}
        />
      </mesh>

      {/* Central monumental arch */}
      <Arch
        position={[0, 0, -2]}
        width={5}
        height={6}
        archRadius={1.8}
        color="#F5F0EB"
      />

      {/* Terracotta monolith — tall, thin slab (left) */}
      <mesh position={[-5.5, 3, 1]}>
        <boxGeometry args={[0.5, 6, 1.5]} />
        <meshPhysicalMaterial
          color="#C4653A"
          roughness={0.6}
          metalness={0.08}
          clearcoat={0.2}
        />
      </mesh>

      {/* Shorter slab (right) */}
      <mesh position={[6, 2, 2.5]}>
        <boxGeometry args={[0.4, 4, 1.2]} />
        <meshPhysicalMaterial
          color="#C4653A"
          roughness={0.65}
          metalness={0.05}
        />
      </mesh>

      {/* Low horizontal volume — sand */}
      <mesh position={[-3, 0.4, 4]}>
        <boxGeometry args={[4, 0.8, 0.4]} />
        <meshPhysicalMaterial
          color="#E8E0D8"
          roughness={0.7}
          metalness={0.03}
        />
      </mesh>

      {/* Accent cube — darker terracotta, recessed */}
      <mesh position={[4.5, 0.6, 5]}>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshPhysicalMaterial
          color="#A8522E"
          roughness={0.55}
          metalness={0.1}
        />
      </mesh>

      {/* Thin vertical line — visual rhythm */}
      <mesh position={[-7, 2.5, 3]}>
        <boxGeometry args={[0.08, 5, 0.08]} />
        <meshPhysicalMaterial color="#C4653A" roughness={0.4} metalness={0.2} />
      </mesh>
      <mesh position={[8, 1.5, 4]}>
        <boxGeometry args={[0.08, 3, 0.08]} />
        <meshPhysicalMaterial color="#C4653A" roughness={0.4} metalness={0.2} />
      </mesh>
    </group>
  );
}
