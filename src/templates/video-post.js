import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import { PosterBlock } from '@components/VideoRoll/styled';

export const VideoPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  video,

  ...props
}) => {
  const PostContent = contentComponent || Content;
  console.log(video);
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <video width="400" height="300" controls="controls">
              <source
                src={video}
                type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
              />
            </video>

            <p>{description}</p>
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

VideoPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const VideoPost = ({ data, ...props }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout {...props}>
      <VideoPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        video={post.frontmatter.video}
      />
    </Layout>
  );
};

VideoPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default VideoPost;


