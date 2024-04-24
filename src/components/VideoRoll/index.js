import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import { Container, Row } from '@components/ui';
import {
  VideoBox,
  VideosContainer,
  PosterBlock,
} from '@components/VideoRoll/styled';

const VideoRoll = props => {
  const { data } = props;
  console.log(data);
  const { edges: videos } = data.allMarkdownRemark;

  return (
    <Container>
      <Row>
        <VideosContainer>
          {videos &&
            videos.map(({ node: video }) => (
              <VideoBox
                key={video.id}
                className={`blog-list-item tile is-child box notification ${
                  video.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <Link
                  className="title has-text-primary is-size-4"
                  to={video.fields.slug}
                >
                  <PosterBlock>
                    <img
                      alt={video.frontmatter.title}
                      src={video.frontmatter.poster}
                    />
                  </PosterBlock>
                </Link>
                <p>{video.frontmatter.title}</p>
              </VideoBox>
            ))}
        </VideosContainer>
      </Row>
    </Container>
  );
};

VideoRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query VideoRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "video-post" } } }
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
                poster
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <VideoRoll data={data} count={count} />}
  />
);
