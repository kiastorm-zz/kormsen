import * as THREE from 'three'
import * as orbitControlsCreator from 'three-orbit-controls'

/*
 * Allow the camera to orbit around a target
 */
const OrbitControls = orbitControlsCreator(THREE);

export const createOrbitControls = (camera, domElement) => {
  const orbit = new OrbitControls(camera, domElement)

  orbit.enableKeys = true
  orbit.enableZoom = true

  return orbit
}


/**
 * Creates lights for the scene
 * @param color Lights color
 */
export const createLights = (color = 0xffffff) => {
  const ambientLight = new THREE.AmbientLight(color)
  const lights = []

  lights[0] = new THREE.PointLight(color, 1, 0)
  lights[1] = new THREE.PointLight(color, 1, 0)
  lights[2] = new THREE.PointLight(color, 1, 0)

  lights[0].position.set(0, 200, 0)
  lights[1].position.set(100, 200, 100)
  lights[2].position.set(-100, -200, -100)

  return [ambientLight, lights[0], lights[1], lights[2]]
}

/**
 * Creates webgl renderer
 * @param canvas The html canvas node
 */
export const createRenderer = (canvas) => {
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    // alpha: true,
    // clearColor: 0x0,
    // clearAlpha: 0
  })

  renderer.setPixelRatio(window.devicePixelRatio)

  renderer.setSize(window.innerWidth, window.innerHeight)

  return renderer
}

/**
 * Creates camera object
 * @param initDistance Initial distance from center
 */
export const createCamera = (width, height, initDistance = 4) => {
  const camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 1000)
  camera.position.z = initDistance

  return camera
}

export const createCube = (color = 0x317d29) => {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color });
  const cube = new THREE.Mesh(geometry, material);

  return cube;
}

/**
 * Creates a clock object
 */
export const createClock = () => new THREE.Clock()

/**
 * Creates a scene object
 */
export const createScene = () => new THREE.Scene()

