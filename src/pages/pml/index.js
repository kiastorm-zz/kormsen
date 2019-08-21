import React from 'react';
import styled from 'styled-components';
import {Box, Grid, Heading, Card, Image} from 'rebass/styled-components';
import {animated, useTransition} from 'react-spring'
import Hero from '../../components/hero';
import square1 from '../../assets/images/slide_5.webp';
import Carousel from 'react-spring-3d-carousel';
import randomString from '../../lib/utils/random-string';

const PageContainer = styled.div`
	display: grid;
	grid-template-rows: 300px 1fr;
	width: 100%;
`;



const Showing = styled(Box)`
	grid-area: showing;
`;

const Featured = styled(Box)`
	grid-area: featured;
`;

const TopRated = styled(Box)`
	grid-area: toprated;
`;

const Bundles = styled.div`
	background: lightred;
	grid-area: bundles;
`;

// const HeroLeft = styled.div`
// 	grid-column: span 7;
// `;

const Main = styled(Box)`
	display: grid;
	grid-template:
	"featured toprated" 240px
	"whatsnew toprated" 240px
	"showing 	showing" 1000px
	"showing 	showing"  100px / 1fr 320px;
	padding: 80px 0;
	width: 100%;
	overflow: hidden;

`;

const SquareSlideshow = styled(Carousel)`

`;

const featuredSlides = [
	{
    key: randomString(4),
    content: <Image src={square1} />
  },
  {
    key: randomString(4),
		content: <Image src={square1} />
  },
  {
    key: randomString(4),
		content: <Image src={square1} />
  },
  {
    key: randomString(4),
		content: <Image src={square1} />
  },
  {
    key: randomString(4),
		content: <Image src={square1} />
  },
  {
    key: randomString(4),
		content: <Image src={square1} />
  },
  {
    key: randomString(4),
		content: <Image src={square1} />
  },
  {
    key: randomString(4),
		content: <Image src={square1} />
  }
];


const PMLIndex = (props) => {
	return (
		<PageContainer>
				<Hero />
				<Main bg="lightgray">
					<Featured px={15}>
						<Heading
							fontSize={[7, 5, 5]}
							mb={12}>
								Featured on Production Music Live
							</Heading>
						<SquareSlideshow offsetRadius={2} slides={featuredSlides} />

					</Featured>
					<TopRated
						bg="autopilotgreen"
						px={3}
						py={5}
						m={6}
						mr={15}
						color="lightgray"
					>
						<Heading
							fontSize={[5, 4, 4]}
							mb={[3]}
						>
							Top Rated
						</Heading>

						<Box mb={6} sx={{border:"1px solid blue"}} py={1} px={2}>
							<Heading>Course</Heading>
						</Box>
						<Box mb={6} sx={{border:"1px solid blue"}} py={1} px={2}>
							<Heading>Techno Template</Heading>
						</Box>
						<Box mb={6} sx={{border:"1px solid blue"}} py={1} px={2}>
							<Heading>Best Sample Pack Ever</Heading>
						</Box>
						<Box mb={6} sx={{border:"1px solid blue"}} py={1} px={2}>
							<Heading>Something else</Heading>
						</Box>
					</TopRated>
					<Showing bg="white">
						<Heading fontSize={[7, 6, 6]}>Awesome description/preview of featured content</Heading>
					</Showing>
				</Main>
		</PageContainer>
	);
}

export default PMLIndex;
