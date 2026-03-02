import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { useControls } from "leva";

const Fox = () => {
    const fox = useGLTF("./Fox/glTF/Fox.gltf");
    // console.log(fox);
    // console.log(fox.animations);
    const animations = useAnimations(fox.animations, fox.scene);
    // First parameter is animation array and second is where we want the animation
    // console.log(animations);

    const { animationName } = useControls({
        animationName: { options: animations.names },
    });

    // useEffect(() => {
    //     const action = animations.actions.Run;
    //     // console.log(action);
    //     action.play();

    //     window.setTimeout(() => {
    //         animations.actions.Walk.play();
    //         animations.actions.Walk.crossFadeFrom(animations.actions.Run, 1);
    //     });
    // }, []);

    useEffect(() => {
        const action = animations.actions[animationName];
        // action.play();
        // action.fadeIn(0.5).play();
        action.reset().fadeIn(0.5).play();

        return () => {
            // console.log("dispose");
            action.fadeOut(0.5);
        };
    }, [animationName]);

    return (
        <primitive
            object={fox.scene}
            scale={0.02}
            position={[-2.5, 0, 2.5]}
            rotation-y={0.3}
        />
    );
};

export default Fox;
