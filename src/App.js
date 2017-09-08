import React from 'react';
import styled from 'styled-components';

import Head from './components/head';
import Card from './components/card';

import colors from './styles/colors';
import './styles/fonts.css';

const App = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;
    background-position: center;
    background-size: cover;

    *::selection {
        background: ${colors.cyan};
        color: ${colors.darker};
    }

    animation: in 400ms forwards;

    @keyframes in {
        to {
            background-color: ${colors.lighter};
        }
    }
`;

export default () => (
    <App>
        <Head />
        <Card />
    </App>
);
