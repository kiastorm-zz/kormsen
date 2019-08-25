import React from 'react';
import styled from 'styled-components';
import {Flex, Box, Heading} from 'rebass/styled-components';
import { Link } from "gatsby";
import GridContainer from '../grid-container';

const StyledHeader = styled(Flex)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
`;



const NavLinks = styled.nav`
	display: flex;
	align-items: center;
`;


const NavLinksLeft = styled(NavLinks)`

`;

const NavLinksRight = styled(NavLinks)`
	margin-left: auto;
`;

const NavText = styled(({children, className, to, ...rest}) => (
	<Link to={to} className={className}>
		<Heading 
			color="white"
			ml={5}
			{...rest}
		>
			{children}
		</Heading>
	</Link>
))`
	text-decoration: none;
`
;

const Logo = styled(Link)`
	background-color: #1d3343;
	color: white;
	text-decoration: none;
	align-items: center;
	letter-spacing: 8px;
	font-family: abolition, sans-serif;
`;

const PMLHeader = (props) => {
	return (
		<StyledHeader
			px={4}
			bg="pmlBlue"
			alignItems="center"
			width={[1]}
			gridArea="header"
			shadow="small"
			height="60px"
		>
			<NavLinksLeft>
				<NavText 
					fontSize={[4]}
					to="/pml/"
					mr={5}
				>
					PML
				</NavText>
				<NavText 
					fontSize={[2]}
					to="/pml/courses" 
					style={{fontWeight: 'bold'}}
				>Music Production Courses</NavText>
				<NavText 
					fontSize={[2]}
					to="/pml/"
				>
					DAW Files
				</NavText>
				<NavText 
					fontSize={[2]}
					to="/pml/"
				>
					Synth Presets
				</NavText>
				<NavText 
					fontSize={[2]}
					to="/pml/"
				>
					Bundle Packs
				</NavText>
				<NavText 
					fontSize={[2]}
					to="/pml/"
				>
					!Freebies!
				</NavText>
				<NavText 
					fontSize={[2]}
					to="/pml/"
				>
					Blog
				</NavText>
			</NavLinksLeft>
			<NavLinksRight>
				<NavText
					fontSize={[2]}
					to="/pml/"
				>
					Login
				</NavText>
				<NavText
					fontSize={[2]}
					to="/pml/"
				>
					Cart
				</NavText>
				<NavText
					fontSize={[2]}
					to="/pml/"
				>
					GBP
				</NavText>
			</NavLinksRight>
		</StyledHeader>
	);
}

export default PMLHeader;
