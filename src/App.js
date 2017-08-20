import React from 'react';
import styled from 'styled-components';

import Head from './components/head';
import Card from './components/card';

import './styles/fonts.css';

const App = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;
    background-color: #faffff;
    background-position: center;
    background-size: cover;
`;

export default () => (
    <App>
        <Head />
        <Card />
    </App>
);
