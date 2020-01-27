const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Hello.',
    author: '@frencojobs',
    description: 'Portfolio.',
    image: '',
    url: 'https://www.frenco.codes'
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@pages': path.join(__dirname, 'src/pages'),
        '@components': path.join(__dirname, 'src/components'),
        '@styles': path.join(__dirname, 'src/styles')
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['src/styles']
      }
    },
    `gatsby-plugin-react-helmet`
  ]
}
