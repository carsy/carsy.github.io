import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import Timeline from '../../animations/timeline';
import Avatar from '../avatar';
import Link from '../link';

import * as Styles from './styles';

export default function Content() {
    const { dataJson: data, allImageSharp } = useStaticQuery(graphql`
        query dataJsonQuery {
            dataJson {
                name
                caption
                description
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
                <Styles.Caption animation={ animations.caption } >{ data.caption }</Styles.Caption>
                <Styles.Description animation={ animations.description }>
                    { data.description }
                </Styles.Description>
                <Styles.Links animation={ animations.links }>{
                    data.links.map((link) => (
                        <Link key={link.id} href={link.url}>
                            <Styles.Logo
                                as={Image}
                                fluid={ allImageSharp.nodes.find(node => link.src === node.fluid.originalName).fluid }
                                alt={ link.altText }
                            />
                        </Link>
                    ))
                }</Styles.Links>
            </Styles.Container>
        )}</Timeline>

    );
}
