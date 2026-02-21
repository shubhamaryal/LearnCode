import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const App = () => {
  return (
    <Canvas>
      {/* <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh> */}

      <Experience /> 
    </Canvas>
  );
};

export default App;
