import React from 'react';
import styled from 'styled-components';
import {Box, Grid, Flex, Heading, Card, Image} from 'rebass/styled-components';
import Hero from '../../components/hero';
import square1 from '../../assets/images/slide_5.webp';
import Carousel from 'react-spring-3d-carousel';
import randomString from '../../lib/utils/random-string';
import PMLSidebar from "../../components/pml/pml-sidebar/pml-sidebar";
import {animated, useTransition, useSpring, useChain} from 'react-spring';

const PageContainer = styled(Flex)`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;





const Courses = (props) => {
	return (
		<PageContainer flexDirecttion="column" >
				<PMLSidebar/>
				<Flex bg="green" style={{height: '100px'}}>
					<Heading color="red">HELLO!</Heading>
				</Flex>
		</PageContainer>
	);
}

export default Courses;
