import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";

export default function Experience() {
  // const controls = useControls({
  //     position: -2
  // })
  // console.log(controls)
  const { position } = useControls({
    // position: -2
    position: {
      //   value: -2,
      value: { x: -2, y: 0 },
      //   value: { x: -2, y: 0, z: 0 },
      min: -4,
      max: 4,
      step: 0.01,
    },
  });
  // console.log(position)

  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      {/* <mesh position-x={-2}> */}
      {/* <mesh position-x={position}> */}
      <mesh position={[position.x, position.y, 0]}>
        {/* <mesh position={[position.x, position.y, position.z]}> */}
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
