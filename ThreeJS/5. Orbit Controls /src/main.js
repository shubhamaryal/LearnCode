import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 5;
scene.add(camera);

const box = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "cyan",
  wireframe: true,
});
const mesh = new THREE.Mesh(box, material);
scene.add(mesh);

const canvas = document.querySelector("#draw");
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, renderer.domElement);

controls.enableDamping = true;
// controls.autoRotate = true;
controls.autoRotateSpeed = 20 ;
// controls.enableZoom = false
controls.dampingFactor = 0.01

function animate() {
  requestAnimationFrame(animate);
  // mesh.rotation.x += 0.01;
  // mesh.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
}

animate();
