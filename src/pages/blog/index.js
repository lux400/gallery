import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'src/components/Layout';
import Content, { HTMLContent } from 'src/components/Content';
import SEO from '@components/Layout/SEO';
import BlogRoll from '@components/BlogRoll';
import { FormattedMessage } from 'react-intl';

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section>
      <h2>{title}</h2>
      <PageContent content={content} />
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ pageContext: { locale }, ...props }) => {
  console.log(locale);
  console.log(props);
  return (
    <Layout {...props}>
      <FormattedMessage id="blog"/>
      <BlogRoll  {...props}  />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;


export const pageQuery = graphql`
  query HomeContent($locale: String) {

    posts: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" }, locale: { eq: $locale } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date
          }
        }
      }
    }
  }
`
