import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import * as Styles from '../styles/project-details.module.css'
import Layout from "../components/Layout"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={Styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={Styles.featured}>
          <Img fluid={featuredImg.childImageSharp.fluid} />
        </div>
        <div className={Styles.html} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}
 

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`