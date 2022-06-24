import {
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshBasicMaterial, SpotLightHelper } from 'three';
import { Floor } from './Floor';
import { Walls } from './Walls';
import { WallsBlack } from './WallsBlack';
import { Toitoi } from './Toitoi';
import { Neon } from './Neon';
import './App.css';
import React, { Suspense, useEffect, useRef } from 'react';
import { Vector3 } from 'three';
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

function Lights({ vec = new Vector3([0,0,-10]), ...props }) {
  const light = useRef()
  const viewport = useThree((state) => state.viewport)
  useFrame((state) => {
    light.current.target.position.lerp(vec.set(0,0 , -15), 0.1)
    light.current.target.updateMatrixWorld()
  })
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
    <perspectiveCamera/>
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

        {/* <CamMove/> */}
      <Toitoi />
      <Lights />
      <Floor />
      <WallsBlack/>
      {/* <Walls /> */}
      <Neon  />
    </>
  );
}
let c = <Canvas> </Canvas>;

export default function App() {
  return (
    <Suspense>
      <Canvas gl={{ antialias: true }}>
        <Room />
      </Canvas>
    </Suspense>
  );
}
