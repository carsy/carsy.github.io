import React from 'react';
import styled from 'styled-components';

import avatar from '../media/me.jpg';
import layout from '../styles/layout';
import colors from '../styles/colors';
import { animation } from '../animations/styles';

const Avatar = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    margin: ${layout.gutter} 0 0 0;
    border-radius: 100%;
    box-shadow: 0 2px 2px ${colors.redDarker};
    cursor: pointer;
    background-color: ${colors.red};

    animation: ${props => animation(props.animation)};
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;

    opacity: 0;
    animation: ${props => animation(props.animation)};
`;

export default ({ onClick, animation = {}, imageAnimation = {} }) => (
    <Avatar onClick={ onClick } animation={ animation }>
        <Image src={ avatar } animation={ imageAnimation } />
    </Avatar>
);
