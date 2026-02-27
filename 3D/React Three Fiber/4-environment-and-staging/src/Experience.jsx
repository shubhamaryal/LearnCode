// import { useFrame } from "@react-three/fiber";
// import {
//   Lightformer,
//   Environment,
//   Sky,
//   ContactShadows,
//   RandomizedLight,
//   AccumulativeShadows,
//   SoftShadows,
//   BakeShadows,
//   useHelper,
//   OrbitControls,
// } from "@react-three/drei";
// import { useRef } from "react";
// import { Perf } from "r3f-perf";
// import { useControls } from "leva";
// import * as THREE from "three";

// export default function Experience() {
//   const directionLight = useRef();
//   useHelper(directionLight, THREE.DirectionalLightHelper, 1);

//   const cube = useRef();

//   useFrame((state, delta) => {
//     // const time = state.clock.elapsedTime;
//     // cube.current.position.x = 2 + Math.sin(time);
//     cube.current.rotation.y += delta * 0.2;
//   });

//   const { color, opacity, blur } = useControls("contact shadows", {
//     // color: "#000000",
//     // opacity: { value: 0.5, min: 0, max: 1 },
//     // blur: { value: 1, min: 0, ma: 10 },
//     // color: "#1d8f75",
//     color: "#4b2709",
//     opacity: { value: 0.4, min: 0, max: 1 },
//     blur: { value: 2.8, min: 0, ma: 10 },
//   });

//   const { sunPosition } = useControls("sky", {
//     sunPosition: { value: [1, 2, 3] },
//   });

//   // const { envMapIntensity } = useControls("environment maps", {
//   const { envMapIntensity, envMapHeight, envMapRadius, envMapScale } =
//     useControls("environment maps", {
//       // envMapIntensity: { value: 1, min: 0, max: 12 },
//       // envMapIntensity: { value: 3.5, min: 0, max: 12 },
//       envMapIntensity: { value: 7, min: 0, max: 12 },
//       envMapHeight: { value: 7, min: 0, max: 100 },
//       envMapRadius: { value: 28, min: 0, max: 1000 },
//       envMapScale: { value: 100, min: 0, max: 1000 },
//     });

//   return (
//     <>
//       {/* <Environment
//         background
//         files={[
//           "./environmentMaps/2/px.jpg",
//           "./environmentMaps/2/nx.jpg",
//           "./environmentMaps/2/py.jpg",
//           "./environmentMaps/2/ny.jpg",
//           "./environmentMaps/2/pz.jpg",
//           "./environmentMaps/2/nz.jpg",
//         ]}
//         environmentIntensity={envMapIntensity}
//       /> */}

//       {/* <Environment
//         background
//         files={"./environmentMaps/the_sky_is_on_fire_2k.hdr"}
//         environmentIntensity={envMapIntensity}
//       /> */}

//       {/* <Environment
//         background
//         preset="sunset"
//         environmentIntensity={envMapIntensity}
//       />
//       <mesh position-z={-5} scale={10}>
//         <planeGeometry />
//         <meshBasicMaterial color={"red"} />
//       </mesh> */}

//       {/* <Environment
//         background
//         preset="sunset"
//         environmentIntensity={envMapIntensity}
//       >
//         <mesh position-z={-5} scale={10}>
//           <planeGeometry />
//           <meshBasicMaterial color={"red"} />
//         </mesh>
//       </Environment> */}

//       {/* <Environment background environmentIntensity={envMapIntensity}>
//         <color args={["black"]} attach={"background"} />
//         <mesh position-z={-5} scale={10}>
//           <planeGeometry />
//           <meshBasicMaterial color={[4, 0, 0]} />
//         </mesh>
//       </Environment> */}

//       {/* <Environment
//         background
//         preset="sunset"
//         resolution={32}
//         environmentIntensity={envMapIntensity}
//       >
//         <color args={["black"]} attach={"background"} />
//         <Lightformer
//           position-z={-5}
//           scale={10}
//           color={"red"}
//           intensity={10}
//           form={"ring"}
//         />
//       </Environment> */}

//       <Environment
//         // background
//         preset="sunset"
//         ground={{
//           // height: 7,
//           // radius: 28,
//           // scale: 100,
//           height: envMapHeight,
//           radius: envMapRadius,
//           scale: envMapScale,
//         }}
//         environmentIntensity={envMapIntensity}
//       ></Environment>

//       <BakeShadows />

//       {/* <SoftShadows size={25} samples={10} focus={0} /> */}

//       <color args={["ivory"]} attach={"background"} />

