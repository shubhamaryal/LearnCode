import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.outputEncoding = THREE.sRGBEncoding;
document.body.appendChild(renderer.domElement);


// LIGHTS

// abmient light
let ambient = new THREE.AmbientLight("white", 1)
scene.add(ambient)

// directional light
let directional = new THREE.DirectionalLight("white", 1)
directional.position.set(1,1,1)
scene.add(directional)

const textureLoader = new THREE.TextureLoader();

const color = textureLoader.load("./texture/color.jpg");
const normal = textureLoader.load("./texture/normal.png");
const roughness = textureLoader.load("./texture/roughness.jpg");

const geometry = new THREE.BoxGeometry(3, 1.8, 2);
const material = new THREE.MeshStandardMaterial({
  map: color,
  roughnessMap: roughness,
  normalMap: normal,
  roughness: 0.65,
  metalness: 0.25,
});

const cube = new THREE.Mesh(geometry, material);
cube.castShadow = true;
cube.receiveShadow = true;
cube.rotation.y = Math.PI / 6;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

scene.add(cube);

const gui = new GUI();

const cubeFolder = gui.addFolder("Cube");
const materialFolder = gui.addFolder("Material");

cubeFolder.add(cube.position, "x").min(-5).max(5).step(0.1).name("Position X");
cubeFolder.add(cube.position, "y").min(-5).max(5).step(0.1).name("Position Y");
cubeFolder.add(cube.position, "z").min(-5).max(5).step(0.1).name("Position Z");

cubeFolder
  .add(cube.rotation, "x")
  .min(0)
  .max(Math.PI * 2)
  .step(0.01)
  .name("Rotation X");
cubeFolder
  .add(cube.rotation, "y")
  .min(0)
  .max(Math.PI * 2)
  .step(0.01)
  .name("Rotation Y");
cubeFolder
  .add(cube.rotation, "z")
  .min(0)
  .max(Math.PI * 2)
  .step(0.01)
  .name("Rotation Z");

cubeFolder.add(cube.scale, "x").min(0.1).max(3).step(0.1).name("Scale X");
cubeFolder.add(cube.scale, "y").min(0.1).max(3).step(0.1).name("Scale Y");
cubeFolder.add(cube.scale, "z").min(0.1).max(3).step(0.1).name("Scale Z");

materialFolder
  .add(material, "roughness")
  .min(0)
  .max(1)
  .step(0.01)
  .name("Roughness");
materialFolder
  .add(material, "metalness")
  .min(0)
  .max(1)
  .step(0.01)
  .name("Metalness");

const materialParams = {
  color: "#" + material.color.getHexString(),
};

materialFolder.addColor(materialParams, "color").onChange((value) => {
  material.color.set(value);
});

const mapControls = {
  useNormalMap: true,
  useRoughnessMap: true,
};

materialFolder
  .add(mapControls, "useNormalMap")
  .name("Normal Map")
  .onChange((value) => {
    material.normalMap = value ? normal : null;
    material.needsUpdate = true;
  });

materialFolder
  .add(mapControls, "useRoughnessMap")
  .name("Roughness Map")
  .onChange((value) => {
    material.roughnessMap = value ? roughness : null;
    material.needsUpdate = true;
  });

cubeFolder.open();
materialFolder.open();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

function animate() {
  requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera);
}

animate();
