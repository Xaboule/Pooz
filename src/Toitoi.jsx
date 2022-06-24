import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"


export function Toitoi(){
  const gltf = useLoader(GLTFLoader, './untitled.glb')

  // useEffect(() => {
  //   gltf.scene.scale.set(0.005, 0.005, 0.005);
  //   gltf.scene.position.set(0, -0.035, 0);
  //   gltf.scene.traverse((object) => {
  //     if (object instanceof Mesh) {
  //       object.castShadow = true;
  //       object.receiveShadow = true;
  //       object.material.envMapIntensity = 20;
  //     }
  //   });
  // }, [gltf]);
  return(
 <primitive object={gltf.scene} position={[0,-2,-13.8]} rotation={[0,3.1,0]} scale={[1.2,1.2,1.2]}/> 
  )
}