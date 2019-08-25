import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import {Box, Flex, Image, Heading, Text} from 'rebass/styled-components';
import BGBox from './bg-box';
import randomString from '../lib/utils/random-string';


const {slideHeight} = {
  slideHeight: 240,
}

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */



const Overlay = styled(Box)`
  display: none;
`;

const Slide = styled(BGBox)`
  position: relative;

  &:hover {
    ${Overlay} {
      display: block;
      position: absolute;
      top:0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
`;





const Img = styled(Image)`
  width: 256px;
  height: 256px;`
;
const Controls = styled(Box)`
  display: flex;
`;

const Row = styled(Flex)`
  overflow: scroll;
  width: 100%;  
`;

const RowInner = styled(Flex)`
  /* margin: ${slideHeight / 2} 0; */
  min-width: auto;
  flex: 1 0 auto;
  padding-bottom: 10px;
`;

function Slideshow({slides}) {
  const [index, setIndex] = useState(0)
  // const { allFile } = useStaticQuery(
  //   graphql`
  //     query {
  //       allFile(
  //         sort: { fields: name, order: DESC }
  //         filter: { relativeDirectory: { eq: "slides" } }
  //       ) {
  //         edges {
  //           node {
  //             id
  //             name
  //             childImageSharp {
  //               fluid(maxWidth: 600) {
  //                 ...GatsbyImageSharpFluid_withWebp_tracedSVG
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // )



  //Minus 1 for array offset from 0
  const length = slides.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
	// const {  } = slides[index]

  return (
    <Row>  
      <RowInner mx={-4}>
        {slides.map(({image, caption}) => (
          <Slide key={randomString(4)} src={image} mx={4}>
            <Overlay>
              <Text fontSize={[3]}>{caption}</Text>
            </Overlay>
          </Slide>
        ))}

        {/* <Controls>
          <button onClick={() => handlePrevious()}>Previous</button>
          <button onClick={() => handleNext()}>Next</button>
        </Controls> */}
      </RowInner>
    </Row>
  )
}
export default Slideshow;
