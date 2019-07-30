import React, { Suspense, useRef, useMemo, useEffect } from "react";
import { useThree } from "react-three-fiber";
import Stars from "./assets/Stars";

const Box = ({}) => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" transparent opacity={0.5} />
    </mesh>
  );
};

export default function Scene({ model }) {
  const {
    gl, // WebGL renderer
    canvas, // canvas the dom element that was created
  } = useThree();

  return (
    <>
      <ambientLight color="lightblue" />
      <pointLight color="white" intensity={4} position={[50, 300, 50]} />
      <Stars />
      {model && (
        <primitive
          object={model.scene || model}
          position={[0, -80, 0]}
          wireframe
          material={{ wireframe: true }}
        />
      )}
    </>
  );
}
