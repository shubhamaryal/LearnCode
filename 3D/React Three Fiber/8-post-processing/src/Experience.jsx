import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import {
    // SSR,
    EffectComposer,
    Vignette,
    Glitch,
    Noise,
    Bloom,
    DepthOfField,
} from "@react-three/postprocessing";
import { BlendFunction, GlitchMode } from "postprocessing";
import Drunk from "./Drunk";
import { useRef } from "react";

export default function Experience() {
    const drunkRef = useRef();
    return (
        <>
            <color args={["#ffffff"]} attach={"background"} />
            {/* <color args={["#000000"]} attach={"background"} /> */}

            {/* <EffectComposer multisampling={0}></EffectComposer> */}
            <EffectComposer disableNormalPass>
                {/* <Vignette
                    offset={0.3}
                    darkness={0.9}
                    // blendFunction={BlendFunction.COLOR_BURN}
                    blendFunction={BlendFunction.NORMAL}
                /> */}

                {/* <Glitch
                    delay={[0.5, 1]}
                    duration={[0.1, 0.3]}
                    strength={[0.2, 0.4]}
                    // mode={GlitchMode.CONSTANT_MILD}
                /> */}

                {/* <Noise premultiply blendFunction={BlendFunction.SOFT_LIGHT} /> */}

                {/* <Bloom mipmapBlur intensity={0.5} luminanceThreshold={0} /> */}

                {/* <DepthOfField
                    focusDistance={0.025}
                    focalLength={0.025}
                    bokehScale={6}
                /> */}

                {/* <SSR /> */}

                <Drunk
                    ref={drunkRef}
                    frequency={2}
                    amplitude={0.1}
                    blendFunction={BlendFunction.DARKEN}
                />
            </EffectComposer>

            <Perf position="top-left" />

            <OrbitControls makeDefault />

            <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />

            <mesh castShadow position-x={-2}>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>

            <mesh castShadow position-x={2} scale={1.5}>
                <boxGeometry />
                {/* <meshStandardMaterial
                    // color="mediumpurple"
                    // color={[1.5, 1, 4]}
                    // color="orange"
                    color="#ffffff"
                    emissive={"orange"}
                    emissiveIntensity={2}
                    toneMapped={false}
                /> */}
                {/* <meshBasicMaterial color={[1.5, 1, 4]} toneMapped={false} /> */}
                <meshStandardMaterial color={"mediumpurple"} />
            </mesh>

            <mesh
                receiveShadow
                position-y={-1}
                rotation-x={-Math.PI * 0.5}
                scale={10}
            >
                <planeGeometry />
                <meshStandardMaterial
                    color="greenyellow"
                    metalness={0}
                    roughness={0}
                />
            </mesh>
        </>
    );
}
