import * as THREE from "https://unpkg.com/three@0.126.1/build/three.module.js"

const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()

// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshLambertMaterial(
//     {
//         color: 0xff00ff
//     }
// )
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

const textureLoader = new THREE.TextureLoader();

const earthGeo = new THREE.BoxGeometry(3, 3, 3);
const earthMat = new THREE.MeshLambertMaterial({
    map: textureLoader.setPath('img/').load('globe.jpg')
});
const earth = new THREE.Mesh(earthGeo, earthMat);

scene.add(earth)

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// add lights
const light = new THREE.DirectionalLight(0xFFFFAA, 1)
light.position.set(4, 5, 4)
scene.add(light)

const ambientLight = new THREE.AmbientLight(0x101010);
scene.add(ambientLight);

const camera = new THREE.PerspectiveCamera(120, sizes.width/sizes.height, 0.1, 100)
camera.position.set(-10, 4, 10)
scene.add(camera)

const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true

function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

animate()