import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Create scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

// Add high intensity directional light
const highIntensityLight = new THREE.DirectionalLight(0xffffff, 2.5);
highIntensityLight.position.set(3, 10, 2);
highIntensityLight.castShadow = true;
scene.add(highIntensityLight);

// Add helper for high intensity light
const highIntensityLightHelper = new THREE.DirectionalLightHelper(
  highIntensityLight,
  1
);
scene.add(highIntensityLightHelper);

// Configure shadow properties for better quality
highIntensityLight.shadow.mapSize.width = 2048;
highIntensityLight.shadow.mapSize.height = 2048;
highIntensityLight.shadow.camera.near = 0.5;
highIntensityLight.shadow.camera.far = 50;

// Add studio lighting
// Ambient light for overall illumination
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Main key light (front-right)
const keyLight = new THREE.DirectionalLight(0xffffff, 1);
keyLight.position.set(5, 5, 5);
scene.add(keyLight);
// Add helper for key light
const keyLightHelper = new THREE.DirectionalLightHelper(keyLight, 1);
scene.add(keyLightHelper);

// Fill light (front-left)
const fillLight = new THREE.DirectionalLight(0xffffff, 0.7);
fillLight.position.set(-5, 3, 5);
scene.add(fillLight);
// Add helper for fill light
const fillLightHelper = new THREE.DirectionalLightHelper(fillLight, 1);
scene.add(fillLightHelper);

// Back light (rim light)
const backLight = new THREE.DirectionalLight(0xffffff, 0.8);
backLight.position.set(0, 5, -5);
scene.add(backLight);
// Add helper for back light
const backLightHelper = new THREE.DirectionalLightHelper(backLight, 1);
scene.add(backLightHelper);

// Create camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 5);

// Create renderer
const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Create box geometry and material
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({
  color: 0x00ff88,
  roughness: 0.4,
  metalness: 0.7,
});

// Create mesh and add to scene
const boxMesh = new THREE.Mesh(boxGeometry, material);
scene.add(boxMesh);

// Handle window resize
window.addEventListener("resize", () => {
  // Update camera
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the box
  //   boxMesh.rotation.x += 0.01;
  //   boxMesh.rotation.y += 0.01;

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);
}

animate();
