import { useMemo } from 'react';
import * as THREE from 'three';

/**
 * Procedural arch geometry — a semicircular opening cut from a rectangular wall.
 * Built from merged box + half-torus for the curve.
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
    const r = archRadius;

    // Outer rectangle
    shape.moveTo(-hw, 0);
    shape.lineTo(-hw, height);
    shape.lineTo(hw, height);
    shape.lineTo(hw, 0);
    shape.lineTo(-hw, 0);

    // Inner arch hole
    const hole = new THREE.Path();
    hole.moveTo(-r, 0);
    hole.lineTo(-r, height - r - 1);
    hole.absarc(0, height - r - 1, r, Math.PI, 0, true);
    hole.lineTo(r, 0);
    hole.lineTo(-r, 0);
    shape.holes.push(hole);

    const extrudeSettings = { depth, bevelEnabled: false };
    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, [width, height, depth, archRadius]);

  return (
    <mesh geometry={geometry} {...props}>
      <meshStandardMaterial color={color} roughness={0.85} metalness={0.02} />
    </mesh>
  );
}
