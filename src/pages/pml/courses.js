import React from 'react';
import styled from 'styled-components';
import {Box, Grid, Flex, Heading, Card, Image} from 'rebass/styled-components';
import Hero from '../../components/hero';
import square1 from '../../assets/images/slide_5.webp';
import Carousel from 'react-spring-3d-carousel';
import randomString from '../../lib/utils/random-string';
import PMLSidebar from "../../components/pml/pml-sidebar/pml-sidebar";
import {animated, useTransition, useSpring, useChain} from 'react-spring';

const PageContainer = styled.div`
	display: grid;
	height: 100%;
	width: 100%;
`;





const Courses = (props) => {
	return (
		<PageContainer>
				<PMLSidebar/>
				<Flex bg="green" style={{height: '100vh'}}>
					<Heading color="red">HELLO!</Heading>
				</Flex>
		</PageContainer>
	);
}

export default Courses;
