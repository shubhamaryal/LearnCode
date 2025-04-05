import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {

  const randomX = gsap.utils.random(-500,500,100)
  const rotateX = gsap.utils.random(-360,360,30)

  const [xvalue, setXvalue] = useState(0)
  const [rotationn, setRotationn] = useState(0)

  const boxRef = useRef()

  useGSAP(()=>{
    gsap.to(boxRef.current,{
      x:xvalue,
      duration:1,
      rotate:rotationn,
    })
  },[xvalue,rotationn]) // scope ra dependencies duitai dina milxa 
                      // {scope:"", dependencies:[]}
                      // without dependencies chaldaina anumation
                      // duita image vye euta matra chalauna vye chai scope ni dinu pryo
  
  return (
    <main>
      <button onClick={()=>{
        setXvalue(randomX)
        setRotationn(rotateX)
      }}>Animate</button>
      <div ref={boxRef} className="box"></div>
    </main>
  );
};

export default App;