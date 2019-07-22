import React from 'react';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import './index.css'
import { graphql, StaticQuery } from "gatsby";


export const query = graphql`
query SiteTitleQuery {
site {
   siteMetadata {
     title
       description
       keywords 
    }
  }
  allContentfulLink {
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
          {data.allContentfulLink.edges.map(edge => (
            <a href={edge.node.url}>{edge.node.title}</a>
           ))}
          <footer   />
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.shape(),
}

export default Layout;
