import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";

const Sights = ({ post }) => (
  <div>
    <SEO title="Sights" />
    {/* <h1>{data.}</h1> */}
    <Link to="/">Go back to the homepage</Link>
  </div>
);

export default Sights;

// export const query = graphql`
//   allContentfulSights {
//     edges {
//       node {
//         id
//         title
//         author
//         createdAt
//         date
//         slug
//         description {
//           description
//         }
//         content {
//           id
//           fluid(maxWidth: 600) {
//             src
//           }
//         }
//       }
//     }
//   }
// `;
