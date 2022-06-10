import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/Layout"
import style from '../styles/home.module.css'
import Img from "gatsby-image"

export default function Home({ data }) {
  console.log(data)
  
  return (
    <Layout>
      <section style={{ display: "grid",gridTemplateColumns: "1fr 1fr",gridGap: "40px",alignItems:" center"}}> 
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link to="/projects" style={{ display: "inline-block",background: "#d42990",padding: "10px 16px", borderRadius: "10px",marginTop: "20px",
    fontWeight: "500"  }}>My Portfolio Projects</Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
