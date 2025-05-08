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
directional.position.set(2,1,1)
scene.add(directional)

const helper = new THREE.DirectionalLightHelper( directional, 2 );
scene.add( helper );

// point light 
let point = new THREE.PointLight("white",1,10,2)
point.position.set(1.6,-0.5,1)
scene.add(point)

const sphereSize = .2;
const pointLightHelper = new THREE.PointLightHelper( point, sphereSize );
scene.add( pointLightHelper );

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

// Light GUI controls
const lightsFolder = gui.addFolder("Lights");

// Ambient light controls
const ambientFolder = lightsFolder.addFolder("Ambient Light");
ambientFolder.add(ambient, "intensity").min(0).max(3).step(0.1).name("Intensity");
const ambientColorParams = { color: "#ffffff" };
ambientFolder.addColor(ambientColorParams, "color").onChange((value) => {
  ambient.color.set(value);
});

// Directional light controls
const directionalFolder = lightsFolder.addFolder("Directional Light");
directionalFolder.add(directional, "intensity").min(0).max(3).step(0.1).name("Intensity");
directionalFolder.add(directional.position, "x").min(-5).max(5).step(0.1).name("Position X");
directionalFolder.add(directional.position, "y").min(-5).max(5).step(0.1).name("Position Y");
directionalFolder.add(directional.position, "z").min(-5).max(5).step(0.1).name("Position Z");
const directionalColorParams = { color: "#ffffff" };
directionalFolder.addColor(directionalColorParams, "color").onChange((value) => {
  directional.color.set(value);
});
const directionalHelperParams = { visible: true };
directionalFolder.add(directionalHelperParams, "visible").name("Show Helper").onChange((value) => {
  helper.visible = value;
});

// Point light controls
const pointFolder = lightsFolder.addFolder("Point Light");
pointFolder.add(point, "intensity").min(0).max(3).step(0.1).name("Intensity");
pointFolder.add(point, "distance").min(0).max(20).step(0.5).name("Distance");
pointFolder.add(point, "decay").min(0).max(5).step(0.1).name("Decay");
pointFolder.add(point.position, "x").min(-5).max(5).step(0.1).name("Position X");
pointFolder.add(point.position, "y").min(-5).max(5).step(0.1).name("Position Y");
pointFolder.add(point.position, "z").min(-5).max(5).step(0.1).name("Position Z");
const pointColorParams = { color: "#ffffff" };
pointFolder.addColor(pointColorParams, "color").onChange((value) => {
  point.color.set(value);
});
const pointHelperParams = { visible: true };
pointFolder.add(pointHelperParams, "visible").name("Show Helper").onChange((value) => {
  pointLightHelper.visible = value;
});

// Open folders
lightsFolder.open();
ambientFolder.open();
directionalFolder.open();
pointFolder.open();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

function animate() {
  requestAnimationFrame(animate);

  controls.update();
  
  // Update light helpers when positions change
  helper.update();
  pointLightHelper.update();

  renderer.render(scene, camera);
}

animate();
