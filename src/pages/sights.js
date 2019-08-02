import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";

const Sights = ({ data }) => (
  <div>
    <SEO title="Sights" />
    <h1>Sights</h1>
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

  </div>
);

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
