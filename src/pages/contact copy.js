import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";

const About = () => (
  <div>
    <SEO title="About" />
    <h1>About</h1>
    <Link to="/">Go back to the homepage</Link>
  </div>
);

export default About;
