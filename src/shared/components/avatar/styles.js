import styled from 'styled-components';

import { animation } from '../../animations/styles';
import theme from '../../theme';

export const AvatarWrapper = styled.div`
    margin-top: ${theme.layout.gutter};
    border-radius: 100%;
    box-shadow: 0 4px 5px ${theme.colors.darkGrey};

    transition:
        box-shadow 500ms ${theme.animations.pop},
        transform 500ms ${theme.animations.pop};

    &:hover {
        transform: scale(1.05) translateY(-10px);
        box-shadow: 0 10px 16px -10px ${theme.colors.darkGrey};
    }
`;

export const Avatar = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    box-shadow: 0 4px 10px ${theme.colors.darkGrey};
    cursor: pointer;
    background-color: ${theme.colors.grey};

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
