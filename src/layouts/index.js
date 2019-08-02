/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext, useMemo } from "react";
import PropTypes from "prop-types";
import Sidebar from "../components/sidebar";
import PageTransition from './PageTransition';
import GlobalContextProvider, { GlobalContext } from "./GlobalContext.js";
import { useStaticQuery, graphql } from "gatsby";
import Canvas from "../components/Canvas/Canvas";
import styled from "styled-components";
import below from "../lib/utils/breakpoints";
import { Link } from "gatsby"
import { AppContainer, StyledCanvas, Main, GlobalStyle, StyledPageTransition, PageContent } from "./layout-styles";


const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);


  const { globalState, dispatch } = useContext(GlobalContext);


  const canvas = useMemo(() => <StyledCanvas />);

  return (
    <GlobalContextProvider>
      <GlobalStyle />
      <AppContainer>
        <Sidebar siteTitle={data.site.siteMetadata.title} />
        <Main>
          {canvas}
          <StyledPageTransition location={location}>
            <PageContent>
              {children}
            </PageContent>
          </StyledPageTransition>
        </Main>
      </AppContainer>
    </GlobalContextProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
