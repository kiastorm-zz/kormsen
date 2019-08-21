import React from 'react';
import styled from 'styled-components';
import {Box, Heading} from 'rebass/styled-components';
import { Link } from "gatsby";

const StyledHeader = styled(Box)`
	display: flex;
	align-items: center;
	height: 72px;
	width: 100%;
	grid-area: header;
	background-color: #1d3343;
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

const GridContainer = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	width: 100%;
`;

const NavLinks = styled.nav`
	display: inline-flex;
	width: 100%;
`;

const NavText = styled(Link)`
	text-decoration: none;
	color: white;
	margin-left: 20px;
`;

const Logo = styled.span`
	background-color: #1d3343;
	color: white;
	letter-spacing: 8px;
	font-family: abolition, sans-serif;
	font-size: 40px;
	padding: 12px 12px 16px;
`;

const PMLHeader = (props) => {
	return (
		<StyledHeader>
			<GridContainer>
				<Logo>
					PML
				</Logo>
				<NavLinks>
					<NavText to="/pml/courses" style={{fontWeight: 'bold'}}>Music Production Courses</NavText>
					<NavText to="#">DAW Files</NavText>
					<NavText to="#">Synth Presets</NavText>
					<NavText to="#">Bundle Packs</NavText>
					<NavText to="#">!Freebies!</NavText>
					<NavText to="#" style={{marginLeft: 'auto'}}>Blog</NavText>
				</NavLinks>
			</GridContainer>
		</StyledHeader>
	);
}

export default PMLHeader;
