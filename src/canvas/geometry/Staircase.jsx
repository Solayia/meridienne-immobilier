import { useMemo } from 'react';

/**
 * Procedural staircase — a series of stacked boxes.
 */
export default function Staircase({
  steps = 6,
  stepWidth = 2,
  stepHeight = 0.25,
  stepDepth = 0.4,
  color = '#F5F0EB',
  ...props
}) {
  const stepsData = useMemo(() => {
    return Array.from({ length: steps }, (_, i) => ({
      position: [0, i * stepHeight + stepHeight / 2, -i * stepDepth],
      width: stepWidth,
      height: stepHeight,
      depth: stepDepth,
    }));
  }, [steps, stepWidth, stepHeight, stepDepth]);

  return (
    <group {...props}>
      {stepsData.map((s, i) => (
        <mesh key={i} position={s.position}>
          <boxGeometry args={[s.width, s.height, s.depth]} />
          <meshStandardMaterial
            color={color}
            roughness={0.82}
            metalness={0.02}
          />
        </mesh>
      ))}
    </group>
  );
}
