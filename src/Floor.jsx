// import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { MeshReflectorMaterial } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { TextureLoader } from 'three';

export function Floor() {
  const [roughness, normal, color, height] = useLoader(TextureLoader, [
    "./textures/checkers/vintage-roughness.png",
    "./textures/checkers/vintage-normal-ogl.png",
    "./textures/checkers/vintage-albedo.png",
    "./textures/checkers/vintage-height.png",
  ]);
  const box = useRef();

  return (
    <mesh ref={box} position={[0, -2, -9]} rotation-y={0}>
      <boxBufferGeometry args={[15, 0.5, 15]} />
      <MeshReflectorMaterial
        blur={[0, 0]} // Blur ground reflections (width, heigt), 0 skips blur
        mixBlur={0} // How much blur mixes with surface roughness (default = 1)
        mixStrength={1} // Strength of the reflections
        mixContrast={1} // Contrast of the reflections
        resolution={512} // Off-buffer resolution, lower=faster, higher=better quality, slower
        mirror={0.8} // Mirror environment, 0 = texture colors, 1 = pick up env colors
        depthScale={0} // Scale the depth factor (0 = no depth, default = 0)
        minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
        maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
        depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
        distortion={1}
        reflectorOffset={0.2}
        normalMap={normal}
        map={color}
        roughnessMap={roughness}
      />
    </mesh>
  );
}
