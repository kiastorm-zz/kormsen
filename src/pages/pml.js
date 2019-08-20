import React from 'react';
import styled from 'styled-components';
import {Box, Grid} from 'rebass';

const PageContainer = styled.div`
	display: grid;
	grid-template-rows: 300px 1fr;
	width: 100%;
`;

// const Hero = styled.div`
// 	background-color: lightblue;
// 	display: flex;
// 	justify-content: center;
// 	width: 100%;
// 	grid-column: span 12;
// `;

// const Latest = styled.div`
// 	grid-area: latest;
// `;

// const TopRated = styled.div`
// 	grid-area: toprated;

// `;

// const HeroContent = styled.div`
// 	display: grid;
// 	grid-template-columns: repeat(12, 1fr);
// 	grid-gap: 24px;
// 	align-items: center;
// `;

// const HeroLeft = styled.div`
// 	grid-column: span 7;
// `;

// const Main = styled.div`
// 	display: grid;
// 	grid-area: main;
// 	max-width: 1200px;


// `;

const PMLIndex = (props) => {
	return (
		<PageContainer>
				<h1>OMG</h1>
		</PageContainer>
	);
}

export default PMLIndex;
