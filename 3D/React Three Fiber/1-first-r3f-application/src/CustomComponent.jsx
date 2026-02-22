import { useEffect, useRef, useMemo } from "react";
import * as THREE from "three";

const CustomComponent = () => {
  const geometryRef = useRef();

  //   geometryRef.current.computeVertexNormals();

  const verticesCount = 10 * 3; // 3 means the vertices; 3 vertices = a triangle ; means there will be 10 triangle

  //   const positions = new Float32Array(verticesCount * 3);

  //   for (let i = 0; i < verticesCount * 3; i++) {
  //     positions[i] = (Math.random() - 0.5) * 3;
  //   }

  const positions = useMemo(() => {
    const positions = new Float32Array(verticesCount * 3);

    for (let i = 0; i < verticesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 3;
    }

    return positions;
  }, []);

  useEffect(() => {
    // console.log(geometryRef.current)
    geometryRef.current.computeVertexNormals();
  }, []);

  return (
    <mesh>
      {/* <boxGeometry /> */}
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach={"attributes-position"}
          count={verticesCount}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      {/* <meshBasicMaterial color={"red"} /> */}
      {/* <meshBasicMaterial color={"red"} side={THREE.DoubleSide} /> */}
      <meshStandardMaterial color={"red"} side={THREE.DoubleSide} />
    </mesh>
  );
};

export default CustomComponent;
