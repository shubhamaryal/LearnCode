import './style.css'
import * as THREE from 'three'
import * as dat from 'lil-gui'

/**
 * Debug
 */
const gui = new dat.GUI()

const parameters = {
    materialColor: '#ffeded'
}

gui
    .addColor(parameters, 'materialColor')
    .onChange(() => {
        material.color.set(parameters.materialColor)
        particlesMaterial.color.set(parameters.materialColor)
    })

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// /**
//  * Test cube
//  */
// const cube = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({ color: '#ff0000' })
// )
// scene.add(cube)

/**
 * Objects
 */

// Textures
const textureLoader = new THREE.TextureLoader()
const gradientTexture = textureLoader.load('/textures/gradients/3.jpg')
gradientTexture.magFilter = THREE.NearestFilter

// Materials 
const material = new THREE.MeshToonMaterial({ 
    color: parameters.materialColor ,
    gradientMap: gradientTexture
})

// Meshes
// const objectDistance  = 2
const objectDistance  = 4

const mesh1 = new THREE.Mesh(
    new THREE.TorusGeometry(1, 0.4, 16, 60),
    // new THREE.MeshBasicMaterial({ color: '#ff0000' })
    material
)

const mesh2 = new THREE.Mesh(
    new THREE.ConeGeometry(1, 2, 32),
    // new THREE.MeshBasicMaterial({ color: '#ff0000' })
    material
)

const mesh3 = new THREE.Mesh(
    new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
    // new THREE.MeshBasicMaterial({ color: '#ff0000' })
    material
)
// mesh1.position.y = 2
// mesh1.scale.set(0.5, 0.5, 0.5)

// mesh2.visible = false

// mesh3.position.y = -2
// mesh3.scale.set(0.5, 0.5, 0.5)
mesh1.position.y = - objectDistance * 0
mesh2.position.y = - objectDistance * 1
mesh3.position.y = - objectDistance * 2

mesh1.position.x = 2
mesh2.position.x = -2
mesh3.position.x = 2

scene.add(mesh1, mesh2, mesh3)

const sectionMeshes = [mesh1, mesh2, mesh3]

/**
 * Particles
 */
// Geometry
const particlesCount = 200
const positions = new Float32Array(particlesCount * 3)

for (let i = 0; i < particlesCount ; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 10
    // positions[i * 3 + 1] = Math.random()
    positions[i * 3 + 1] = objectDistance * 0.5 - Math.random() * objectDistance * sectionMeshes.length
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
}

const particlesGeometry = new THREE.BufferGeometry()
particlesGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(positions, 3)
)

// Material
const particlesMaterial = new THREE.PointsMaterial({
    color: parameters.materialColor,
    size: 0.03,
    sizeAttenuation: true,
})

// Points
const particles = new THREE.Points(particlesGeometry, particlesMaterial)
scene.add(particles)

/**
 * Lights
 */
const direcetionalLight = new THREE.DirectionalLight('#ffffff', 1)
direcetionalLight.position.set(1, 1, 0)
scene.add(direcetionalLight)

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
// Group 
const cameraGroup = new THREE.Group()
scene.add(cameraGroup)

// Base camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 6
// scene.add(camera)
cameraGroup.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
})
renderer.setClearColor(1)
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Scroll
 */
let scrollY = window.scrollY
let currentSection = 0

window.addEventListener('scroll', () =>{
    scrollY = window.scrollY
    // console.log(scrollY)

    // const newSection = scrollY / sizes.height
    const newSection = Math.round(scrollY / sizes.height)
    // console.log(newSection)

    if(newSection != currentSection){
    }
})

/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (event) => {
    // console.log("mouse moved")
    // console.log(event.clientX, event.clientY)
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.height - 0.5
    // console.log(cursor)

})

/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime
    // console.log(deltaTime)

    // Animate camera
    camera.position.y = - scrollY / sizes.height * objectDistance
    // console.log(camera.position.y)

    // const parallaxX = cursor.x 
    const parallaxX = cursor.x  * 0.5
    // const parallaxY = cursor.y
    // const parallaxY = - cursor.y
    const parallaxY = - cursor.y * 0.5
    // camera.position.x = parallaxX 
    // cameraGroup.position.x = parallaxX 
    // cameraGroup.position.x += (parallaxX - cameraGroup.position.x ) * 0.1
    cameraGroup.position.x += (parallaxX - cameraGroup.position.x ) * 5 * deltaTime
    // camera.position.y = parallaxY 
    // cameraGroup.position.y = parallaxY 
    // cameraGroup.position.y += (parallaxY - cameraGroup.position.y ) * 0.1
    cameraGroup.position.y += (parallaxY - cameraGroup.position.y ) * 5 * deltaTime
    
    // Animate meshes
    for (const mesh of sectionMeshes){
        mesh.rotation.x = elapsedTime * 0.2
        mesh.rotation.y = elapsedTime * 0.12
    }

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()