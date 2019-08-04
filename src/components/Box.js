import React, { useRef } from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import useComponentSize from '@rehooks/component-size'

const StyledBox = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 20px;
  position: relative;
`;


const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px 20px;
  flex-basis: 75%;
`;

const BoxButton = styled(animated.div)`
  display: flex;
  border: none;
  outline: none;
  color: white;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 120px;
  height: 120px;
  bottom: 0px;
  right: 0px;
  background-color: #7c4c64;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  border-radius: 100%;

  &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
`;

// function relativeCoords(event) {
//   var bounds = event.target.getBoundingClientRect();
//   var x = event.clientX - bounds.left;
//   var y = event.clientY - bounds.top;
//   return { x: x, y: y };
// }

// const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.2]
// const trans = (x, y, s) => (`perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`);


export default function Box({ buttonTo, buttonText, children, className }) {
  // let ref = useRef(null);
  // let size = useComponentSize(ref);


  // const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))


  return (
    <StyledBox className={className}>
      <BoxContent>
        {children}
      </BoxContent>
      <BoxButton
        // onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        // onMouseLeave={() => set({ xys: [0, 0, 1] })}
        // style={{ transform: props.xys.interpolate(trans) }}
      >
        <Link as="h5" to={buttonTo}>
          <animated.span>
            {buttonText}
          </animated.span>
        </Link>
      </BoxButton>
    </StyledBox>
  )
}
