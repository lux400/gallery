const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const Cyrillic = require('cyrillic-to-translit-js');

const cyrillicToTranslit = new Cyrillic({ preset: 'uk' });

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              locale
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(edge => {
      const { id } = edge.node;
      const { locale } = edge.node.frontmatter;
      console.log(edge.node.frontmatter);
      createPage({
        path: cyrillicToTranslit.transform(edge.node.fields.slug, '-'),
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`,
        ),

        context: {
          id,
          locale,
        },
      });
    });
  });
};

const locales = {
  en: {
    path: 'en',
    locale: 'English',
  },
  ua: {
    path: 'ua',
    locale: 'Ukrainian',
    default: true,
  },
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  return new Promise(resolve => {
    deletePage(page);

    Object.keys(locales).map(lang => {
      const localizedPath = locales[lang].default
        ? page.path
        : locales[lang].path + page.path;
      console.log(localizedPath);
      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang,
        },
      });
    });
    resolve();
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  // fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value: cyrillicToTranslit.transform(value, '-'),
    });
  }
};
