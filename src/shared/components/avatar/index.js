import React from 'react';

import avatar from '../../images/me.png';
import * as Styles from './styles';

export default ({ onClick, animation = {}, imageAnimation = {} }) => (
    <Styles.AvatarWrapper>
        <Styles.Avatar onClick={ onClick } animation={ animation }>
            <Styles.Image src={ avatar } animation={ imageAnimation } />
        </Styles.Avatar>
    </Styles.AvatarWrapper>
);
