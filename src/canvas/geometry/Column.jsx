/**
 * Simple cylindrical column with optional base and capital (wider discs).
 */
export default function Column({
  height = 4,
  radius = 0.15,
  color = '#E8E0D8',
  ...props
}) {
  return (
    <group {...props}>
      {/* Base */}
      <mesh position={[0, 0.08, 0]}>
        <cylinderGeometry args={[radius * 1.6, radius * 1.8, 0.16, 16]} />
        <meshStandardMaterial color={color} roughness={0.8} metalness={0.05} />
      </mesh>

      {/* Shaft */}
      <mesh position={[0, height / 2, 0]}>
        <cylinderGeometry args={[radius, radius * 1.05, height, 16]} />
        <meshStandardMaterial color={color} roughness={0.75} metalness={0.05} />
      </mesh>

      {/* Capital */}
      <mesh position={[0, height - 0.08, 0]}>
        <cylinderGeometry args={[radius * 1.8, radius * 1.6, 0.16, 16]} />
        <meshStandardMaterial color={color} roughness={0.8} metalness={0.05} />
      </mesh>
    </group>
  );
}