//       <Perf position="top-left" />

//       <OrbitControls makeDefault />

//       {/* <AccumulativeShadows position={[0, -0.99, 0]} scale={10}> */}
//       {/* <AccumulativeShadows
//         position={[0, -0.99, 0]}
//         scale={10}
//         color="#316d39"
//         opacity={0.8}
//         // frames={1000}
//         // frames={100}
//         frames={Infinity}
//         temporal
//         blend={100}
//       > */}
//       {/* <directionalLight position={[1, 2, 3]} castShadow /> */}
//       {/* <RandomizedLight
//           amount={8}
//           radius={1}
//           ambient={0.5}
//           intensity={1}
//           position={[1, 2, 3]}
//           bitwas={0.001}
//         />
//       </AccumulativeShadows> */}

//       <ContactShadows
//         // position={[0, -0.99, 0]}
//         position={[0, 0, 0]}
//         scale={10}
//         resolution={512}
//         far={5}
//         color={color}
//         opacity={opacity}
//         blur={blur}
//         // frames={1}
//       />

//       {/* <directionalLight position={[1, 2, 3]} intensity={4.5} /> */}
//       {/* <directionalLight
//         ref={directionLight}
//         // position={[1, 2, 3]}
//         position={sunPosition}
//         intensity={4.5}
//         castShadow
//         shadow-mapSize={[1024, 1024]}
//         shadow-camera-near={1}
//         shadow-camera-far={10}
//         // shadow-camera-top={2}
//         // shadow-camera-right={2}
//         // shadow-camera-bottom={-2}
//         // shadow-camera-left={-2}
//         shadow-camera-top={5}
//         shadow-camera-right={5}
//         shadow-camera-bottom={-5}
//         shadow-camera-left={-5}
//       /> */}

//       {/* <ambientLight intensity={1.5} /> */}

//       {/* <Sky sunPosition={sunPosition} /> */}

//       {/* <mesh position-x={-2}> */}
//       {/* <mesh castShadow position-x={-2}> */}
//       <mesh castShadow position-x={-2} position-y={1}>
//         <sphereGeometry />
//         <meshStandardMaterial color="orange" />
//       </mesh>

//       {/* <mesh ref={cube} position-x={2} scale={1.5}> */}
//       {/* <mesh castShadow ref={cube} position-x={2} scale={1.5}> */}
//       <mesh castShadow ref={cube} position-x={2} scale={1.5} position-y={1}>
//         <boxGeometry />
//         <meshStandardMaterial color="mediumpurple" />
//       </mesh>

//       {/* <mesh
//         // receiveShadow
//         // position-y={-1}
//         position-y={0}
//         rotation-x={-Math.PI * 0.5}
//         scale={10}
//       >
//         <planeGeometry />
//         <meshStandardMaterial color="greenyellow" />
//       </mesh> */}
//     </>
//   );
// }

import { useFrame } from "@react-three/fiber";
import {
  Stage,
  Lightformer,
  Environment,
  Sky,
  ContactShadows,
  RandomizedLight,
  AccumulativeShadows,
  SoftShadows,
  BakeShadows,
  useHelper,
  OrbitControls,
} from "@react-three/drei";
import { useRef } from "react";
import { Perf } from "r3f-perf";
import { useControls } from "leva";
import * as THREE from "three";

export default function Experience() {
  const directionLight = useRef();
  useHelper(directionLight, THREE.DirectionalLightHelper, 1);

  const cube = useRef();

  useFrame((state, delta) => {
    cube.current.rotation.y += delta * 0.2;
  });

  const { color, opacity, blur } = useControls("contact shadows", {
    color: "#4b2709",
    opacity: { value: 0.4, min: 0, max: 1 },
    blur: { value: 2.8, min: 0, ma: 10 },
  });

  const { sunPosition } = useControls("sky", {
    sunPosition: { value: [1, 2, 3] },
  });

  const { envMapIntensity, envMapHeight, envMapRadius, envMapScale } =
    useControls("environment maps", {
      envMapIntensity: { value: 7, min: 0, max: 12 },
      envMapHeight: { value: 7, min: 0, max: 100 },
      envMapRadius: { value: 28, min: 0, max: 1000 },
      envMapScale: { value: 100, min: 0, max: 1000 },
    });

  return (
    <>
      <BakeShadows />

      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <Stage shadows={"contact"} environment={"sunset"}>
        <mesh castShadow position-x={-2} position-y={1}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
 
        <mesh castShadow ref={cube} position-x={2} scale={1.5} position-y={1}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </Stage>
    </>
  );
}
