import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Thoughts = () => (
  <Layout>
    <SEO title="Thoughts" />
    <h1>Thoughts</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Thoughts;
