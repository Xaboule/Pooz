import { useRef } from "react"

function Tube({position, rotation}){
  const tube = useRef()
return(
  <mesh ref={tube} position={position} rotation={rotation} >
  <cylinderBufferGeometry args={[0.1,0.1,15]}/>
  <meshStandardMaterial emissive={'#ff55ff'} emissiveIntensity={1}/>
  </mesh>
)
}

export function Neon(){
  return(
    <mesh>
      <Tube position={[0,-1.8,-1.4]} rotation={[-(Math.PI *0.5),0,-(Math.PI *0.5)]}/>
      <Tube position={[7.6,-1.8,-9]} rotation={[-(Math.PI *0.5),0,0]}/>
    </mesh>
  )
}