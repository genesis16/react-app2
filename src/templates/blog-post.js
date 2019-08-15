import React from 'react';
import { graphql } from "gatsby";
import Image from 'gatsby-image';


const BlogPost = ({ data: { contentfulBlogPost: { title, author, tags, description, heroImage } }}) => (
  <div style={{ maxWidth: 1170, textAlign: 'center', margin: 'auto'}}>
    <h1 style={{ textAlign: 'center'}}>{title}</h1>

    <div>
      <Image
        style={{ width: '100%', maxHeight: 540}}
        fluid={heroImage.fluid}
        objectFit="cover"
        objectPosition="100% 100%"
        alt={title}
      />
      <div>
        <p>{description.description}</p>
        <p>{author.name}</p>
      </div>
    </div>
  </div>
);

export default BlogPost;


export const query = graphql`
  query postBySlug($slug: String!) {
      contentfulBlogPost(slug: { eq: $slug }) {
        author {
          name
        }
        title
        tags
        description {
          description
        }
        heroImage {
          fluid(maxHeight: 540) {
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
`
