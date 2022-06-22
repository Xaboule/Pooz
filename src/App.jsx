import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { MeshBasicMaterial } from "three";
import "./App.css";

function Bouate() {
const box = useRef()

return (
  <mesh ref={box}>
      <OrbitControls />
      <PerspectiveCamera fov={50} />
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshBasicMaterial color={"red"} />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas>
      <Bouate />
    </Canvas>
  );
}
