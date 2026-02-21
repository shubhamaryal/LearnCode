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

const Experience = () => {
  return (
    <>
      <mesh position-x={-2}>
        <sphereGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>

      <mesh rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshBasicMaterial color="mediumpurple"/>
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="greenyellow" />
      </mesh>
    </>
  );
};

export default Experience;
