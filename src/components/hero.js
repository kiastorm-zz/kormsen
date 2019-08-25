import React from 'react';
import styled from 'styled-components';
import {useTransition, animated} from 'react-spring';
import {Heading, Flex, Box} from 'rebass/styled-components';
import GridContainer from './grid-container';

const HeroContainer = styled(Flex)`
	background: #67B26F;  /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #4ca2cd, #67B26F);  /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(to right, #4ca2cd, #67B26F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const HeroContent = styled(Flex)`
	display: flex;
	flex-direction: column;
	text-align: left;
	justify-content: center;
`;

const Hero = ({bg}) => {
	return (
		<HeroContainer>
			<GridContainer>
				<HeroContent
					my={32}
					flexDirection="column"
					justifyContent="center" 
					width={[1]}

				>
					<Heading
						as="h1"
						fontSize={[8, 7, 6]}
						lineHeight={[2]}
						color="lightGray"
						mt={2}
					>It's the perfect day to learn.</Heading>
					<Heading
						as="h3"
						fontSize={[6, 5, 4]}
						color="lightGray"
					>
						Check out our range of courses, DAW templates & more.
					</Heading>
				</HeroContent>
			</GridContainer>
		</HeroContainer>
	);
};

export default Hero;
