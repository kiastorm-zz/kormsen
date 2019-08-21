import React from 'react';
import styled from 'styled-components';
import {useTransition, animated} from 'react-spring';
import {Heading} from 'rebass/styled-components';

const HeroContainer = styled(animated.div)`
	background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%);
	display: flex;
	padding: 0 60px;
`;

const HeroContent = styled(animated.div)`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin: 0 auto;
	justify-content: center;
`;

const Hero = ({bg}) => {
	return (
		<HeroContainer>
			<HeroContent>
				<Heading
					as="h1"
					color="lightgray"
				>It's the perfect day to learn.</Heading>
				<Heading
					 as="h3"
					 color="lightgray"
				>
					Check out our range of courses, DAW templates & more.
				</Heading>
			</HeroContent>
		</HeroContainer>
	);
};

export default Hero;
