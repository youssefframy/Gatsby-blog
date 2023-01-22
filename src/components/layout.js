import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Icon } from '@iconify/react';

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
    <div className="h-screen dark:bg-mainBlack dark:text-white">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="p-8 md:px-16 lg:px-28">
        <main>
          {children}
        </main>
        <hr className="w-full my-4 md:12"/>
        {/* <footer>
          <div className="flex justify-start items-center gap-4">
            <Icon icon="fa-brands:github-alt" width={40} className="text-[#6e5494] cursor-pointer" />
            <Icon icon="eva:linkedin-outline" width={40} className="text-[#0077b5] cursor-pointer" />
          </div>
        </footer> */}
      </div>
    </div>
  )
}

export default Layout
