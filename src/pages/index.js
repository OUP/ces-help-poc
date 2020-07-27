import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
        
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___title], order: DESC }) {
      totalCount
      edges {
        node {
          id
          html
          rawMarkdownBody
          frontmatter {
            title
           
          }
          excerpt
         
        }
      }
    }
  }
`