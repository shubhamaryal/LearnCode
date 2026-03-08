import { forwardRef } from "react";
import DrunkEffect from "./DrunkEffect";

// export default function Drunk(props) {
//     // const effect = new DrunkEffect();
//     const effect = new DrunkEffect(props);
//     return (
//         // <mesh>
//         //     <boxGeometry />
//         // </mesh>

//         <primitive object={effect} />
//     );
// }
export default forwardRef(function Drunk(props, ref) {
    const effect = new DrunkEffect(props);

    return <primitive ref={ref} object={effect} />;
});
