import React from 'react';
import styled from 'styled-components';

import layout from '../styles/layout';
import data from '../data/info';
import Avatar from './avatar';
import typo from '../styles/typography';
import '../styles/colors.css';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Name = styled.div`
    font-family: ${typo.fontFamily};
    font-weight: 400;
    font-size: 48px;
    letter-spacing: 1.4px;
    color: #404040;

    margin: ${layout.gutter} 0 12px 0;

    @media ${layout.xsmall} {
        margin: 20px 0 12px 0;
    }
`;
const Sub = styled.div`
    font-family: ${typo.fontFamilyCondensed};
    font-size: 18px;
    letter-spacing: 2.5px;
    color: #606060;

    margin: 0 0 36px 0;
`;
const Description = styled.div`
    font-family: ${typo.fontFamily};
    color: #494949;
    margin: 0 ${layout.gutter} 5px ${layout.gutter};
`;
const EndDescription = styled.span`
    font-family: ${typo.fontFamilyCondensed};
    font-size: 8px;
    color: #494949;
`;
const Links = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: ${layout.gutter};
`;
const Logo = styled.img`
    height: ${layout.gutter};
    width: ${layout.gutter};
    margin: 10px;
`;

const Link = ({ url, imgSrc, altText }) => {
    return (<a href={ url } target="_blank">
        <Logo src={ imgSrc } alt={ altText } />
    </a>);
};

export default () => (
    <Container>
        <Avatar size="120px" />
        <Name>{ data.name }</Name>
        <Sub>{ data.sub }</Sub>
        <Description>{ data.description }</Description>
        <EndDescription>{ data.endDescription }</EndDescription>
        <Links>{ data.links.map((link, i) => <Link key={ i } { ...link } />) }</Links>
    </Container>
);
