import React from 'react';
import styled from 'styled-components';
import {Box, Grid, Flex, Heading, Card, Image} from 'rebass/styled-components';
import {animated, useTransition} from 'react-spring'
import Hero from '../../components/hero';
import square1 from '../../assets/images/slide_5.webp';
import square2 from '../../assets/images/pml/courses/beginners.webp';
import square3 from '../../assets/images/pml/courses/chords.webp';
import square4 from '../../assets/images/pml/courses/push2.webp';
import square5 from '../../assets/images/pml/courses/samples1.webp';
import square6 from '../../assets/images/pml/courses/samples2.webp';
import square7 from '../../assets/images/pml/courses/samples3.webp';
import square8 from '../../assets/images/pml/courses/samples4.webp';
import square9 from '../../assets/images/pml/courses/techno.webp';
import square10 from '../../assets/images/pml/courses/techno2.webp';
import square11 from '../../assets/images/pml/courses/techno3.webp';
import square12 from '../../assets/images/pml/courses/grooverhythm.webp';
import square13 from '../../assets/images/pml/courses/melodies.webp';
import Slideshow from '../../components/Slideshow';
import randomString from '../../lib/utils/random-string';
import GridContainer from '../../components/grid-container';

const PageContainer = styled(Flex)`
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

const TopRatedChart = styled(Box)`

`;

const Bundles = styled.div`
	background: lightred;
	grid-area: bundles;
`;

const Main = styled(Flex)`
`;

const List = styled(Flex)`
`;

const Item = styled(Flex)`
	border-top: 1px solid #f0f0f0;
	border-bottom: 1px solid #f0f0f0;
`;

const featuredSlides = [
  {
    key: randomString(4),
	image: square1,
	caption: 'Example',
  },
  {
    key: randomString(4),
	image: square2,
	caption: 'Example',
  },
  {
    key: randomString(4),
	image: square3,
	caption: 'Example',
  },
  {
    key: randomString(4),
	image: square4,
	caption: 'Example',
  },
  {
    key: randomString(4),
	image: square5,
	caption: 'Example',
  },
  {
    key: randomString(4),
	image: square6,
	caption: 'Example',
  },
  {
    key: randomString(4),
	image: square7,
	caption: 'Example',
  },
  {
    key: randomString(4),
	image: square8,
	caption: 'Example',
  },
  {
    key: randomString(4),
	image: square9,
	caption: 'Example',
  },
  {
    key: randomString(4),
	image: square10,
	caption: 'Example',
  }
];


const PMLIndex = (props) => {
	return (
		<PageContainer
			flexDirection="column"
			
			width={[1]}
		>
			<Hero />
			<Main bg="lightGray" flexWrap="wrap" py={20}>
				<GridContainer>
					<Featured 
						pr={3}
						width={[3/4]}
					>
							<Heading
								fontSize={[4, 3]}
								mb={12}>
									Featured on Production Music Live
								</Heading>
							<Slideshow slides={featuredSlides} />
					</Featured>

					<TopRated
						pl={6}
						width={[1/4]}
						height={400}
					>
							<TopRatedChart
								bg="white"
								height="100%"
								py={3}
							>
								<Heading
									fontSize={3}
									ml={4}
									mb={5}
									borderRadius={4}
								>
									Top Rated
								</Heading>
								<List flexDirection="column">
									<Item alignItems="center">
										<Image src={square2} width={[1/5]} />
										<Box pl={4} width={[3/5]} >
											<Heading fontSize={[1]}>Beginners Course Start to Finish</Heading>
										</Box>
									</Item>
									<Item alignItems="center">
										<Image src={square2} width={[1/5]} />
										<Box pl={4} width={[3/5]} >
											<Heading fontSize={[1]}>Beginners Course Start to Finish</Heading>
										</Box>
									</Item>
									<Item alignItems="center">
										<Image src={square2} width={[1/5]} />
										<Box pl={4} width={[3/5]} >
											<Heading fontSize={[1]}>Beginners Course Start to Finish</Heading>
										</Box>
									</Item>
									<Item alignItems="center">
										<Image src={square2} width={[1/5]} />
										<Box pl={4} width={[3/5]} >
											<Heading fontSize={[1]}>Beginners Course Start to Finish</Heading>
										</Box>
									</Item>
									<Item alignItems="center">
										<Image src={square2} width={[1/5]} />
										<Box pl={4} width={[3/5]} >
											<Heading fontSize={[1]}>Beginners Course Start to Finish</Heading>
										</Box>
									</Item>

								</List>
							</TopRatedChart>
					</TopRated> 
				</GridContainer>
			</Main>
		</PageContainer>
	);
}

export default PMLIndex;
