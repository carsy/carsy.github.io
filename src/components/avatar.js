import React from 'react';
import styled from 'styled-components';

import avatar from '../media/me.jpg';
import layout from '../styles/layout';
import '../styles/colors.css';

const Image = styled.img`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    margin: ${layout.gutter} 0 0 0;
    object-fit: cover;
    border-radius: 100%;
`;

export default ({ size }) => <Image size={ size || '50px' } src={ avatar } />;
