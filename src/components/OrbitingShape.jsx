import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial } from '@react-three/drei'

export default function OrbitingShape() {
  const group = useRef()
  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.x += delta * 0.16
      group.current.rotation.y += delta * 0.24
    }
  })
  return <group ref={group} rotation={[0.3, 0.4, 0.1]}><mesh><icosahedronGeometry args={[1.8, 1]} /><MeshTransmissionMaterial backside samples={4} thickness={0.5} roughness={0.1} transmission={0.85} ior={1.2} color="#e94e35" /></mesh><mesh scale={1.02}><icosahedronGeometry args={[1.8, 1]} /><meshBasicMaterial color="#ff8f72" wireframe transparent opacity={0.75} /></mesh></group>
}
