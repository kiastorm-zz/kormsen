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
import PMLHeader from "../components/pml/pml-header";
import PMLSidebar from "../components/pml/pml-sidebar/pml-sidebar";
import { Box } from 'rebass';
import { ThemeProvider } from 'styled-components';
import { AppContainer, PMLContainer, PMLPageContent, PageContainer, StyledCanvas, Main, GlobalStyle, StyledPageTransition, PageContent } from "./layout-styles";

const theme = {
	colors: {
		darkblue: '#1d3343',
		greyblue: '#4C6173',
		blue: '#009EF7',
		bggrey: '#e1e1e1',
	},
};


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

  return (
    <GlobalContextProvider>
			{/* <ThemeProvider theme={theme}> */}
				<GlobalStyle />
				<AppContainer>
					{	location.pathname.includes('pml') ?
					<PMLContainer>
						<PMLHeader  />
						<PMLSidebar/>
						<PMLPageContent>
							{children}
						</PMLPageContent>
					</PMLContainer>
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
			{/* </ThemeProvider> */}
    </GlobalContextProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
