import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import { animated, useTransition, useSpring } from 'react-spring';
import SEO from "../components/seo";


const SightsContainer = styled.div`
  display: grid;
  grid-template-rows: auto 250px 100px 1fr;
  grid-template-areas:
    "pageheader"
    "banner"
    "tabs"
    "pagecontent";
  width: 100%;
`;
const SightsHeader = styled(animated.div)`
  background-color: white;
  grid-area: pageheader;
`;

const Banner = styled(animated.div)`
  grid-area: banner;
`;



const Sights = ({ data }) => {

  // // const [items, set] = useState([...])
  // const transitions = useTransition(items, item => item.key, {
  //   from: { transform: 'translate3d(0,-40px,0)' },
  //   enter: { transform: 'translate3d(0,0px,0)' },
  //   leave: { transform: 'translate3d(0,-40px,0)' },
  // })

  return (
    <SightsContainer>
      <SEO title="Sights" />
      {/* {transitions.map(({ item, props, key }) => {
        <SightsHeader>
          <h1>Sights</h1>
        </SightsHeader>
      })} */}
      {data.allContentfulSights.edges.map(({ node }) => {
        return (
          <div key={node.id}>
            <h1>{node.title}</h1>
            <h4><a href={node.slug}>This is a link to the post</a></h4>
          </div>
        )
      })}
      <Link to="/">Go back to the homepage</Link>

      {console.log(data)}

    </SightsContainer>
  );
}

export default Sights;

export const query = graphql`
  query SightsQuery {
    allContentfulSights {
      edges {
        node {
          id
          title
          slug
          description {
            description
          }
          author
          content {
            id
            fluid(maxWidth: 600) {
              src
            }
          }
        }
      }
    }
  }
`;
