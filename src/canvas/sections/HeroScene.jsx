import Arch from '../geometry/Arch';
import Column from '../geometry/Column';
import Staircase from '../geometry/Staircase';

/**
 * Hero scene — geometric rooftops, entry arch, columns.
 * Positioned at z=0 (start of the camera path).
 */
export default function HeroScene() {
  return (
    <group position={[0, 0, 0]}>
      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[40, 60]} />
        <meshStandardMaterial color="#F5F0EB" roughness={0.9} />
      </mesh>

      {/* Main entry arch */}
      <Arch
        position={[0, 0, -2]}
        width={4}
        height={5.5}
        archRadius={1.5}
        color="#F5F0EB"
      />

      {/* Side columns */}
      <Column position={[-3.5, 0, 0]} height={5} color="#E8E0D8" />
      <Column position={[3.5, 0, 0]} height={5} color="#E8E0D8" />
      <Column position={[-3.5, 0, -4]} height={5} color="#E8E0D8" />
      <Column position={[3.5, 0, -4]} height={5} color="#E8E0D8" />

      {/* Geometric rooftop blocks — terracotta accents */}
      <mesh position={[-5, 2.5, 2]}>
        <boxGeometry args={[3, 5, 3]} />
        <meshStandardMaterial color="#C4653A" roughness={0.8} />
      </mesh>
      <mesh position={[6, 1.5, 3]}>
        <boxGeometry args={[2.5, 3, 2.5]} />
        <meshStandardMaterial color="#C4653A" roughness={0.8} />
      </mesh>
      <mesh position={[-6, 1, 5]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#A8522E" roughness={0.8} />
      </mesh>
      <mesh position={[4, 3, 6]}>
        <boxGeometry args={[1.5, 6, 2]} />
        <meshStandardMaterial color="#C4653A" roughness={0.75} />
      </mesh>

      {/* Low walls */}
      <mesh position={[-2, 0.5, 4]}>
        <boxGeometry args={[6, 1, 0.3]} />
        <meshStandardMaterial color="#E8E0D8" roughness={0.85} />
      </mesh>

      {/* Decorative staircase */}
      <Staircase
        position={[5, 0, -1]}
        rotation={[0, -Math.PI / 4, 0]}
        steps={5}
        stepWidth={1.5}
        color="#E8E0D8"
      />
    </group>
  );
}
