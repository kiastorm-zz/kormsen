import * as THREE from "three";
import React, { useState, useMemo } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Model({ file }) {
  const [obj, set] = useState();

  useMemo(async () => {
    await new GLTFLoader().load(
      file,
      res => {
        const { scene } = res;
        set(scene);
      },
      null,
      error => console.error("Error loading GLTF Model", error)
    );
  }, [file]);

  return obj ? <primitive object={obj} /> : null;
}
