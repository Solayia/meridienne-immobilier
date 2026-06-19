import { useMemo } from 'react';
import * as THREE from 'three';

/**
 * Procedural arch — rectangular wall with a semicircular opening.
 */
export default function Arch({
  width = 3,
  height = 5,
  depth = 0.4,
  archRadius = 1.2,
  color = '#F5F0EB',
  ...props
}) {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    const hw = width / 2;
    const r = Math.min(archRadius, hw);
    const archTop = height - r - 0.5;

    // Outer wall (clockwise)
    shape.moveTo(-hw, 0);
    shape.lineTo(-hw, height);
    shape.lineTo(hw, height);
    shape.lineTo(hw, 0);
    shape.closePath();

    // Inner arch hole (counter-clockwise for correct subtraction)
    const hole = new THREE.Path();
    hole.moveTo(-r, 0);
    hole.lineTo(-r, archTop);
    // Semicircle from left to right (PI → 0, counter-clockwise = false)
    const segments = 24;
    for (let i = 0; i <= segments; i++) {
      const angle = Math.PI - (i / segments) * Math.PI;
      hole.lineTo(
        Math.cos(angle) * r,
        archTop + Math.sin(angle) * r,
      );
    }
    hole.lineTo(r, 0);
    hole.closePath();
    shape.holes.push(hole);

    return new THREE.ExtrudeGeometry(shape, {
      depth,
      bevelEnabled: false,
    });
  }, [width, height, depth, archRadius]);

  return (
    <mesh geometry={geometry} {...props}>
      <meshStandardMaterial color={color} roughness={0.85} metalness={0.02} />
    </mesh>
  );
}
