---
title: "Starting a Gatsby Project"
date: "January 20, 2023"
category: "Web Development"
---

## Setting up Gatsby
#### The easiest way to create a gatsby project is by using npx
```powershell
npx gatsby new gatsby-blog
```

#### Intialize gatsby-config.js to add tailwindcss
```tsx
plugins: [
    `gatsby-plugin-postcss`,
    ...otherPlugins
]
```


#### Gatsby Pages
You can add whatever pages you want in the pages folder and `gatsby` automaticly adds it to their routes, And this how the pages Looks like.
```jsx
import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
```

#### Not Found Page
What ever is inside of **404.js** file will be displayed if a page does not exist in the production version.
```jsx
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
```

#### Why do we wrap everything in a header component ?
This is to Render the header and the footer in every single component, and this is because of that static generated websites needs to generate static **HTML** for ever single page.

#### useStaticQuery Hook
This gatsby custom hook is to extract the value of whatever query you are making with GraphQL.
```jsx
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
```

#### SiteMetadata
It contains title, description, and author by default.
```js
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `A blog about web development and other stuff by a young, aspiring developer.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
```

## Gatsby GraphQL + Markdown


#### Insert md into your blogpost website
1. Create a markdown-pages folder
2. Copy files where you have your notes from `Obsidian` with `.md` extension
3. Add new resolve object 
```js
{
	resolve: `gatsby-source-filesystem`,
	  options: {
		name: `markdowns`,
		path: `${__dirname}/src/markdown-pages`,
	  },
},
```
4. Create a header with title, date and desctiption.
```md
-- -
title: ""
date: ""
description: ""
-- -
```


#### Adding `gatsby-transformer-remark` package
What this package does is to transform our markdown files into `HTML` and the header wrapped with '---' into meta description.
and this is how your query should look like
```gql
{
  allMarkdownRemark {
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
```
