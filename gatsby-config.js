module.exports = {
    siteMetadata: {
        title: 'Zé Bateira',
        description: 'Zé Bateira\'s Personal Website',
        author: '@zebateira',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-json',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/shared/data`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/shared/images`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Zé Bateira\'s Personal Website',
                short_name: 'Zé Bateira',
                start_url: '/',
                background_color: '#4c7e96',
                theme_color: '#4c7e96',
                display: 'minimal-ui',
                icon: 'src/shared/images/me.png',
            },
        },
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-45298018-1',
            },
        },
        {
            resolve: 'gatsby-plugin-styled-components',
        },
    ],
};
