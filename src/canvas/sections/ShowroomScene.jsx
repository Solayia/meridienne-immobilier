import { useTexture, Text } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const BIENS = [
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1024&q=75',
    position: [-4, 1.8, 0],
    rotation: [0, Math.PI / 9, 0],
    size: [3, 2.2],
    title: 'Hôtel particulier',
    lieu: 'Saint-Étienne',
    prix: '1 850 000 €',
    surface: '320 m²',
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=75',
    position: [4, 1.8, -3],
    rotation: [0, -Math.PI / 9, 0],
    size: [2.6, 2],
    title: 'Penthouse',
    lieu: 'Capitole',
    prix: '1 200 000 €',
    surface: '180 m²',
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=75',
    position: [-4, 1.8, -6],
    rotation: [0, Math.PI / 10, 0],
    size: [2.8, 2],
    title: 'Villa',
    lieu: 'Côte Pavée',
    prix: '980 000 €',
    surface: '250 m²',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1024&q=75',
    position: [4, 1.8, -9],
    rotation: [0, -Math.PI / 10, 0],
    size: [3.2, 2],
    title: 'Loft',
    lieu: 'Les Carmes',
    prix: '720 000 €',
    surface: '145 m²',
  },
];

function PropertyFrame({ image, position, rotation, size, title, lieu, prix, surface }) {
  const texture = useTexture(image);
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y =
        position[1] + Math.sin(clock.elapsedTime * 0.25 + position[2]) * 0.015;
    }
  });

  const frameW = size[0] + 0.18;
  const frameH = size[1] + 0.18;

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      {/* Frame */}
      <mesh position={[0, 0, -0.04]}>
        <boxGeometry args={[frameW, frameH, 0.06]} />
        <meshPhysicalMaterial
          color="#1A1A1A"
          roughness={0.25}
          metalness={0.5}
          clearcoat={0.8}
        />
      </mesh>

      {/* Mat */}
      <mesh position={[0, 0, -0.005]}>
        <planeGeometry args={[size[0] + 0.06, size[1] + 0.06]} />
        <meshStandardMaterial color="#FAFAF5" roughness={0.95} />
      </mesh>

      {/* Photo */}
      <mesh position={[0, 0, 0.005]}>
        <planeGeometry args={size} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>

      {/* Price tag — small plaque under the frame */}
      <mesh position={[0, -(frameH / 2) - 0.2, 0]}>
        <planeGeometry args={[1.6, 0.28]} />
        <meshPhysicalMaterial
          color="#1A1A1A"
          roughness={0.3}
          metalness={0.4}
        />
      </mesh>
      <Text
        position={[0, -(frameH / 2) - 0.2, 0.01]}
        fontSize={0.1}
        color="#F5F0EB"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.08}
      >
        {`${title} · ${lieu}  —  ${prix}  ·  ${surface}`}
      </Text>

      {/* Spotlight from above */}
      <pointLight
        position={[0, 2.5, 1]}
        intensity={3}
        distance={5}
        color="#FFF5E8"
      />
    </group>
  );
}

/**
 * Showroom — luxury gallery space with properties on the walls.
 * Clean floor, subtle walls, properties alternating left/right.
 */
export default function ShowroomScene() {
  return (
    <group>
      {/* Floor — polished concrete feel */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, -6]}>
        <planeGeometry args={[16, 40]} />
        <meshPhysicalMaterial
          color="#E8E2DA"
          roughness={0.25}
          metalness={0.05}
          clearcoat={0.5}
          clearcoatRoughness={0.3}
        />
      </mesh>

      {/* Ceiling */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 4, -6]}>
        <planeGeometry args={[16, 40]} />
        <meshStandardMaterial color="#F8F4F0" roughness={0.95} />
      </mesh>

      {/* Left wall */}
      <mesh position={[-6.5, 2, -6]}>
        <boxGeometry args={[0.1, 4, 30]} />
        <meshPhysicalMaterial
          color="#F5F0EB"
          roughness={0.75}
          metalness={0.02}
        />
      </mesh>

      {/* Right wall */}
      <mesh position={[6.5, 2, -6]}>
        <boxGeometry args={[0.1, 4, 30]} />
        <meshPhysicalMaterial
          color="#F5F0EB"
          roughness={0.75}
          metalness={0.02}
        />
      </mesh>

      {/* Back wall (entrance behind us) */}
      <mesh position={[0, 2, 8]}>
        <boxGeometry args={[13, 4, 0.1]} />
        <meshPhysicalMaterial
          color="#F0EBE4"
          roughness={0.8}
        />
      </mesh>

      {/* Agency name on back wall */}
      <Text
        position={[0, 2.5, 7.9]}
        fontSize={0.6}
        color="#C4653A"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.15}
        fontWeight="bold"
      >
        MÉRIDIENNE
      </Text>
      <Text
        position={[0, 1.85, 7.9]}
        fontSize={0.15}
        color="#1A1A1A"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.25}
      >
        IMMOBILIER D'EXCEPTION
      </Text>

      {/* Terracotta accent line on left wall */}
      <mesh position={[-6.44, 3.2, -6]}>
        <boxGeometry args={[0.02, 0.04, 20]} />
        <meshBasicMaterial color="#C4653A" />
      </mesh>

      {/* Terracotta accent line on right wall */}
      <mesh position={[6.44, 3.2, -6]}>
        <boxGeometry args={[0.02, 0.04, 20]} />
        <meshBasicMaterial color="#C4653A" />
      </mesh>

      {/* Ceiling lights — recessed strips */}
      {[-2, 2].map((x) =>
        [-2, -6, -10, -14].map((z) => (
          <pointLight
            key={`${x}-${z}`}
            position={[x, 3.8, z]}
            intensity={1.5}
            distance={6}
            color="#FFF8F0"
          />
        )),
      )}

      {/* Properties */}
      {BIENS.map((bien, i) => (
        <PropertyFrame key={i} {...bien} />
      ))}
    </group>
  );
}
