import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


export default ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <div className="not-prose min-h-screen mt-12">
      <div className="flex flex-col justify-start items-start gap-2 mb-4">
        <h1 className="text-3xl">Topics</h1>
        <h4 className="lg:text-xl">{data.allMarkdownRemark.totalCount} Posts</h4>
      </div>
      {
        data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="flex flex-col justify-start items-start gap-2 mb-8 lg:mb-16 overflow-auto">
            <Link to={node.fields.slug}>
              <h3 className="text-2xl md:text-4xl dark:text-mainPurple font-bold cursor-pointer">
                {node.frontmatter.title}
              </h3>
            </Link>
            <p className="text-mainGray md:text-lg mb-2">{node.frontmatter.date}</p>
            <p className="md:text-2xl font-semibold">{node.excerpt}</p>
          </div>
        ))
      }
    </div>
  </Layout>
)


export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          html
          frontmatter {
            date
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
}
`