import React from "react";
import { Canvas } from "react-three-fiber";
import NightclubScene from "./scenes/nightclub/Scene";
import CoreModelViewer from "./ModelViewer/core/CoreModelViewer";

const ThreeCanvas = ({ src, type, aspect, ...rest }) => {
  return (
    <CoreModelViewer src="http://localhost:8002/scene.gltf" type="gltf">
      {({
        model,
        modelCenter,
        modelProgress,
        modelError,
        animations,
        animationIndex,
        playing,
        loopMode,
        timeScale,
        animationProgress,
        play,
        pause,
        seek,
        setLoopMode,
        setTimeScale,
        setAnimationIndex,
      }) => (
        <Canvas
          style={{ background: "#333333" }}
          camera={{ position: [0, 90, 150] }}
        >
          <NightclubScene model={model} />
        </Canvas>
      )}
    </CoreModelViewer>
  );
};

export default ThreeCanvas;
