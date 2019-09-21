import styled, { createGlobalStyle } from 'styled-components';

import theme from '../../theme';

export const Global = createGlobalStyle`
    body, html, #___gatsby, #gatsby-focus-wrapper {
        height: 100%;
        width: 100%;
    }

    body {
        display: flex;
        align-items: center;
        justify-content: center;

        margin: 0;
        padding: 0;

        font-family: sans-serif;
    }
`;

export const Layout = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;
    background-position: center;
    background-size: cover;

    *::selection {
        background: ${theme.colors.red};
        color: ${theme.colors.lighter};
    }

    animation: in 400ms forwards;

    @keyframes in {
        to {
            background-color: ${theme.colors.lighter};
        }
    }
`;
