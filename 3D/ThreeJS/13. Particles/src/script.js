import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'

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
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const particleTexture = textureLoader.load('/textures/particles/2.png')

/**
 * Particles
 */
// Geometry
// const particlesGeometry = new THREE.SphereGeometry(1, 32, 32)
const particlesGeometry = new THREE.BufferGeometry()
const count = 20000

const positions =  new Float32Array(count * 3) 

// for creating random colors, 3 to define random color for each particle (r, g, b) 
const colors =  new Float32Array(count * 3) 

for (let i = 0; i < count * 3; i++){
    // positions[i] = Math.random()
    // if we use Math.random() it will be in the range of 0 to 1 so the particles will be in a geometry will be from 0 to 1 only so it is displayed in the right side, so we subtract from 0.5 and multiply it by 10 to spread it out
    positions[i] = (Math.random() - 0.5) * 10
    colors[i] = Math.random() 
}

particlesGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(positions, 3)
)

// creating attribute for color
particlesGeometry.setAttribute(
    'color',
    new THREE.BufferAttribute(colors, 3)
)

// console.log(particlesGeometry.attributes.position.array) 

// Materials
const particlesMaterial = new THREE.PointsMaterial({
    // size: 0.02,
    size: 0.1,
    sizeAttenuation: true,
    // color: "red",
    // map: particleTexture,
})
// particlesMaterial.color = new THREE.Color('#ff88cc')
// particlesMaterial.map = particleTexture
particlesMaterial.transparent = true
particlesMaterial.alphaMap = particleTexture
// particlesMaterial.alphaTest = 0.001
// particlesMaterial.depthTest = false
particlesMaterial.depthWrite = false
particlesMaterial.blending = THREE.AdditiveBlending
// particlesMaterial.size = 0.02
// particlesMaterial.sizeAttenuation = true

// this is to use the color attribute we created in the geometry
particlesMaterial.vertexColors = true 

// Points 
const particles = new THREE.Points(particlesGeometry, particlesMaterial)
scene.add(particles)

// Temp Cube
// const cube = new THREE.Mesh(
//     new THREE.BoxGeometry(),
//     new THREE.MeshBasicMaterial()
// )
// scene.add(cube)


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

    // Update particles
    // particles.rotation.y = elapsedTime * 0.1
    // particles.position.y = -elapsedTime * 0.1


    for (let i = 0; i < count ; i++){
        const i3 = i * 3

        const x = particlesGeometry.attributes.position.array[i3 + 0]
        particlesGeometry.attributes.position.array[i3 + 1] = Math.sin(elapsedTime + x ) 
    }

    particlesGeometry.attributes.position.needsUpdate = true

    
    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()