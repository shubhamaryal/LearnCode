// const Experience = () => {
//   return (
//     // <mesh scale={[3, 2, 1]}>
//     // <mesh scale={1.5} position={[0, 0, -1]}>
//     // <mesh scale={1.5} position-x={1.5}>
//     <mesh rotation-y={Math.PI * 0.25} scale={1} position-x={2}>
//       {/* <torusKnotGeometry />
//       <meshNormalMaterial /> */}

//       {/* <sphereGeometry /> */}
//       {/* <sphereGeometry args={[1.5, 32, 32]} /> */}
//       <boxGeometry />
//       {/* <meshBasicMaterial /> */}
//       {/* <meshBasicMaterial args={[{ color: "red", wireframe: "true" }]} /> */}
//       <meshBasicMaterial color="purple" wireframe />
//       {/* <meshBasicMaterial color="purple" wireframe={false} /> */}
//     </mesh>
//   );
// };

// export default Experience;

import { useThree, extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import CustomObject from "./CustomComponent";

extend({ OrbitControls: OrbitControls });

const Experience = () => {
  //   const three = useThree();
  // console.log(three);
  const { camera, gl } = useThree();
  //   console.log(camera)
  //   console.log(gl)

  const cubeRef = useRef();
  const groupRef = useRef();

  useFrame((state, delta) => {
    // console.log(state.camera)
    // console.log(state.clock)
    // const angle = state.clock.elapsedTime;
    // // console.log(angle)
    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.position.z = Math.cos(angle) * 8;
    // state.camera.lookAt(0, 0, 0);

    // console.log(delta)
    // console.log('tick')
    // cubeRef.current.rotation.y += 0.01
    cubeRef.current.rotation.y += delta;
    // groupRef.current.rotation.y += delta;
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <group ref={groupRef}>
        <mesh position-x={-2}>
          <sphereGeometry />
          {/* <meshBasicMaterial color="orange" /> */}
          <meshStandardMaterial color="orange" />
        </mesh>

        <mesh
          ref={cubeRef}
          rotation-y={Math.PI * 0.25}
          position-x={2}
          scale={1.5}
        >
          <boxGeometry />
          {/* <meshBasicMaterial color="mediumpurple" /> */}
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </group>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        {/* <meshBasicMaterial color="greenyellow" /> */}
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      <CustomObject />
    </>
  );
};

export default Experience;
