import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

/**
 * 3D hero scene: a slowly distorting violet sphere + soft particle halo.
 * Subtle mouse parallax, GPU-friendly.
 */

function Blob() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.18;
    const px = state.pointer.x * 0.25;
    const py = state.pointer.y * 0.2;
    group.current.position.x += (px - group.current.position.x) * 0.04;
    group.current.position.y += (py - group.current.position.y) * 0.04;
  });

  return (
    <group ref={group}>
      <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1.4}>
        <mesh>
          <icosahedronGeometry args={[1.15, 12]} />
          <MeshDistortMaterial
            color="#6D28D9"
            emissive="#4C1D95"
            emissiveIntensity={0.6}
            roughness={0.16}
            metalness={0.4}
            distort={0.38}
            speed={1.8}
          />
        </mesh>
      </Float>
    </group>
  );
}

function ParticleHalo({ count = 600 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useRef<Float32Array>(new Float32Array(count * 3));

  if (positions.current[0] === 0 && positions.current[1] === 0 && positions.current[2] === 0) {
    for (let i = 0; i < count; i++) {
      const r = 2.2 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions.current[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions.current[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions.current[i * 3 + 2] = r * Math.cos(phi);
    }
  }

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y -= delta * 0.06;
      ref.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={positions.current} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#9B7EDE" size={0.02} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} opacity={0.8} />
    </Points>
  );
}

export function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 4, 3]} intensity={1.6} color="#fff7ed" />
      <pointLight position={[-3, -2, -2]} intensity={40} color="#4C1D95" />
      <pointLight position={[2, 3, -3]} intensity={30} color="#9B7EDE" />
      <Blob />
      <ParticleHalo />
    </Canvas>
  );
}
