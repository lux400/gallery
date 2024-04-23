import React from 'react';

import SEO from '@components/Layout/SEO';
import Layout from '../../components/Layout';
import VideoRoll from '../../components/VideoRoll';

const VideoIndexPage = props => {
  console.log(props);
  return (
    <Layout {...props}>
      <SEO title={'Videos'} />
      <section className="section">
        <div className="container">
          <div className="content">
            <VideoRoll />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VideoIndexPage;
