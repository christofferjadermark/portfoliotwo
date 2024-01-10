const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allContentfulProjects {
        nodes {
          slug
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    throw result.errors;
  }

  const projectTemplate = path.resolve(`src/templates/projectTemplate.js`);

  result.data.allContentfulProjects.nodes.forEach((node) => {
    createPage({
      path: `/projects/${node.slug}`,
      component: projectTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
};
