/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useRef } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ThreeCanvas from "../components/three-canvas";
import styled from 'styled-components';
import Sidebar from "./sidebar"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const canvasRef = useRef(null);

  const AppContainer = styled.div`
    display: grid;
    grid-template-areas:
    "sidebar banner"
    "sidebar content"
    "sidebar content";

    grid-template-columns: 230px 1fr;
    grid-template-rows: auto 1fr auto;
    grid-gap: 24px;

    height: 100vh;
  `;

  const MainContent = styled.div`
    grid-area: content;
    flex: 1;
    height: 100%;
    min-height: 100vh;
    top: 0;
    right: 0;
    bottom: 0;
    left: 208px;
  `;

  const StyledCanvas = styled(ThreeCanvas)`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -2;
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
        <StyledCanvas ref={canvasRef} />
        <ContentGrid>
          <main>
            {children}
          </main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </ContentGrid>
      </MainContent>
    </AppContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
