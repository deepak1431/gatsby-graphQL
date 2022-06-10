import React from 'react'
import Layout from '../../components/Layout'
import * as style from '../../styles/projects.module.css'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

export default function Projects({ data }) {
  console.log(data)
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div 
      className={style.portfolio}
      >
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div
         className={style.projects}
         >
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{ project.frontmatter.title }</h3>
                <p>{ project.frontmatter.stack }</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Email me at {contact} for a quote!</p>
      </div>
    </Layout>
  );
}
 

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
