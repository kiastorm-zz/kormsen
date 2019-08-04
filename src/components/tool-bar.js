import React, { useContext } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import below from "../lib/utils/breakpoints";
import GlobalContextProvider, { GlobalContext } from "../layouts/GlobalContext.js";
import ToggleMenu from './menu';

import { animated, useSpring, useTransition } from 'react-spring';

const ToolBarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 4;
`;





const ToolBar = ({ siteTitle }) => {
  return (
    <ToolBarContainer>
      <ToggleMenu />
    </ToolBarContainer>
  );
}

ToolBar.propTypes = {
  siteTitle: PropTypes.string,
};

ToolBar.defaultProps = {
  siteTitle: ``,
};

export default ToolBar;
