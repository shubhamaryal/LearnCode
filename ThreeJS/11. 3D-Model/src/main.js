// Import necessary Three.js components
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = -8;
camera.position.x = 9;
camera.position.y = 3;

const canvas = document.getElementById("canvas");

// Create a renderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.outputEncoding = THREE.sRGBEncoding;

// Make canvas responsive
function resizeCanvasToDisplaySize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  // Update canvas style
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  
  // Update camera
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  
  // Update renderer
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

// Initial resize
resizeCanvasToDisplaySize();

// Load HDRI environment map
const rgbeLoader = new RGBELoader();
rgbeLoader.load(
  "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/autumn_field_1k.hdr",
  function (texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping;

    // scene.background = texture;
    scene.environment = texture;
  }
);

const loader = new GLTFLoader();

loader.load(
  // resource URL
  "./mustang.glb",
  // called when the resource is loaded
  function (gltf) {
    scene.add(gltf.scene);

    gltf.animations; // Array<THREE.AnimationClip>
    gltf.scene; // THREE.Group
    gltf.scenes; // Array<THREE.Group>
    gltf.cameras; // Array<THREE.Camera>
    gltf.asset; // Object
  },
  // called while loading is progressing
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  // called when loading has errors
  function (error) {
    console.log("An error happened");
  }
);

// Add a single box
// const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
// const boxMaterial = new THREE.MeshStandardMaterial({
//   color: 0x6699ff,
//   roughness: 0.5,
//   metalness: 0.5,
// });
// const box = new THREE.Mesh(boxGeometry, boxMaterial);
// scene.add(box);

// Add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;

// Handle window resize
window.addEventListener("resize", resizeCanvasToDisplaySize);

// Handle device orientation changes
window.addEventListener("orientationchange", resizeCanvasToDisplaySize);

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate box
  // box.rotation.x += 0.01;
  // box.rotation.y += 0.01;

  // Update controls
  controls.update();

  // Render the scene
  renderer.render(scene, camera);
}

// Start the animation loop
animate();
