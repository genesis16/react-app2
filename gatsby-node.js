const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve('./src/templates/blog-post.js')

  try {
    const { data: { allContentfulBlogPost: { edges: posts } } } = await graphql(`{
    allContentfulBlogPost {
      totalCount
      edges {
        node {
          title
          slug
        }
      }
    }
    }`);


    posts.forEach(({ node }, index) => {
      createPage({
        path:  node.slug,
        component: blogTemplate,
        context: {
          slug: node.slug,
        }
      })
    });

    return posts;

  } catch (error) {
    console.log(error);
    throw error.errors
  }
}
