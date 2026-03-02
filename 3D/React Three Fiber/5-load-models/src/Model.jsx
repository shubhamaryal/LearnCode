// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

// const Model = () => {
//     // const model = useLoader(
//     //     GLTFLoader,
//     //     "./FlightHelmet/glTF/FlightHelmet.gltf",
//     //     (loader) => {
//     //         const dracoLoader = new DRACOLoader();
//     //         dracoLoader.setDecoderPath("./draco/");
//     //         loader.setDRACOLoader(dracoLoader);
//     //     },
//     // );
//     const model = useLoader(GLTFLoader, "./hamburger.glb", (loader) => {
//         const dracoLoader = new DRACOLoader();
//         dracoLoader.setDecoderPath("./draco/");
//         loader.setDRACOLoader(dracoLoader);
//     });
//     // return <primitive object={model.scene} scale={5} position-y={-1} />;
//     return <primitive object={model.scene} scale={0.35} position-y={-1} />;
// };

// export default Model;

import { Clone, useGLTF } from "@react-three/drei";

// console.log(useGLTF)
// console.log(useGLTF.preload)

const Model = () => {
    // const model = useGLTF("./hamburger.glb");
    const model = useGLTF("./hamburger-draco.glb");
    // return <primitive object={model.scene} scale={0.35} position-y={-1} />;
    return (
        <>
            <Clone object={model.scene} scale={0.35} position-x={-4} />
            <Clone object={model.scene} scale={0.35} position-x={0} />
            <Clone object={model.scene} scale={0.35} position-x={4} />
        </>
    );
};

useGLTF.preload("./hamburger-draco.glb");

export default Model;
