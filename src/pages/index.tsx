import React from 'react';

import SEO from '@components/Layout/SEO';
import Layout from '@components/Layout';

const IndexPage = props => {
             console.log(props);
  return (
      <Layout {...props}>
        <SEO title={'Main page'} />
        <section className="section">
                name
        </section>
      </Layout>
  );
};

export default IndexPage;
