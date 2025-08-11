uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
// uniform mat4 modelViewMatrix;

attribute vec3 position;
attribute float aRandom; 

// float loremIpsum() {
//     float a = 1.0; 
//     float b = 2.0; 
    
//     return a + b; 
// }

// void loremIpsum() {
//     float a = 1.0; 
//     float b = 2.0; 
// }

// float loremIpsum(float a, float b) {
//     return a + b; 
// }

void main () {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    // modelPosition.y += 1.0;
    // modelPosition.z += sin(modelPosition.x * 10.0) * 0.1 ;
    modelPosition.z += aRandom * 0.1;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;

    // float result = loremIpsum();
    // float result = loremIpsum(1.0, 2.0);

    // vec2 foo = vec2(1.0, 2.0);

    // vec2 foo = vec2(0.0); 
    // foo.x = 1.0; 
    // foo.y = 2.0; 

    // vec2 foo = vec2(1.0, 2.0); 
    // foo *= 2.0;

    // vec3 foo = vec3(0.0);
    // vec3 bar = vec3(1.0, 2.0, 3.0);
    // bar.z = 4.0;

    // vec3 purpleColor = vec3(0.0);
    // purpleColor.r = 0.5;
    // purpleColor.b = 1.0;

    // vec2 foo = vec2(1.0, 2.0);
    // vec3 bar = vec3(foo, 3.0);

    // vec3 foo = vec2(1.0, 2.0, 3.0);
    // vec2 bar = foo.xy;

    // vec4 foo = vec4(1.0, 2.0, 3.0, 4.0);
    // vec4 bar = vec4(foo.zw, vec2(5.0, 6.0));

    // gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
    // gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    // gl_Position.x += 0.5;
    // gl_Position.y += 0.5;
}
