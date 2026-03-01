import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import Model from "./Model";
// console.log(DRACOLoader)
import { Suspense } from "react";

export default function Experience() {
    // const model = useLoader(GLTFLoader, "./hamburger.glb");
    // console.log(model)

    // const model = useLoader(GLTFLoader, "./hamburger-draco.glb", (loader) => {
    //     // console.log(loader);
    //     const dracoLoader = new DRACOLoader();
    //     dracoLoader.setDecoderPath("./draco/");
    //     loader.setDRACOLoader(dracoLoader);
    // });
    // const model = useLoader(
    //     GLTFLoader,
    //     "./FlightHelmet/glTF/FlightHelmet.gltf",
    //     (loader) => {
    //         const dracoLoader = new DRACOLoader();
    //         dracoLoader.setDecoderPath("./draco/");
    //         loader.setDRACOLoader(dracoLoader);
    //     },
    // );

    return (
        <>
            <Perf position="top-left" />
            <OrbitControls makeDefault />
            <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />
            {/* <mesh castShadow position-x={-2}>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>
            <mesh castShadow position-x={2} scale={1.5}>
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh> */}
            <mesh
                receiveShadow
                position-y={-1}
                rotation-x={-Math.PI * 0.5}
                scale={10}
            >
                <planeGeometry />
                <meshStandardMaterial color="greenyellow" />
            </mesh>

            {/* <primitive object={model.scene} scale={0.35} /> */}
            {/* <primitive object={model.scene} scale={5} position-y={-1} /> */}

            {/* <Suspense> */}
            <Suspense
                fallback={
                    <mesh position-y={0.5} scale={[2, 3, 2]}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshBasicMaterial wireframe color={"red"} />
                    </mesh>
                }
            >
                <Model />
            </Suspense>
        </>
    );
}
