import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  /*
    useGSAP(()=>{
        gsap.from(".box",{
            rotate:360,
            scale:0,
            duration:1,
            delay:0.5,
            opacity:0,
        })
    },{scope:".container"}) 
    */

  // container wala vitra ko box ko matra animate hunxa scope ma deko

  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".box", {
        rotate: 360,
        scale: 0,
        duration: 1,
        delay: 0.5,
        opacity: 0,
      });
    },
    { scope: container }
  );

  // scope ma ref ni pass grna milxa, id ko satto tei ho yo 2nd example ma

  // yesari hamle function sngai object ni pass grna milxa ani paxi kunai eutai
  // lai trigger garera use grna milxa

  return (
    <main>
      <div ref={container} className="container">
        <div className="circle"></div>
        <div className="box"></div>
      </div>

      <div className="something">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
    </main>
  );
};

export default App;
