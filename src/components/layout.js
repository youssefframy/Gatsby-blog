import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="dark:bg-mainBlack dark:text-white">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="py-4 px-8 md:px-16 lg:px-28">
        <main className="container">
          {children}
        </main>
        <hr className="w-full my-4 md:12"/>
        <footer className="lg:text-lg font-semibold pb-12">
          © {new Date().getFullYear()}, Created by Y. R
        </footer>
      </div>
    </div>
  )
}

export default Layout
