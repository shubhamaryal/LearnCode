import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'



import GUI from 'lil-gui'; 


/**
 * Debug
*/
const gui = new GUI({ closed : true , width : 400 });
// gui.hide();
// gui.close();

const parameters = {
    spin: () =>{
        // console.log('spin')
        // gsap.to(mesh.rotation, { duration: 1, y: 10})
        // the above code will not work after the first click because it is already in the position of 10
        gsap.to(mesh.rotation, { duration: 1, y: mesh.rotation.y + 10 })
    }
}

gui.add(parameters, 'spin')



window.addEventListener('keydown', () =>{
    if(event.key === 'g'){
        if(gui._hidden){
            gui.show()
        } else {
            gui.hide()
        }
    }
})



/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
// mesh.visible = false
scene.add(mesh)

// console.log(material.color)







// Debug
// gui.add(mesh.position, 'y')
// gui.add(mesh.position, 'y' , -3, 3, 0.01)
// gui.add(mesh.position, 'x' , -3, 3, 0.01)
// gui.add(mesh.position, 'z' , -3, 3, 0.01)
// gui.add(mesh.position, 'y').min(-3).max(3).step(0.01)

// The above method is chaining method, we can make the code clear by using line breaks 
gui
    .add(mesh.position, 'y')
    .min(-3)
    .max(3)
    .step(0.01)
    .name('Elevation')

gui
    .add(mesh, 'visible')

gui
    .add(material, 'wireframe')

// gui
//     .add(mesh.material, 'wireframe')

gui
    .addColor(material, 'color')







/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()