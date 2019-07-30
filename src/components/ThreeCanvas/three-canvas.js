import React, { useCallback } from "react";
import { Canvas } from 'react-three-fiber'
import { useSpring } from 'react-spring'
import Scene from './assets/confetti/scene';
import Camera from './three-canvas';

const ThreeCanvas = (props) => {
  const [{ top, mouse }, set] = useSpring(() => ({ top: 0, mouse: [0, 0] }))
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => set({ mouse: [x - window.innerWidth / 2, y - window.innerHeight / 2] }), [])
  const onScroll = useCallback(e => set({ top: e.target.scrollTop }), [])

  return (
    <Canvas style={{ background: '#333333' }} camera={{ position: [0, 90, 150] }}>
      <Scene top={top} mouse={mouse} />
    </Canvas>
  )
};


export default ThreeCanvas
