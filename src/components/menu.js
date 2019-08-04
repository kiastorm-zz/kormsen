import React, { useContext, useRef } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import below from "../lib/utils/breakpoints";
import ToolBar from "../components/tool-bar";
import GlobalContextProvider, { GlobalContext } from "../layouts/GlobalContext.js";

import { animated, useSpring, useTransition, useChain, config } from 'react-spring';

const Item = styled(animated.div)`
  background: pink;
  grid-area: toolcontent;
`;

const ToggleMenu = styled(animated.div)`
  position: fixed;
  background: black;
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


const Menu = ({ siteTitle }) => {
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

  const springRef = useRef()
  const { width, height, ...rest } = useSpring({
    ref: springRef,
    config: config.default,
    from: {
      width: `${64}px`,
      height: `${64}px`,
      marginTop: `${12}px`,
      marginRight: `${12}px`,
      borderRadius: `${100}%`,
    },
    to: {
      width: menuIsOpen ? `${windowSize.width}px` : `${64}px`,
      height: menuIsOpen ? `${windowSize.height}px` : `${64}px`,
      marginTop: menuIsOpen ? `${0}px` : `${12}px`,
      marginRight: menuIsOpen ? `${0}px` : `${12}px`,
      borderRadius: menuIsOpen ? `${0}%` : `${100}%`,
    }
  });

  const buttonRef = useRef()
  const { opacity, ...buttonRest } = useSpring({
    ref: buttonRef,
    config: config.default,
    from: {
      opacity: `0`,
    },
    to: {
      opacity: menuIsOpen ? '1' : '0',
    }
  });


  const transRef = useRef()
  const transitions = useTransition(menuIsOpen ? menuData : [], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 100 / menuData.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)', },
    leave: { opacity: 0, transform: 'scale(0)' }
  });



  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(menuIsOpen ? [springRef, transRef] : [transRef, springRef], [0, menuIsOpen ? 0.1 : 0.3]);



  return (
    <>
      <ToggleMenu style={{ opacity, ...buttonRest }} onClick={toggleMenu} />
      <MenuItems style={{ ...rest, width, height }}>
        {transitions.map(({ item, key, props }) => (
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
