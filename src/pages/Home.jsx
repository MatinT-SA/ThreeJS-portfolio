import { Canvas } from "@react-three/fiber"
import { useState, Suspense, useEffect, useRef } from 'react'
import Loader from "../components/Loader"
import Island from '../models/Island'
import Sky from "../models/Sky"
import Bird from "../models/Bird"
import Plane from "../models/Plane"
import HomeInfo from "../components/HomeInfo"
import lithium from '../assets/lithium.mp3'
import { soundoff, soundon } from "../assets/icons"


const Home = () => {
    const audioRef = useRef(new Audio(lithium));
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;
    const [isPlayingMusic, setIsPlayingMusic] = useState(false);

    useEffect(() => {
        if (isPlayingMusic) {
            audioRef.current.play();
        }

        return () => {
            audioRef.current.pause();
        }
    }, [isPlayingMusic])

    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);

    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -45];
        let rotation = [0.1, -1.5, 0.5];

        if (window.innerWidth < 768) {
            screenScale = [0.85, 0.85, 0.85];
            screenPosition = [0, -7.5, -47];
        } else {
            screenScale = [1, 1, 1];
        }

        return [screenScale, screenPosition, rotation];
    }

    const adjustPlaneForScreenSize = () => {
        let screenScale, screenPosition;

        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, -1.5, 10];
        } else {
            screenScale = [3.5, 3.5, 3.5];
            screenPosition = [0, -3.5, -4.5];
        }

        return [screenScale, screenPosition];
    }

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

    const [planeScale, planePosition] = adjustPlaneForScreenSize();


    return (
        <section className="w-full h-screen relative">
            {<div className="absolute top-24 right-0 left-0 z-10 flex items-center justify-center">
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>}

            <Canvas
                className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
                camera={{ near: 0.4, far: 800 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[12, 4, -3]} intensity={2} />
                    <ambientLight intensity={0.6} />
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={0.7} />

                    <Bird />
                    <Sky isRotating={isRotating} />
                    <Island
                        scale={islandScale}
                        position={islandPosition}
                        rotation={[0.2, 4.705, 0]}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                    <Plane
                        planeScale={planeScale}
                        planePosition={planePosition}
                        isRotating={isRotating}
                        rotation={[0, 1.15, 0.11]}
                    />
                </Suspense>
            </Canvas>

            <div className="sound absolute bottom-2 left-2">
                <img
                    src={!isPlayingMusic ? soundoff : soundon}
                    alt="sound"
                    className="w-10 h-10 cursor-pointer object-contain"
                    onClick={()=>setIsPlayingMusic(!isPlayingMusic)}
                />
            </div>
        </section>
    )
}

export default Home