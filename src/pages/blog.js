import React from 'react';
import { graphql, Link } from "gatsby";
import Image from 'gatsby-image';

const Blog = ({ data: { allContentfulBlogPost: { edges } } }) => (
  <div>
    <h1 style={{ textAlign: 'center'}}>Blog</h1>

    <div style={{ margin: 'auto', display: 'flex', flexWrap: 'wrap', maxWidth: 1170, justifyContent: 'center' }}>
      {edges.map(({ node }) => (
        <Link to={node.slug} style={{ width: '33%', display: 'flex', flexDirection: 'column'}}>
          <div style={{ margin: 15, background: '#f5f5f5' }}>
            <Image
              style={{ width: '100%', maxHeight: 220}}
              fluid={node.heroImage.fluid}
              objectFit="cover"
              objectPosition="100% 100%"
              alt={node.title}
            />
            <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 15, paddingRight: 15 }}>
              <h3>{node.title}</h3>
              <p>{node.description.description}</p>
              <p>{node.author.name}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default Blog;

export const query = graphql`
    query {
      allContentfulBlogPost {
        edges {
          node {
            title
            slug
            description {
              description
            }
            author {
              name
            }
            
            heroImage {
              fluid(maxHeight: 400) {
                src
                aspectRatio
                srcWebp
                base64
                sizes
                srcSet
                srcSetWebp
              }
            }
          }
        }
      }
    }
  `
