import styled from 'styled-components';

import { animation } from '../../animations/styles';
import theme from '../../theme';

export const Avatar = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    margin: ${theme.layout.gutter} 0 0 0;
    border-radius: 100%;
    box-shadow: 0 2px 2px ${theme.colors.redDarker};
    cursor: pointer;
    background-color: ${theme.colors.red};

    animation: ${props => animation(props.animation)};
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;

    opacity: 0;
    animation: ${props => animation(props.animation)};
`;
