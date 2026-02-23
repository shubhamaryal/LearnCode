// import { useThree, extend } from '@react-three/fiber'
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import {
  MeshReflectorMaterial,
  Float,
  Text,
  Html,
  PivotControls,
  TransformControls,
  OrbitControls,
} from "@react-three/drei";
import { useRef } from "react";

// extend({ OrbitControls })

export default function Experience() {
  // const { camera, gl } = useThree()

  const cube = useRef();
  const sphere = useRef();

  return (
    <>
      {/* <orbitControls args={ [ camera, gl.domElement ] } /> */}

      {/* <OrbitControls /> */}
      {/* <OrbitControls enableDamping={false} /> */}
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      {/* <PivotControls> */}
      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={4}
        axisColors={["#9381ff", "#ff4d6d", "#7ae582"]}
        scale={100}
        fixed={true}
        // enabled={false}
      >
        <mesh ref={sphere} position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />

          <Html
            position={[1, 1, 0]}
            wrapperClass="label"
            center
            distanceFactor={7}
            occlude={[sphere, cube]}
          >
            That's a sphere.
          </Html>
        </mesh>
      </PivotControls>

      {/* <TransformControls> */}
      {/* <mesh position-x={2} scale={1.5}> */}
      <mesh ref={cube} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      {/* </TransformControls> */}

      {/* <TransformControls object={cube} /> */}
      {/* <TransformControls object={cube} mode="rotate" /> */}
      {/* <TransformControls object={cube} mode="scale" /> */}
      <TransformControls object={cube} mode="translate" />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        {/* <meshStandardMaterial color="greenyellow" /> */}
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          //   mixBlur={0}
          mirror={0.75}
          color="greenyellow"
        />
      </mesh>

      {/* <Html>Test</Html> */}

      <Float speed={5} floatIntensity={2}>
        <Text
          font="./bangers-v20-latin-regular.woff"
          fontSize={1}
          color="salmon"
          position-y={2}
          maxWidth={2}
          textAlign="center"
        >
          I LOVE R3F.
          {/* <meshNormalMaterial /> */}
        </Text>
      </Float>
    </>
  );
}
