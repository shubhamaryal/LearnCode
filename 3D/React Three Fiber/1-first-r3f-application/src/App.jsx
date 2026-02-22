import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import * as THREE from "three";

const App = () => {
  return (
    // <Canvas>
    // <Canvas
    //   orthographic
    //   camera={{
    //     fov: 45,
    //     zoom: 100,
    //     near: 0.1,
    //     far: 200,
    //     position: [3, 2, 6],
    //   }}
    // >
    <Canvas
      // dpr={1}
      dpr={[1, 2]}
      // flat
      gl={{
        antialias: true,
        // toneMapping: THREE.CineonToneMapping
        // toneMapping: THREE.ACESFilmicToneMapping,
        // outputEncoding: THREE.LinearEncoding
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [3, 2, 6],
      }}
    >
      {/* <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh> */}

      <Experience />
    </Canvas>
  );
};

export default App;
