import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


export default ({ data }) => (
  <Layout>
    <Seo title="Homepage" />
    <div className="not-prose min-h-screen mt-12">
      <div className="flex flex-col justify-start items-start gap-2 mb-6">
        <h1 className="text-3xl">Topics</h1>
        <h4 className="lg:text-xl">{data.allMarkdownRemark.totalCount} Posts</h4>
      </div>
      {
        data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.fields.slug} className="flex flex-col justify-start items-start gap-2 mb-8 lg:mb-16 overflow-auto">
            <Link to={node.fields.slug}>
              <h3 className="dark:text-mainWhite hover:underline hover:decoration-mainPurple duration-500 transition-all ease-linear text-2xl md:text-4xl font-bold cursor-pointer lg:mb-2">
                {node.frontmatter.title}
              </h3>
            </Link>
            <p className="dark:text-mainGray text-sm md:text-lg lg:mb-2 font-thin">{node.frontmatter.date}</p>
            <p className="md:text-2xl">{node.excerpt}</p>
            <Link to={node.fields.slug} className="md:text-2xl font-semibold text-mainPurple lg:mt-2">Read more</Link>
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
            category
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