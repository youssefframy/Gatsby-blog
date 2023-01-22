/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `Youssef's Blog`,
    description: `A blog about web development and other stuff by a young, aspiring developer.`,
    author: `@Y.R`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdowns`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                h1: 'text-4xl font-bold',
                h2: 'text-3xl font-bold',
                h3: 'text-2xl font-bold',
                h4: 'text-xl font-bold',
                h5: 'text-lg font-bold',
                h6: 'text-base font-bold',
                p: 'text-base',
                a: 'text-[#9ca3af] hover:text-[#745488]',
                li: 'text-base',
                blockquote: 'text-base',
                table: 'text-base',
                tr: 'text-base',
                th: 'text-base',
                td: 'text-base',
              },
            },
      }],
    },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
