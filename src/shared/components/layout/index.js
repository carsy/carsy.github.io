import React from 'react';
import PropTypes from 'prop-types';

import * as Styles from './styles';

const Layout = ({ children }) => {
    return (
        <Styles.Layout>
            <Styles.Global />
            <main>{children}</main>
        </Styles.Layout>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
