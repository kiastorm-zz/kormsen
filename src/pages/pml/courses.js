import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';
import {Box, Grid, Flex, Heading, Card, Image} from 'rebass/styled-components';
import Hero from '../../components/hero';
import square1 from '../../assets/images/slide_5.webp';
import randomString from '../../lib/utils/random-string';
import PMLSidebar from "../../components/pml/pml-sidebar/pml-sidebar";
import {animated, useTransition, useSpring, useChain} from 'react-spring';

const PageContainer = styled(Flex)`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;


	display: grid;
	grid-template-columns: 240px 1fr;
`;

const LeftCol = styled(Box)`
	
`;

const Sidebar = styled(PMLSidebar)`
	height: 100%;
`;




const Courses = (props) => {
	const [sidebarIsOpen, setSidebarIsOpen] = useState(true);


	const {colWidth} = useSpring({
		colWidth: sidebarIsOpen ? 240 : 0,
	});

	return (
		<PageContainer flexDirecttion="column" style={{
			gridTemplateColumns: colWidth.interpolate(value => `${value}px 1fr`)
		}}>
			<LeftCol>
				<Sidebar />
			</LeftCol>
			<Box bg="lightGray" style={{height: '100%'}} p={8}>
				<Heading color="red">I dont have time to do this page but some ideas to let you know: </Heading>
				<Heading mt={4}>I am skilled in smooth animations, providing a great fluid user experience for your application/website</Heading>
				<Heading mt={4}>Users will be able to filter products based on exactly what theyre looking for, if someone wants to buy a Serum tutorial, they can find only Serum tutorials by filtering via the sidebar</Heading>
				<Heading mt={4}>Take note of the seamless transition between pages. This site (and your site would be) built in Gatsby JS. An amazingly fast static asset generator (your site optimises itself for the fastest possible experience) and all pages are preloading, meaning INSTANT load times <Link to="https://www.gatsbyjs.org/">Go here and check out some examples to learn more</Link> P.S:  Yes, it integrates with Shopify</Heading>
				<Heading mt={4}>The homepage would be a Netflix style layout that expands upon clicking a product image. The homepage allows you to display 'Featured' products (proucts handpicked by you to display based on what you believe will sell) and also a right box showing the top rated/most popular products. Giving users multiple avenues to explore without even leaving the homepage</Heading>
				<Heading mt={4}>I have plenty more ideas although I work full time and so didnt have much time to whip something up for you :) Hope you like</Heading>
			</Box>
		</PageContainer>
	);
}

export default Courses;
