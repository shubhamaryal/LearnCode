import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
// import typefaceFont from 'three/examples/fonts/helvetiker_regular.typeface.json'
// console.log(typefaceFont)
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()



// Axes Helper
// const axesHelper = new THREE.AxesHelper()
// scene.add(axesHelper)





/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const matcapTexture = textureLoader.load('/textures/matcaps/3.png')
// console.log(matcapTexture)






/**
 * Fonts
 */
const fontLoader = new FontLoader()

fontLoader.load(
    '/font/helvetiker_regular.typeface.json',
    (font) => {
        // console.log("font loadeed")
        // console.log(font)
        const textGeometry = new TextGeometry('Shubham', {
            font: font,
            size: 0.5,
            height: 0.2,
            curveSegments: 6,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 4
        })
        // textGeometry.computeBoundingBox()
        // // console.log(textGeometry.boundingBox)
        // textGeometry.translate(
        //     // - (textGeometry.boundingBox.max.x * 0.5),
        //     // - (textGeometry.boundingBox.max.y * 0.5),
        //     // - (textGeometry.boundingBox.max.z * 0.5)
        //     - (textGeometry.boundingBox.max.x - 0.02) * 0.5,
        //     - (textGeometry.boundingBox.max.y - 0.02) * 0.5,
        //     - (textGeometry.boundingBox.max.z - 0.03) * 0.5
        // )
        // textGeometry.computeBoundingBox()
        // console.log(textGeometry.boundingBox)

        textGeometry.center()


        // const textMaterial = new THREE.MeshBasicMaterial()
        // const textMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture })
        const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture })
        // textMaterial.matcap = matcapTexture
        // textMaterial.wireframe = true
        // const text = new THREE.Mesh(textGeometry, textMaterial)
        const text = new THREE.Mesh(textGeometry, material)
        scene.add(text)

        // console.time('donuts')

        const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45)
        // const donutMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture })

        // We are using the same Matcap material for all the Text and the Donuts. So instead of creating 2, we can create one and reuse it for better optimization. It won't do much optimization in this case, but it's a good practice to follow.



        // ----- OPTIMIZATION -----
        // If we create the donutGeometry and donutMaterial inside the loop, it will create a new geometry and material for each donut, which will be less efficient and take more time.
        // Instead, we create them once outside the loop and reuse them for each donut which is more efficient and will take less time.


        for(let i = 0; i < 100; i++){
            // const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45)
            // const donutMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture })
            // const donut = new THREE.Mesh(donutGeometry, donutMaterial)
            const donut = new THREE.Mesh(donutGeometry, material)

            donut.position.x = (Math.random() - 0.5) * 10
            donut.position.y = (Math.random() - 0.5) * 10
            donut.position.z = (Math.random() - 0.5) * 10

            donut.rotation.x = Math.random() * Math.PI
            donut.rotation.y = Math.random() * Math.PI

            const scale = Math.random()
            donut.scale.set(scale, scale, scale)
            // if we use Math.random(), in each scale, the donot shape will be weird

            scene.add(donut)
        }

        // console.timeEnd('donuts')
    }
)






/**
 * Object
 */
// const cube = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
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
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
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