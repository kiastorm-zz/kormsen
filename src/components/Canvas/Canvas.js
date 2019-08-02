import React, { useRef, useEffect } from "react";
import { Canvas, useThree, useRender, extend } from "react-three-fiber";
import NightclubScene from "./scenes/nightclub/Scene";
import CoreModelViewer from "./ModelViewer/core/CoreModelViewer";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import dancingGirl from "../../assets/models/dancing-girl/scene.gltf";
import styled from 'styled-components';


extend({ OrbitControls });

function CameraControls(props) {
  const controls = useRef();
  const { camera } = useThree();

  useRender(() => controls.current && controls.current.update(), false);

  return <orbitControls ref={controls} args={[camera]} {...props} />;
}

const CanvasContainer = styled.div`
  background-color: rgba(30,30,30, .4);
`;

const ThreeCanvas = ({ src, type, aspect, className, ...rest }) => {
  useEffect(() => {
    document.addEventListener(
      "touchmove",
      function (e) {
        console.log(e);
        e.preventDefault();
      },
      { passive: false }
    );
    return () => {
      document.removeEventListener(
        "touchmove",
        function (e) {
          console.log(e);
          e.preventDefault();
        },
        { passive: false }
      );
    };
  }, []);

  return (
    <CoreModelViewer src={dancingGirl} type="gltf">
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
        play = true,
        pause,
        seek,
        setLoopMode,
        setTimeScale,
        setAnimationIndex,
      }) => (
          <CanvasContainer className={className}>
            <Canvas
              style={{ background: "#333" }}
              camera={{ position: [0, 0, 200] }}
              {...rest}
            >
              <CameraControls
                enableDamping
                minDistance={140}
                maxDistance={400}
                dampingFactor={0.3}
                autoRotate
                autoRotateSpeed={1}
                minPolarAngle={0.6}
                maxPolarAngle={Math.PI / 2.25}
              />
              <NightclubScene model={model} />
            </Canvas>
          </CanvasContainer>
        )}
    </CoreModelViewer>
  );
};

export default ThreeCanvas;
