import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {

  const [value, setValue] = useState(0)
  const random = gsap.utils.random(-500,500,100)

  useGSAP(()=>{
    gsap.to(".circle",{
      x:value,
      duration:0.5,
    })
  },[value]) // works just like useEffect, tyo value change huda yo 
            // trigger hunxa

  return (
    <main>
      <button onClick={()=>{
        setValue(random)
      }}>Animate</button>
      <div className="circle"></div>
    </main>
  );
};

export default App;