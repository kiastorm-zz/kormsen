import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import SEO from "../components/seo"
import Box from "../components/Box"
import styled from 'styled-components';
import { GlobalContext } from "../layouts/GlobalContext"
import { toggleSidebar } from "../layouts/actions"

const Title = styled.h3`

`;

const Intro = styled(Box)`
  background-color: #C77A58;
  grid-area: intro;
  border-radius: 100%;
`;

const HomePage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 420px;
  grid-template-rows: 420px 1fr 1fr;
  grid-template-areas:
  ". . intro"
  ". . intro";
  width: 100%;
`;

const IndexPage = (props) => {
  const { globalState, dispatch } = useContext(GlobalContext);

  return (
    <HomePage>
      <SEO title="Home" />
      <Intro buttonTo="/sights" buttonText="See sights">
        <Title>A platform for sharing and promoting creativity</Title>
        <h5>Bringing only the ripest nuggets from around the globe</h5>
      </Intro>
    </HomePage>
  );
}

export default IndexPage
