import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {

  // Method-1
  useGSAP(() => {
    gsap.to(".box1", {
      x: 500,
      duration: 2,
      delay: 1,
    });
  });
  //

  // Method-2
  const gsapRef = useRef();

  useGSAP(() => {
    gsap.to(gsapRef.current, {
      x: 500,
      duration: 2,
      delay: 1,
    });
  });
  //

  return (
    <main>
      <div className="box1"></div>
      <div ref={gsapRef} className="box2"></div>
    </main>
  );
};

export default App;