import React, { useRef, useState, useEffect } from "react";
import useComponentSize from '@rehooks/component-size';
import * as THREE from 'three';
import {
  createScene,
  createLights,
  createOrbitControls,
  createRenderer,
  createCamera,
  createCube
} from './sceneRenderer.js';


const ThreeCanvas = (props) => {
  const canvasRef = useRef(null);
  const [state, setState] = useState({});
  const [size, setSize] = useState({});

  const initialSize = useComponentSize(canvasRef, setSize);

  if (initialSize.width && !state.hasRendered) {
    const scene = createScene();
    const camera = createCamera(initialSize.width, initialSize.height);
    const renderer = createRenderer();
    const cube = createCube();
    const oribitControls = createOrbitControls(camera, renderer.domElement);
    const lights = createLights();

    renderer.setSize(initialSize.width, initialSize.height);

    canvasRef.current.appendChild(renderer.domElement);

    scene.add(cube);

    renderer.render(scene, camera);

    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    setState(prevState => ({
      ...prevState,
      renderer,
      camera,
      scene,
      hasRendered: true
    }));
  }

  return <div className={props.className} ref={canvasRef}></div>
};


export default ThreeCanvas
