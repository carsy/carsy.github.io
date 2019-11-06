import styled from 'styled-components';

import { animation } from '../../animations/styles';
import theme from '../../theme';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Name = styled.div`
    font-family: ${theme.typography.fontFamily};
    font-weight: 400;
    font-size: 48px;
    letter-spacing: 1.4px;
    color: ${theme.colors.fonts.title};
    opacity: 0;

    margin: ${theme.layout.gutter} 0 12px 0;

    animation: ${props => animation(props.animation)};

    @media ${theme.mediaQueries.xsmall} {
        margin: 20px 0 12px 0;
    }
`;

export const Caption = styled.div`
    font-family: ${theme.typography.fontFamilyCondensed};
    font-size: 18px;
    letter-spacing: 2.5px;
    color: ${theme.colors.fonts.caption};
    margin: 0 0 36px 0;
    opacity: 0;

    animation: ${props => animation(props.animation)};
`;

export const Description = styled.div`
    font-family: ${theme.typography.fontFamily};
    color: ${theme.colors.fonts.body};
    margin: 0 ${theme.layout.gutter} 5px ${theme.layout.gutter};
    opacity: 0;

    animation: ${props => animation(props.animation)};
`;

export const Links = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: ${theme.layout.gutter};
    opacity: 0;

    animation: ${props => animation(props.animation)};
`;

export const Logo = styled.div`
    height: 40px;
    width: 40px;
    margin: 10px;
    opacity: 0.7;

    cursor: pointer;

    transition:
        transform 300ms ${theme.animations.pop},
        opacity 300ms;

    &:hover {
        transform: scale(1.2);
        opacity: 1;
    }
`;
