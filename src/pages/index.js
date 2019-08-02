import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import SEO from "../components/seo"
import Box from "../components/Box"
import styled from 'styled-components';
import { GlobalContext } from "../layouts/GlobalContext"
import { toggleSidebar } from "../layouts/actions"

const Title = styled.h2`
  color: white;
`;

const Intro = styled(Box)`
  background-color: #7c4c64;
  grid-area: intro;
`;

const HomePage = styled.div`
  display: grid;
  grid-template-columns: 420px 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
  "intro ."
  ". .";
  width: 100%;
`;

const IndexPage = (props) => {
  const { globalState, dispatch } = useContext(GlobalContext);

  console.log('home', globalState);





  return (
    <HomePage>
      <SEO title="Home" />
      <Intro>
        <Title>A platform for sharing and promoting creativity.</Title>
        <p>Welcome to your new Gatsby site.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/sights">Go to page 2</Link>
      </Intro>
    </HomePage>
  );
}

export default IndexPage
