import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Card from '../components/card';
import Background from '../components/background';

const IndexPage = () => (
    <Layout>
        <Seo />
        <Background />
        <Card />
    </Layout>
);

export default IndexPage;
