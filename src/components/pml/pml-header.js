import React from 'react';
import styled from 'styled-components';
import {Box, Heading} from 'rebass';

const StyledHeader = styled(Box)`
	display: flex;
	align-items: center;
	height: 72px;
	width: 100%;
	grid-area: header;
	background-color: #1d3343;
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
`;

const NavText = styled.a`
	text-decoration: none;
	color: white;
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
					<NavText href="#">Music Production Courses</NavText>
					<NavText href="#">DAW Files</NavText>
					<NavText href="#">Synth Presets</NavText>
					<NavText href="#">Bundle Packs</NavText>
					<NavText href="#">!Freebies!</NavText>
					<NavText href="#">Blog</NavText>
				</NavLinks>
			</GridContainer>
		</StyledHeader>
	);
}

export default PMLHeader;
