import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

// console.log(GLTFLoader)

/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const object1 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)
object1.position.x = - 2

const object2 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)

const object3 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)
object3.position.x = 2

scene.add(object1, object2, object3)

/**
 * Raycaster
 */
const raycaster = new THREE.Raycaster()

// const rayOrigin = new THREE.Vector3(-3, 0, 0) // the origin is somewhere on the left
// const rayDirection = new THREE.Vector3(10, 0, 0) // we want to shoot to the right so it should be positive on the x-axis
// // console.log(rayDirection.length()) 
// rayDirection.normalize()
// // console.log(rayDirection.length()) 

// raycaster.set(rayOrigin, rayDirection)

// const intersect = raycaster.intersectObject(object2)
// console.log(intersect)

// const intersects = raycaster.intersectObjects([object1, object2, object3])
// console.log(intersects)




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
 * Mouse
 */
const mouse = new THREE.Vector2()

window.addEventListener('mousemove', (event) =>{
    // mouse.x = event.clientX 
    // console.log(mouse.x)
    // mouse.x = event.clientX / sizes.width 
    // console.log(mouse.x)
    mouse.x = event.clientX / sizes.width * 2 - 1
    // console.log(mouse.x)
    mouse.y = -(event.clientY / sizes.height) * 2 + 1
    // console.log(mouse.y)
})

window.addEventListener('click', () => {
    // console.log('click')
    // if(currentIntersect) {
    //     console.log('click on the spehre')
    // }

    // if (currentIntersect) {
    //     if (currentIntersect.object === object1) {
    //         console.log('click on object 1')
    //     }
    //     if (currentIntersect.object === object2) {
    //         console.log('click on object 2')
    //     }
    //     if (currentIntersect.object === object3) {
    //         console.log('click on object 3')
    //     }
    // }

    if (currentIntersect) {
        switch (currentIntersect.object) {
            case object1:
                console.log('click on object 1')
                break
            case object2:
                console.log('click on object 2')
                break
            case object3:
                console.log('click on object 3')
                break
        }
    }
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
 * Model
 */
const gltfLoader = new GLTFLoader()

let model = null
gltfLoader.load(
    'models/Duck/glTF-Binary/Duck.glb',
    (gltf) => {
        model = gltf.scene
        // console.log('Model loaded')
        // console.log(gltf)
        // console.log(gltf.scene)
        // gltf.scene.position.y = -1.2
        model.position.y = -1.2
        // scene.add(gltf.scene)
        scene.add(model)
    }
)

/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#ffffff', 0.3)
scene.add(ambientLight)

// Directional light
const directionalLight = new THREE.DirectionalLight('#ffffff', 0.7)
directionalLight.position.set(1, 2, 3)
scene.add(directionalLight)

/**
 * Animate
 */
const clock = new THREE.Clock()

let currentIntersect = null

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Animate Objects
    object1.position.y = Math.sin(elapsedTime * 0.3) * 1.5
    object2.position.y = Math.sin(elapsedTime * 0.8) * 1.5
    object3.position.y = Math.sin(elapsedTime * 1.4) * 1.5

    // // Cast a ray
    // const rayOrigin = new THREE.Vector3(-3, 0, 0) 
    // const rayDirection = new THREE.Vector3(1, 0, 0)
    // rayDirection.normalize()

    // raycaster.set(rayOrigin, rayDirection)

    // const objectsToTest = [object1, object2, object3]
    // const intersects = raycaster.intersectObjects(objectsToTest)
    // // console.log(intersects)
    // // console.log(intersects.length)

    // for (const object of objectsToTest){
    //     object.material.color.set('#ff0000')
    // }

    // for (const intersect of intersects){
    //     // console.log(intersect)
    //     intersect.object.material.color.set('#0000ff')
    // }

    // // Cast a ray 
    // raycaster.setFromCamera(mouse, camera)

    // const objectsToTest = [object1, object2, object3]
    // const intersects = raycaster.intersectObjects(objectsToTest)

    // for (const object of objectsToTest) {
    //     object.material.color.set('#ff0000')
    // }

    // for (const intersect of intersects) {
    //     intersect.object.material.color.set('#0000ff')
    // }

    // Cast a ray
    raycaster.setFromCamera(mouse, camera)

    const objectsToTest = [object1, object2, object3]
    const intersects = raycaster.intersectObjects(objectsToTest)

    // for (const object of objectsToTest) {
    //     object.material.color.set('#ff0000')
    // }

    // for (const intersect of intersects) {
    //     intersect.object.material.color.set('#0000ff')

    // }

    if(intersects.length) {
        if (!currentIntersect) {
            console.log('mouse entered an object')
        }
        currentIntersect = intersects[0]
    } else {
        if (currentIntersect) {
            console.log('mouse left an object')
        }
        currentIntersect = null
    }


    // Test intersect with model
    // const modelIntersects = raycaster.intersectObject(gltf.scene)
    // const modelIntersects = raycaster.intersectObject(model)
    // console.log(modelIntersects)

    if(model){
        const modelIntersects = raycaster.intersectObject(model) 
        // const modelIntersects = raycaster.intersectObject(model, false)
        // console.log(modelIntersects)

        if(modelIntersects.length){
            model.scale.set(1.5, 1.5, 1.5)
        }
        else {
            model.scale.set(1, 1, 1)
        }
    }
    
    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()