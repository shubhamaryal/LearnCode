import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Create scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

// Create camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 10);

// Create renderer
const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Create group to hold all meshes
const group = new THREE.Group();
scene.add(group);

// Create individual geometries and meshes
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshNormalMaterial();
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
boxMesh.position.set(-2.5, -2.5, 0);
group.add(boxMesh);

const sphereGeometry = new THREE.SphereGeometry(0.7, 32, 32);
const sphereMaterial = new THREE.MeshNormalMaterial();
const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphereMesh.position.set(0, -2.5, 0);
group.add(sphereMesh);

const coneGeometry = new THREE.ConeGeometry(0.7, 1.5, 32);
const coneMaterial = new THREE.MeshNormalMaterial();
const coneMesh = new THREE.Mesh(coneGeometry, coneMaterial);
coneMesh.position.set(2.5, -2.5, 0);
group.add(coneMesh);

const torusGeometry = new THREE.TorusGeometry(0.7, 0.3, 16, 32);
const torusMaterial = new THREE.MeshNormalMaterial();
const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
torusMesh.position.set(-2.5, 0, 0);
group.add(torusMesh);

const torusKnotGeometry = new THREE.TorusKnotGeometry(0.6, 0.25, 100, 16);
const torusKnotMaterial = new THREE.MeshNormalMaterial();
const torusKnotMesh = new THREE.Mesh(torusKnotGeometry, torusKnotMaterial);
torusKnotMesh.position.set(0, 0, 0);
group.add(torusKnotMesh);

const cylinderGeometry = new THREE.CylinderGeometry(0.7, 0.7, 1.5, 32);
const cylinderMaterial = new THREE.MeshNormalMaterial();
const cylinderMesh = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
cylinderMesh.position.set(2.5, 0, 0);
group.add(cylinderMesh);

const octahedronGeometry = new THREE.OctahedronGeometry(0.8);
const octahedronMaterial = new THREE.MeshNormalMaterial();
const octahedronMesh = new THREE.Mesh(octahedronGeometry, octahedronMaterial);
octahedronMesh.position.set(-2.5, 2.5, 0);
group.add(octahedronMesh);

const dodecahedronGeometry = new THREE.DodecahedronGeometry(0.8);
const dodecahedronMaterial = new THREE.MeshNormalMaterial();
const dodecahedronMesh = new THREE.Mesh(dodecahedronGeometry, dodecahedronMaterial);
dodecahedronMesh.position.set(0, 2.5, 0);
group.add(dodecahedronMesh);

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

  // Rotate each mesh
  group.children.forEach((mesh, i) => {
    mesh.rotation.x += 0.005 * ((i % 3) + 1);
    mesh.rotation.y += 0.01 * ((i % 4) + 1);
  });

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);
}

animate();
