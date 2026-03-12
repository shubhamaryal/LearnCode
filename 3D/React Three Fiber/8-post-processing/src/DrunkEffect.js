import { Effect, BlendFunction } from "postprocessing";
import { Uniform } from "three";

const fragmentShader = /* glsl */ `

    uniform float frequency;
    uniform float amplitude;
    uniform float offset;

    void mainUv(inout vec2 uv){
        // uv.y += sin(uv.x * 10.0) * 0.1;
        // uv.y += sin(uv.x * frequency) * amplitude;
        uv.y += sin(uv.x * frequency + offset) * amplitude;
    }

    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
        // outputColor = vec4(uv, 1.0, 1.0);
        // outputColor = inputColor;
        // vec4 color = inputColor;
        // color.rgb *= vec3(0.8, 1.0, 0.5);
        // outputColor = color;
        outputColor = vec4(0.8 ,1.0, 0.5, inputColor.a);
    }
`;

// export default class DrunkEffect {
export default class DrunkEffect extends Effect {
    // constructor(props) {
    // constructor({ frequency, amplitude, blendFunction }) {
    constructor({
        frequency,
        amplitude,
        blendFunction = BlendFunction.DARKEN,
    }) {
        super("DrunkEffect", fragmentShader, {
            blendFunction: blendFunction,
            uniforms: new Map([
                // ["frequency", { value: frequency }],
                // ["amplitude", { value: amplitude }],
                ["frequency", new Uniform(frequency)],
                ["amplitude", new Uniform(amplitude)],
                ["offset", new Uniform(0)],
            ]),
        });
    }

    update(renderer, inputBuffer, deltaTime) {
        // console.log("update");
        // this.uniforms.get("offset").value += 0.03;
        this.uniforms.get("offset").value += deltaTime;
    }
}
