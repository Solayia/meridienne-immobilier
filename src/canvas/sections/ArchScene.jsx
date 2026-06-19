import Arch from '../geometry/Arch';
import Column from '../geometry/Column';

/**
 * Arch corridor — transition between Stats and Agence/Quartiers.
 * Two arches in enfilade, light at the end.
 * Positioned around z=-24 to z=-28.
 */
export default function ArchScene() {
  return (
    <group position={[0, 0, -24]}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, -2]}>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color="#F5F0EB" roughness={0.88} />
      </mesh>

      {/* First arch */}
      <Arch
        position={[0, 0, 0]}
        width={5}
        height={5.5}
        archRadius={1.8}
        color="#E8E0D8"
      />

      {/* Second arch — deeper */}
      <Arch
        position={[0, 0, -4]}
        width={5}
        height={5.5}
        archRadius={1.8}
        color="#F5F0EB"
      />

      {/* Flanking columns */}
      <Column position={[-3.5, 0, -2]} height={5.5} color="#E8E0D8" />
      <Column position={[3.5, 0, -2]} height={5.5} color="#E8E0D8" />

      {/* Light volume at the end — a glowing plane */}
      <mesh position={[0, 2.5, -7]}>
        <planeGeometry args={[8, 5]} />
        <meshBasicMaterial color="#FFF8F0" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}
