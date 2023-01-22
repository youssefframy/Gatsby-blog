import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


export default ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <div>
      <h1>My Site's Blog</h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    </div>
  </Layout>
)


export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          html
          frontmatter {
            date
            description
            title
          }
          excerpt
        }
      }
    }
}
`