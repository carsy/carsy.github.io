import React from 'react';

import Layout from '../shared/components/layout';
import Seo from '../shared/components/seo';
import Content from '../shared/components/content';
import Background from '../shared/components/background';

const IndexPage = () => (
    <Layout>
        <Seo />
        <Background />
        <Content />
    </Layout>
);

export default IndexPage;
