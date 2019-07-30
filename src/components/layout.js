/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Canvas from "./Canvas/Canvas";
import styled from "styled-components";
import Sidebar from "./sidebar";
import below from "../lib/utils/breakpoints";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const AppContainer = styled.div`
    display: grid;
    grid-template-areas:
      "sidebar banner"
      "sidebar content"
      "sidebar content";

    grid-template-columns: 230px 1fr;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
    overflow: hidden;

    ${below.p`
      grid-template-areas:
        "sidebar"
        "content"

      grid-template-columns: 1fr;
      grid-template-rows: 300px 1fr;
    `}
  `;

  const MainContent = styled.div`
    grid-area: content;
    flex: 1;
    height: 100%;
    min-height: 100vh;
  `;

  const StyledCanvas = styled(Canvas)`
    width: 100%;
    height: 100%;
  `;

  const ContentGrid = styled.div`
    padding: 0 32px;
    margin: 0 auto;
    max-width: 1480px;
    margin: 0 auto;
    width: 1200;
    padding: 0px 1.0875rem 1.45rem;
    padding-top: 0;
  `;

  return (
    <AppContainer>
      <Sidebar siteTitle={data.site.siteMetadata.title} />
      <MainContent>
        <StyledCanvas />
        <ContentGrid>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </ContentGrid>
      </MainContent>
    </AppContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
