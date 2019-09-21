import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import Timeline from '../../animations/timeline';
import Avatar from '../avatar';

import * as Styles from './styles';

const Link = ({ url, fluid, altText }) => (
    <a href={ url } target="_blank">
        <Styles.Logo as={Image} fluid={ fluid } alt={ altText } />
    </a>
);

export default function Card() {
    const { dataJson: data, allImageSharp } = useStaticQuery(graphql`
        query dataJsonQuery {
            dataJson {
                name
                sub
                description
                endDescription
                links {
                    src
                    url
                    altText
                }
            }
            allImageSharp {
                nodes {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                        originalName
                    }
                }
            }
        }
    `);

    return (
        <Timeline>{ ({ animations }) => (
            <Styles.Container key="container">
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
                <Styles.Links animation={ animations.links }>{
                    data.links.map((link) => (
                        <Link
                            key={ link.id }
                            { ...link }
                            fluid={ allImageSharp.nodes.find(node => link.src === node.fluid.originalName).fluid }
                        />
                    ))
                }</Styles.Links>
            </Styles.Container>
        )}</Timeline>

    );
}
