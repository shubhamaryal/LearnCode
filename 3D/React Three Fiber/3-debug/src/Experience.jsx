import { OrbitControls } from "@react-three/drei";
import { button, useControls } from "leva";

export default function Experience() {
  // const controls = useControls({
  //     position: -2
  // })
  // console.log(controls)
  //   const { position } = useControls({
  //   const { position, color } = useControls({
  //   const { position, color, visible } = useControls({
  const { position, color, visible } = useControls("sphere", {
    // position: -2
    position: {
      //   value: -2,
      value: { x: -2, y: 0 },
      //   value: { x: -2, y: 0, z: 0 },
      min: -4,
      max: 4,
      step: 0.01,
      joystick: "invertY",
    },
    color: "#ff0000",
    // color: "rgb(255, 0,0)",
    visible: true,
    myInterval: {
      min: 0,
      max: 10,
      value: [4, 5],
    },
    clickMe: button(() => console.log("ok")),
    choice: { options: ["a", "b", "c"] },
  });
  // console.log(position)
  //   console.log(color);

  const { scale } = useControls("cube", {
    scale: {
      value: 1.5,
      step: 0.01,
      min: 0,
      max: 5,
    },
  });

  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      {/* <mesh position-x={-2}> */}
      {/* <mesh position-x={position}> */}
      <mesh position={[position.x, position.y, 0]} visible={visible}>
        {/* <mesh position={[position.x, position.y, position.z]}> */}
        <sphereGeometry />
        {/* <meshStandardMaterial color="orange" /> */}
        <meshStandardMaterial color={color} />
      </mesh>

      {/* <mesh position-x={2} scale={1.5}> */}
      <mesh position-x={2} scale={scale}>
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
