import { useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { LinearEncoding, RepeatWrapping, TextureLoader } from "three";


function Wall({rotation, position}){
  const [roughness, normal, color, height] = useLoader(TextureLoader, [
  "./textures/white/wall-rough.jpg",
  "./textures/white/wall-normal_opengl.png",
  "./textures/white/wall-color.jpg",
  "./textures/white/wall-height.png",
]);
useEffect (() => {
    [roughness, normal, color, height].forEach((t)=> {
    t.wrapS = RepeatWrapping;
    t.wrapT = RepeatWrapping;
    t.repeat.set(2,2);
});
normal.encoding = LinearEncoding;
}, [roughness, normal, color, height]);

    const wall = useRef();
    return (
    <mesh ref={wall} rotation={rotation} position={position}>
      <boxBufferGeometry args={[15,0.3,10]}  />
      <meshStandardMaterial 
      normalMap={normal}
      normalScale={1}
      roughnessMap={roughness}
      map={color}
      displacementMap={height}
      />
    </mesh>
  );
}
export function Walls(){
    return(
    <mesh>
    <Wall rotation={[-(Math.PI * 0.5),0,-(Math.PI * 0.5)]} position={[-7.5,3,-9]} color={'purple'}/>
    <Wall rotation={[-(Math.PI * 0.5),0,0]} position={[0,3,-16.5]} color={'blue'}/>

    </mesh>
    
    )
  }
 
