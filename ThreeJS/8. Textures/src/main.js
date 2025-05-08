// Import necessary Three.js components
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111); // Set background color

// Create a camera, which determines what we'll see when we render the scene
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Create a renderer and attach it to our document
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true; // Enable shadow mapping
renderer.outputEncoding = THREE.sRGBEncoding; // Ensure proper color encoding
document.body.appendChild(renderer.domElement);

// Improved lighting setup for better texture visibility
// Create a stronger ambient light for base illumination
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

// Main key light (front)
const keyLight = new THREE.DirectionalLight(0xffffff, 1.5);
keyLight.position.set(0, 5, 10);
keyLight.castShadow = true;
keyLight.shadow.mapSize.width = 2048;
keyLight.shadow.mapSize.height = 2048;
scene.add(keyLight);

// Fill light (side)
const fillLight = new THREE.DirectionalLight(0xffffff, 1);
fillLight.position.set(10, 2, 0);
fillLight.castShadow = true;
scene.add(fillLight);

// Back light to highlight edges
const backLight = new THREE.DirectionalLight(0xffffff, 0.8);
backLight.position.set(0, 5, -10);
scene.add(backLight);

// Create helpers for the lights
const keyLightHelper = new THREE.DirectionalLightHelper(keyLight, 1);
scene.add(keyLightHelper);

const fillLightHelper = new THREE.DirectionalLightHelper(fillLight, 1);
scene.add(fillLightHelper);

const backLightHelper = new THREE.DirectionalLightHelper(backLight, 1);
scene.add(backLightHelper);

// Load textures
const textureLoader = new THREE.TextureLoader();

// Load the textures with proper file extensions
const color = textureLoader.load('./texture/color.jpg'); // Base color/diffuse texture
const normal = textureLoader.load('./texture/normal.png'); // Normal map
const roughness = textureLoader.load('./texture/roughness.jpg'); // Roughness map

// Create a box geometry and a material with textures
const geometry = new THREE.BoxGeometry(3, 1.8, 2);
const material = new THREE.MeshStandardMaterial({ 
  map: color, // Base color texture
  roughnessMap: roughness, // Roughness map
  normalMap: normal, // Normal map
  roughness: 0.65, // Adjust base roughness
  metalness: 0.25, // Add some metalness for better light reflection
});

const cube = new THREE.Mesh(geometry, material);
cube.castShadow = true;
cube.receiveShadow = true;
// Rotate the cube slightly to better show the textures
cube.rotation.y = Math.PI / 6;

const controls = new OrbitControls(camera, renderer.domElement);

// Enable damping (inertia) for smoother controls
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

// Add the cube to the scene
scene.add(cube);

// Handle window resize
window.addEventListener('resize', () => {
  // Update camera aspect ratio
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  
  // Update renderer size
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  
  // Update controls
  controls.update();
  
  // Render the scene
  renderer.render(scene, camera);
}

// Start the animation loop
animate();
