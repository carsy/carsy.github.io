import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import * as Styles from './styles';

export default function Baackground() {
    const { allFile } = useStaticQuery(graphql`
        query backgroundImageQuery {
            allFile(filter: { name: { eq: "background" } }) {
                edges {
                    node {
                        id
                        name
                        childImageSharp {
                            fluid (quality: 100) {
                                ...GatsbyImageSharpFluid
                                originalName
                            }
                        }
                    }
                }
            }
        }
    `);

    const backgroundImage = allFile.edges[0].node.childImageSharp;

    return (
        <Styles.Background>
            <Image fluid={backgroundImage.fluid} alt="Blurred Background" style={{ height: '100%' }} />
        </Styles.Background>
    );
}
