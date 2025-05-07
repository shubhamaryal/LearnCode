let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 5;

scene.add(camera);

let box = new THREE.BoxGeometry(1, 1, 1); 
let material = new THREE.MeshBasicMaterial({ color: "cyan" });
let mesh = new THREE.Mesh(box, material);

mesh.scale.z = 2
mesh.rotation.x = 4;

scene.add(mesh);

const canvas = document.querySelector("canvas");
let renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
