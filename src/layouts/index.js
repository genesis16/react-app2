import React from 'react';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import './index.css'
import { graphql, StaticQuery } from "gatsby";


export const query = graphql`
query {
site {
siteMetadata {
title
}
}
}
`;

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
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.shape(),
}

export default Layout;
