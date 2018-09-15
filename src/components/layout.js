import React, {Fragment} from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

import Header from './header'
import Footer from './footer'

const Layout = ({ children, data }) => (
      <StaticQuery
        query={query}
        render={data => (
          <Fragment>
            <header>{<Header siteTitle={data.site.siteMetadata.title} />}</header>
            <main>{children}</main>
            <footer>{<Footer />}</footer>
          </Fragment>
        )}
      />
)

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`


export default Layout
