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
import { Box } from 'rebass/styled-components';
import { ThemeProvider } from 'styled-components';
import { AppContainer, PMLContainer, PMLPageContent, PageContainer, StyledCanvas, Main, GlobalStyle, StyledPageTransition, PageContent } from "./layout-styles";





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
			<GlobalStyle />
			<ThemeProvider theme={{
        breakpoints: ['40em', '52em', '64em'],
        fontSizes: [
          12, 14, 16, 20, 24, 32, 48, 60, 68
        ],
        colors: {
          pmlBlue: '#1d3343',
          lightGray: '#f6f6ff',
          extraLightGray: '#f1f1f1'
        },
        space: [
          0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112, 116, 120, 14, 128
        ],
        fonts: {
          body: "'Lexend Deca'",
          heading: "'Lexend Deca', sans-serif",
          monospace: 'Menlo, monospace',
        },
        fontWeights: {
          body: 400,
          heading: 500,
          bold: 700,
        },
        lineHeights: {
          body: 1.5,
          heading: 1.25,
        },
        letterSpacing: {
          heading: 1.5,
        },
        shadows: {
          small: '0 0 4px rgba(0, 0, 0, .125)',
          large: '0 0 24px rgba(0, 0, 0, .125)'
        },
        variants: {
        },
        text: {
        },
        buttons: {
          primary: {
            color: 'white',
            bg: 'primary',
          }
        }
      }}>
				<AppContainer>
					{	location.pathname.includes('pml') ?
					<>
						<PMLContainer
              flexDirection="column"

            >
							<PMLHeader />
							<StyledPageTransition location={location}>
								<PMLPageContent>
									{children}
								</PMLPageContent>
							</StyledPageTransition>
						</PMLContainer>
					</>
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
			</ThemeProvider>
    </GlobalContextProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
