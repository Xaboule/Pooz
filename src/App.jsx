import {
  OrbitControls,
  PerspectiveCamera,
  SpotLight,
  useHelper,
} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshBasicMaterial, SpotLightHelper } from 'three';
import { Floor } from './Floor';
import { Walls } from './Walls';
import { Toitoi } from './Toitoi';
import { Neon } from './Neon';
import './App.css';
import { Suspense, useRef } from 'react';
import { Vector3 } from 'three';

function Lights({ vec = new Vector3([0,0,-10]), ...props }) {
  const light = useRef()
  const viewport = useThree((state) => state.viewport)
  useFrame((state) => {
    light.current.target.position.lerp(vec.set(0,0 , -15), 0.1)
    light.current.target.updateMatrixWorld()
  })
  useHelper(light, SpotLightHelper, 'cyan');
  return <spotLight ref={light}
    intensity={2}
    position={[0, 15, -5]}
    shadow-mapSize-width={64}
    shadow-mapSize-height={64}
   target-position={[0,-5,0]}
   distance={20}
    castShadow
    angle={0.2}
    penumbra={0.1}
    shadow-bias={-0.001}
  />;
}
function Room() {
  return (
    <>
      <OrbitControls />
      <orthographicCamera fov={90} />
      <spotLight
        color={'#66ffff'}
        intensity={0.5}
        position={[0, 4, -10]}
        rotation={[13, 24, 2]}
        angle={2}
        penumbra={1}
      />
      <spotLight
        color={'#ff66ff'}
        intensity={0.5}
        position={[6, 4, 10]}
        angle={5}
        penumbra={1}
      />

      <Toitoi />
      <Lights />
      <Floor />
      <Walls />
      <Neon />
    </>
  );
}
let c = <Canvas> </Canvas>;
console.log(c);

export default function App() {
  return (
    <Suspense>
      <Canvas gl={{ antialias: true }}>
        <Room />
      </Canvas>
    </Suspense>
  );
}
