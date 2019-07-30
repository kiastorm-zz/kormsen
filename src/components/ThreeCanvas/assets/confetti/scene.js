import * as THREE from 'three';
import React, { Suspense, useRef, useMemo, useEffect } from 'react'
import Background from './background';
import { useRender, useThree } from 'react-three-fiber';
import Model from './model';


// apply({ OrbitControls })

const Box = ({ }) => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" transparent opacity={0.5} />
    </mesh>
  );
};

export default function Scene({ top, mouse }) {
  const {
    gl,               // WebGL renderer
    canvas,           // canvas the dom element that was created
  } = useThree()

  const numLines = 100
  const lines = new Array(numLines).fill()


  let group = useRef()
  let theta = 0
  // Hook into the render loop and rotate the scene a bit
  // useRender(() => group.current.rotation.set(0, 5 * Math.sin(THREE.Math.degToRad((theta += 0.02))), 0))/



  return (
    <>
      <ambientLight color="lightblue" />
      <pointLight color="white" intensity={1} position={[10, 10, 10]} />

      <Background />
      <Suspense fallback={<Box />}>
        <Model file="http://localhost:8002/scene.gltf" />
      </Suspense>
    </>
  )
}
