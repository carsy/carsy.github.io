import React from 'react';

import data from '../../data/info';
import Timeline from '../../animations/timeline';
import Avatar from '../avatar';

import * as Styles from './styles';

const Link = ({ url, imgSrc, altText }) => (
    <a href={ url } target="_blank">
        <Styles.Logo src={ imgSrc } alt={ altText } />
    </a>
);

export default () => (
    <Timeline>{ ({ animations }) => (
        <Styles.Container>
            { console.log('animations', animations) }
            <Avatar
                animation={ animations.avatar }
                imageAnimation={ animations.image }
            />
            <Styles.Name animation={ animations.name } >{ data.name }</Styles.Name>
            <Styles.Sub animation={ animations.sub } >{ data.sub }</Styles.Sub>
            <Styles.Description animation={ animations.description }>
                { data.description }
            </Styles.Description>
            <Styles.EndDescription animation={ animations.endDescription }>
                { data.endDescription }
            </Styles.EndDescription>
            <Styles.Links animation={ animations.links }>
                { data.links.map((link, i) => <Link key={ i } { ...link } />) }
            </Styles.Links>
        </Styles.Container>
    )}</Timeline>
);
