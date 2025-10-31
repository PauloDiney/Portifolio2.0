import React, { useRef, Suspense, forwardRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Componente do modelo 3D
function RocketModel({ scale = 1, rotation = [0, 0, 0] }) {
  const meshRef = useRef();
  
  // Carregar materiais e objeto
  const materials = useLoader(MTLLoader, '/src/assets/3D/10475_Rocket_Ship_v1_L3.mtl');
  const obj = useLoader(OBJLoader, '/src/assets/3D/10475_Rocket_Ship_v1_L3.obj', (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  // Animação suave de rotação em torno do eixo Z
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.01;
    }
  });

  return (
    <primitive 
      ref={meshRef}
      object={obj} 
      scale={scale}
      rotation={rotation}
    />
  );
}

// Componente principal do Canvas
const Rocket3D = forwardRef(({ className, style }, ref) => {
  return (
    <div ref={ref} className={className} style={{ ...style, overflow: 'visible' }}>
      <Canvas
        camera={{ 
          position: [0, 0, 5], 
          fov: 50,
          near: 0.1,
          far: 1000
        }}
        style={{ width: '100%', height: '100%' }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          {/* Iluminação aprimorada */}
          <ambientLight intensity={1.2} />
          <directionalLight position={[10, 10, 5]} intensity={2} castShadow />
          <directionalLight position={[-10, 5, -5]} intensity={1.5} />
          <pointLight position={[5, 5, 5]} intensity={1.5} />
          <pointLight position={[-5, -5, 5]} intensity={1} />
          <hemisphereLight intensity={0.8} groundColor="#ffffff" />
          <spotLight 
            position={[0, 15, 10]} 
            intensity={1.5} 
            angle={0.5}
            penumbra={0.5}
            castShadow
          />
          
          {/* Modelo do foguete */}
          <RocketModel scale={0.01} rotation={[-Math.PI / 2, Math.PI / -3, Math.PI / 6]} />
          
          {/* Controles opcionais - remova se não quiser interação */}
          {/* <OrbitControls enableZoom={false} /> */}
        </Suspense>
      </Canvas>
    </div>
  );
});

Rocket3D.displayName = 'Rocket3D';

export default Rocket3D;
