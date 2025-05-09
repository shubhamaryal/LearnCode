import * as THREE from "three";

// canvas
const canvas = document.querySelector("canvas.webgl");
// console.log(canvas);

// console.log(THREE);

// const scene = new THREE.Scene();
// const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);

// scene
const scene = new THREE.Scene();

// object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// temporary sizes for aspect ratio of camera
const sizes = {
  width: 800,
  height: 600,
};

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
