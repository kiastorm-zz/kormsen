import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import below from "../lib/utils/breakpoints";
import { animated, useSpring, useTransition } from 'react-spring';

const NavLink = styled(Link)`
	display: block;
	font-size: 20px;
	padding-left: 12px;
`;

const StyledSidebar = styled(animated.nav)`
  grid-area: sidebar;
  position: fixed;
  min-height: 100vh;
  background: #122932;
  width: 230px;

  ${below.p`
    display: none;
  `}
`;

const Sidebar = ({ siteTitle }) => {
  const sidebar = useSpring({ width: '100%', from: { value: '0' } })

  return (
    <StyledSidebar
      style={{
        background: "#1C1E26",
        sidebar
      }}
    >
      <nav
        style={{
          margin: `0 auto`,
          padding: `20px 30px`,
        }}
      >
				<div
					style={{
						backgroundColor: 'white',
						textAlign: 'center',
						paddingBottom: '6px',
						marginBottom: '48px'
					}}
				>
					<h1 style={{
						margin: "0",
					}}>
						<Link
							to="/"
							style={{
								color: `#141414`,
								textDecoration: `none`,
								fontFamily: `font92197`,
								textTransform: 'uppercase',
								letterSpacing: '2px',
								fontSize: '52px',
								fontWeight: '200',
							}}
						>
							{siteTitle}
						</Link>
					</h1>
				</div>
					<NavLink
						to="/sights"
						style={{
							color: `white`,
							textDecoration: `none`,
							textTransform: "uppercase",
						}}
					>
						{/* <Eye /> */}
						{/* <SightsIcon /> */}
						Sights
					</NavLink>
					<NavLink
						to="/sounds"
						style={{
							color: `white`,
							textDecoration: `none`,
							textTransform: "uppercase",
						}}
					>
						{/* <SoundsIcon /> */}
					sounds
				</NavLink>
				<NavLink
					to="/thoughts"
					style={{
						color: `white`,
						textDecoration: `none`,
						textTransform: "uppercase",
					}}
				>
					{/* <ThoughtsIcon /> */}
					thoughts
				</NavLink>
      </nav>
    </StyledSidebar>
  );
}

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
};

Sidebar.defaultProps = {
  siteTitle: ``,
};

export default Sidebar;
