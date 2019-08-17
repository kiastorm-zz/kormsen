/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Sidebar from "../components/sidebar";
import GlobalContextProvider from "./GlobalContext.js";
import { useStaticQuery, graphql } from "gatsby";
import ToolBar from "../components/tool-bar";
import { AppContainer, PageContainer, StyledCanvas, Main, GlobalStyle, StyledPageTransition, PageContent } from "./layout-styles";


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

  const canvas = useMemo(() => <StyledCanvas />);

	console.log(location);
  return (
    <GlobalContextProvider>
      <GlobalStyle />
      <AppContainer>
				{	location.pathname.includes('pml') ?
				<h1>HELLO</h1>

				:
				<>
					<ToolBar />
					<PageContainer>
						<Sidebar siteTitle={data.site.siteMetadata.title} />
						<Main>
							{canvas}
							<StyledPageTransition location={location}>
								<PageContent>
									{children}
								</PageContent>
							</StyledPageTransition>
						</Main>
					</PageContainer>
				</>
				}

      </AppContainer>
    </GlobalContextProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
