import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';

const StyledSidebar = styled.nav`
  grid-area: sidebar;
  position: fixed;
  min-height: 100vh;
  background: #122932;
  width: 230px;
`;

const Sidebar = ({ siteTitle }) => (
  <StyledSidebar
    style={{
      background: '#141414',
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: '0 0 20px 0' }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h3>
        <Link
          to="/sights"
          style={{
            color: `white`,
            textDecoration: `none`,
            textTransform: 'uppercase'
          }}
        >
          Sights
        </Link>
      </h3>
      <h3>
        <Link
          to="/sounds"
          style={{
            color: `white`,
            textDecoration: `none`,
            textTransform: 'uppercase'
          }}
        >
          sounds
        </Link>
      </h3>
      <h3>
        <Link
          to="/thoughts"
          style={{
            color: `white`,
            textDecoration: `none`,
            textTransform: 'uppercase'
          }}
        >
          thoughts
        </Link>
      </h3>
    </div>
  </StyledSidebar>
)

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
}

Sidebar.defaultProps = {
  siteTitle: ``,
}

export default Sidebar
