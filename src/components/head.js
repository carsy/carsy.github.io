import React from 'react';
import { Helmet } from 'react-helmet';

export default () => (<Helmet>
    <title>Zé Bateira 🌱</title>
    <link rel="apple-touch-icon" sizes="180x180" href={ require('../media/favicon/apple-touch-icon.png') } />
    <link rel="icon" type="image/png" sizes="32x32" href={ require('../media/favicon/favicon-32x32.png') } />
    <link rel="icon" type="image/png" sizes="16x16" href={ require('../media/favicon/favicon-16x16.png') } />
    <link rel="mask-icon" color="#5bbad5" href={ require('../media/favicon/safari-pinned-tab.svg') } />
    <meta name="theme-color" content="#ffffff" />
</Helmet>);
