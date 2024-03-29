
import React from 'react';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import './index.css'
import { graphql, StaticQuery } from "gatsby"
import Footer from '../components/Footer';


export const query = graphql`
query SiteTitleQuery {
site {
   siteMetadata {
     title
       description
       keywords 
    }
  }
  allContentfulLink(sort: {fields: [createdAt], order: ASC }) {
    edges {
      node {
        title
        url
      }
    }
  }
}
`

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => (
      <>
        <div>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: data.site.siteMetadata.description },
              { name: 'keywords', content: data.site.siteMetadata.keywords },
            ]}
          />
          <Header/>
          {children}
          <Footer data={data}>
            Websites built in modern javacript frameworks, optimised for speed and SEO.<br/>
            <a href="mailto:jane@thealphaandomega.com.au">Email Us&nbsp;
            </a>to ask anything.
          </Footer>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.shape(),
}

export default Layout;