import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'







/**
 * Textures
 */
// const image = new Image()
// const texture = new THREE.Texture(image)

// image.onload = () => {
//     // console.log('Image loaded')
//     // const texture = new THREE.Texture(image)
//     // console.log(texture)
//     texture.needsUpdate = true
// }
// image.src = '/textures/door/color.jpg'

const loadingManager = new THREE.LoadingManager()
// loadingManager.onStart = () => {
//     console.log('Loading started')
// }
// loadingManager.onLoad = () => {
//     console.log('Loading finished')
// }
// loadingManager.onProgress = () => {
//     console.log('Loading progress')
// }
// loadingManager.onError = () => {
//     console.log('Loading error')
// }

// const textureLoader = new THREE.TextureLoader()
const textureLoader = new THREE.TextureLoader(loadingManager)

// const colorTexture = textureLoader.load('/textures/door/color.jpg')

// const colorTexture = textureLoader.load('/textures/checkerboard-1024x1024.png')
// The pattern of the checkerboard is called Moiré pattern.

const colorTexture = textureLoader.load('/textures/checkerboard-8x8.png')
// This is small texture so it appears blurry on the screen. As the image is small, it is stretched to fill the screen, which causes the blurriness.

const alphaTexture = textureLoader.load('/textures/door/alpha.jpg')
const heightTexture = textureLoader.load('/textures/door/height.jpg')
const normalTexture = textureLoader.load('/textures/door/normal.jpg')
const ambientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
const metalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
const roughnessTexture = textureLoader.load('/textures/door/roughness.jpg')

// colorTexture.repeat.x = 2
// colorTexture.repeat.y = 3
// colorTexture.wrapS = THREE.RepeatWrapping
// colorTexture.wrapT = THREE.RepeatWrapping
// colorTexture.wrapT = THREE.MirroredRepeatWrapping
// colorTexture.wrapS = THREE.MirroredRepeatWrapping

// colorTexture.offset.x = 0.5
// colorTexture.offset.y = 0.5

// colorTexture.rotation = Math.PI / 4
// colorTexture.center.x = 0.5
// colorTexture.center.y = 0.5

// colorTexture.minFilter = THREE.NearestFilter
// colorTexture.magFilter = THREE.NearestFilter




// const texture = textureLoader.load(
//     '/textures/door/color.jpg', 
//     () => {
//         console.log('Texture loaded')
//     },
//     () => {
//         console.log('Texture progress')
//     }, 
//     () => {
//         console.log('Texture error')
//     }
// )









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
const geometry = new THREE.BoxBufferGeometry(1, 1, 1)
// const geometry = new THREE.SphereBufferGeometry(1, 32, 32)
// const geometry = new THREE.ConeBufferGeometry(1, 1, 32)
// const geometry = new THREE.TorusBufferGeometry(1, 0.35, 32, 100)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

// console.log(geometry.attributes)
// console.log(geometry.attributes.uv)
const material = new THREE.MeshBasicMaterial({ map: colorTexture })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

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
camera.position.x = 1
camera.position.y = 1
camera.position.z = 1
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