import React from 'react';
import styled from 'styled-components';

import layout from '../styles/layout';
import data from '../data/info';
import typo from '../styles/typography';
import colors from '../styles/colors';
import Avatar from './avatar';
import { Timeline } from '../animations/timeline';
import { animation } from '../animations/styles';

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
    color: ${colors.fonts.title};
    opacity: 0;

    margin: ${layout.gutter} 0 12px 0;

    animation: ${props => animation(props.animation)};

    @media ${layout.xsmall} {
        margin: 20px 0 12px 0;
    }
`;
const Sub = styled.div`
    font-family: ${typo.fontFamilyCondensed};
    font-size: 18px;
    letter-spacing: 2.5px;
    color: ${colors.fonts.sub};
    margin: 0 0 36px 0;
    opacity: 0;

    animation: ${props => animation(props.animation)};
`;
const Description = styled.div`
    font-family: ${typo.fontFamily};
    color: ${colors.fonts.body};
    margin: 0 ${layout.gutter} 5px ${layout.gutter};
    opacity: 0;

    animation: ${props => animation(props.animation)};
`;
const EndDescription = styled.span`
    font-family: ${typo.fontFamilyCondensed};
    font-size: 8px;
    color: ${colors.fonts.body};
    opacity: 0;

    animation: ${props => animation(props.animation)};
`;
const Links = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: ${layout.gutter};
    opacity: 0;

    animation: ${props => animation(props.animation)};
`;
const Logo = styled.img`
    height: ${layout.gutter};
    width: ${layout.gutter};
    margin: 10px;
`;

const Link = ({ url, imgSrc, altText }) => (
    <a href={ url } target="_blank">
        <Logo src={ imgSrc } alt={ altText } />
    </a>
);

export default () => (
    <Timeline>{ ({ animations }) => (
        <Container>
            { console.log('animations', animations) }
            <Avatar
                animation={ animations.avatar }
                imageAnimation={ animations.image }
            />
            <Name animation={ animations.name } >{ data.name }</Name>
            <Sub animation={ animations.sub } >{ data.sub }</Sub>
            <Description animation={ animations.description }>
                { data.description }
            </Description>
            <EndDescription animation={ animations.endDescription }>
                { data.endDescription }
            </EndDescription>
            <Links animation={ animations.links }>
                { data.links.map((link, i) => <Link key={ i } { ...link } />) }
            </Links>
        </Container>
    )}</Timeline>
);
