const webpackConfig = require('./webpack.config');
const languages = require('./src/translations/languages');

module.exports = {
  siteMetadata: {
    languages,
    siteUrl: 'https://marynabardina.com',
    title: 'Maryna Bardina · Transformation Designer and UX Researcher',
    titleTemplate: '%s · Maryna Bardina',
    description:
      'Maryna Bardina is a product manager, user experience researcher, designer, and strategist living in Portland, OR.',
    url: 'https://marisamorby.com', // no trailing slash!
    image: '/images/marisa-morby.jpg',
    owner: 'Maryna Bardina',
    twitterUsername: '@marisamorby',
    facebookAppID: '',
    nav: [
      { path: 'https://medium.com/@marisamorby', name: 'Blog', hidden: true },
      { path: '/#about', name: 'About' },
      { path: '/#process', name: 'Process' },
      { path: '/#speaking', name: 'Speaking' },
      { path: '/#contact', name: 'Contact' },
    ],
    categories: [
      { slug: 'confidence', name: 'Confidence' },
      { slug: 'better-humans', name: 'Better Humans' },
      { slug: 'business-basics', name: 'Business Basics' },
      { slug: 'uncomfortable-things', name: 'Uncomfortable Things' },
    ],
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,

  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: webpackConfig.resolve,
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/media`,
        name: 'uploads',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/media/icon.png',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/media`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
