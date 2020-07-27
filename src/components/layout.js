import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark {
                    edges {
                      node {
                       fields {
                        slug
                        siteName
                    }
                 }
               }
             }
      }
    `
  )


  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <ul style={{ listStyle: `none`, float: `right` }}>
      <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to="/">Home</Link>
        </li>

        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <li style={{ display: `inline-block`, marginRight: `1rem` }}>
              <Link to={node.fields.slug}>{node.fields.siteName}</Link>
            </li>
          )
        })}
      </ul>
      {children}
    </div>
  )
}
