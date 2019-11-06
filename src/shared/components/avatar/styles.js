import styled from 'styled-components';

import { animation } from '../../animations/styles';
import theme from '../../theme';

export const Avatar = styled.div`
    position: relative;
    width: 150px;
    height: 150px;

    border-radius: 100%;
    box-shadow: 0 4px 10px ${theme.colors.darkGrey};
    background-color: ${theme.colors.grey};
    cursor: pointer;

    animation: ${props => animation(props.animation)};

    ${'' /* TODO: Hover Animation */}
    ${'' /* transform: scale(1) translate(0px, 0px);

    transition:
        box-shadow 500ms ${theme.animations.pop},
        transform 500ms ${theme.animations.pop};

    &:hover {
        animation: none;
        transform: scale(1.05) translateY(-10px);
        box-shadow: 0 10px 16px -10px ${theme.colors.darkGrey};
    } */}
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;

    opacity: 0;
    animation: ${props => animation(props.animation)};
`;
