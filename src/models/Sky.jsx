import React , {useRef} from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import skyScene from '../assets/3d/sky.glb'
import { Declaration } from 'postcss'

const Sky = ({isRotating}) => {
    const skyRef = useRef();
    const sky = useGLTF(skyScene);

    useFrame((_, delta)=>{
        if(isRotating){
            skyRef.current.rotation.y += 0.2 * delta;
        }
    })

  return (
    <mesh ref={skyRef}>
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky