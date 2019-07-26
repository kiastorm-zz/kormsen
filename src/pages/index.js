import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from 'styled-components';

const Title = styled.h1`
  color: ${1 > 4 ? 'red' : 'blue'};
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Title>Hi people</Title>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/sights">Go to page 2</Link>
  </Layout>
)

export default IndexPage
