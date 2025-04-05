// Context Safe
// without using useGSAP

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const App = () => {
  const boxRef = useRef();

  const { contextSafe } = useGSAP();

  const rotateBox = contextSafe(function () {
    gsap.to(boxRef.current, {
      rotate: 360,
      duration: 1
    });
  });

  return (
    <main>
      <button onClick={rotateBox}>Animate</button>
      <div ref={boxRef} className="box"></div>
    </main>
  );
};

export default App;
