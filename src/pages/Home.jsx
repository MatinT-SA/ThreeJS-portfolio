import { Canvas } from "@react-three/fiber"
import {Suspense } from 'react'
import Loader from "../components/Loader"
import Island from '../models/Island'

{/* <div className="absolute top-28 right-0 left-0 z-10 flex items-center justify-center">
    POPUP
</div> */}


const Home = () => {
  return (
    <section className="w-full h-screen relative">
        <Canvas 
            className="w-full h-screen bg-transparent"
            camera={{near: 0.1, far: 1000}}
        >
            <Suspense fallback={<Loader />}>
                <directionalLight />
                <ambientLight />
                <pointLight />
                <spotLight />
                <hemisphereLight />

                <Island />
            </Suspense>
        </Canvas>
    </section>
  )
}

export default Home