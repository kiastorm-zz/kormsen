import React, { useContext } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import ToggleMenu from './menu';

const ToolBarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 4;
`;

const ToolBar = () => {
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
