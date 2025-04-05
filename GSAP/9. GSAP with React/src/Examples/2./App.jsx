import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  /*
    // to use both at once
    useGSAP(()=>{
        gsap.to(".box",{
            rotate:360,
            duration:2,
            delay:1
        })
    }) 
    */

    // to use a particular one we can use hook i.e useRef
    const boxRef = useRef()

    useGSAP(()=>{
        gsap.to(boxRef.current,{
            rotate:360,
            duration:2,
            delay:1
        })
    }) 

  return (
    <main>
      <div className="container">
        <div className="circle"></div>
        <div ref={boxRef} className="box"></div>
      </div>

      <div className="something">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
    </main>
  );
};

export default App;
