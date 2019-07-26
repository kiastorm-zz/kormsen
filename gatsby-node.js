/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulSights {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulSights.edges.forEach(({ node }) => {
        console.log(node);
        createPage({
          path: node.slug,
          component: path.resolve("./src/templates/PhotoAlbum.js"),
          context: {
            slug: node.slug
          }
        });
      });
      resolve();
    });
  });
};
