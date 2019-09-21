module.exports = {
    siteMetadata: {
        title: 'Zé Bateira',
        description: 'Zé Bateira\'s Personal Website',
        author: '@zebateira',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
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
                background_color: '#ff1313',
                theme_color: '#ff1313',
                display: 'minimal-ui',
                icon: 'src/images/me.png',
            },
        },
    ],
};
