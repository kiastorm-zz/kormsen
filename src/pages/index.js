import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import SEO from "../components/seo"
import Box from "../components/Box"
import styled from 'styled-components';
import { GlobalContext } from "../layouts/GlobalContext"
import { toggleSidebar } from "../layouts/actions"

const Title = styled.h3`
  color: white;
`;

const Subtitle = styled.h5`
  color: white;
`;

const Intro = styled(Box)`
  background-color: #1C1E26;
  grid-area: intro;
  border-radius: 100%;
`;

const BlogIndex = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 420px;
  grid-template-rows: 420px 1fr 1fr;
  grid-template-areas:
  ". . intro"
  ". . .";
  width: 100%;
`;

const IndexPage = (props) => {
  const { globalState, dispatch } = useContext(GlobalContext);

  return (
    <BlogIndex>
      <SEO title="Home" />
      <Intro buttonTo="/sights" buttonText="See sights">
        <Title>A platform for sharing and promoting creativity</Title>
        <Subtitle>Bringing only the ripest nuggets of joy</Subtitle>
      </Intro>
    </BlogIndex>
  );
}

export default IndexPage
