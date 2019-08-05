import React, { useContext, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { GlobalContext } from "../layouts/GlobalContext.js";
import { animated, useSpring, useTransition, useChain, config } from 'react-spring';

const Item = styled(animated.div)`
  background: pink;
  grid-area: toolcontent;
`;

const ToggleMenu = styled(animated.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 64px;
  height: 64px;
  z-index: 5;
  margin-top: 12px;
  margin-right: 12px;
  border-radius: 100%;
  will-change: opacity;
`;

const MenuItems = styled(animated.div)`
  display: grid;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  grid-template-areas:
  ". . . close"
  "info navigation playlist ."
  ". navigation contact .";
  grid-template-columns: 1fr 1fr 1fr 76px;
  grid-template-rows: 76px 1fr 1fr;
  background: white;
  border-radius: 100%;
  margin-left: auto;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;
`;


const Menu = () => {
  const { globalState: { menuIsOpen, windowSize }, actions: { toggleMenu } } = useContext(GlobalContext);

  const menuData = [
    {
      title: 'navigation',
      description: '#a8edea → #fed6e3',
      background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      height: 200
    },
    {
      name: 'playlist',
      description: '#f5f7fa → #c3cfe2',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      height: 400
    },
    {
      name: 'info',
      description: '#e0c3fc → #8ec5fc',
      background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
      height: 400
    },
    {
      name: 'contact',
      description: '#e0c3fc → #8ec5fc',
      background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
      height: 400
    },
  ];

  const containerAnimationRef = useRef()
  const containerAnimation = useSpring({
    ref: containerAnimationRef,
    config: config.default,
    from: {
      background: 'white',
      opacity: 0,
      marginTop: `${12}px`,
      marginRight: `${12}px`,
      borderRadius: `${100}%`,
    },
    to: {
      background: '#7c4c64',
      opacity: menuIsOpen ? 1 : 0,
      width: menuIsOpen ? `${window && window.innerWidth}px` : `${0}px`,
      height: menuIsOpen ? `${window && window.innerHeight}px` : `${0}px`,
      marginTop: menuIsOpen ? `${0}px` : `${12}px`,
      marginRight: menuIsOpen ? `${0}px` : `${12}px`,
      borderRadius: menuIsOpen ? `${0}%` : `${100}%`,
    }
  });


  const buttonAnimationRef = useRef()
  const buttonAnimation = useSpring({
    ref: buttonAnimationRef,
    config: config.default,
    from: {
      background: '#7c4c64',
    },
    to: {
      background: menuIsOpen ? 'lightblue' : '#7c4c64',
    }
  });


  const itemsAnimationRef = useRef()
  const itemsAnimation = useTransition(menuIsOpen ? menuData : [], item => item.name, {
    ref: itemsAnimationRef,
    unique: true,
    trail: 200 / menuData.length,
    from: { opacity: 0 },
    enter: { opacity: 1, },
    leave: { opacity: 0 }
  });



  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
useChain(menuIsOpen ? [buttonAnimationRef, containerAnimationRef, itemsAnimationRef] : [itemsAnimationRef, buttonAnimationRef, containerAnimationRef], [0, menuIsOpen ? 0 : .2, menuIsOpen ? .4 : .2]);

  return (
    <>
      <ToggleMenu style={{ ...buttonAnimation }} onClick={toggleMenu}>
      </ToggleMenu>
      <MenuItems style={{ ...containerAnimation }}>
        {itemsAnimation.map(({ item, key, props }) => (
          item ?
            <Item
              style={{
                ...props,
                background: item.background,
                gridArea: item.name
              }}
              key={key}>
              <h1>{item.name}</h1>
              <h3></h3>
            </Item>
            :
            <span>open</span>
        ))}
      </MenuItems>
    </>
  );
}

Menu.propTypes = {
  siteTitle: PropTypes.string,
};

Menu.defaultProps = {
  siteTitle: ``,
};

export default Menu;
