module.exports = {
  siteMetadata: {
    title: 'Amy Goes to Perth',
    description: 'Ramblings of a freelance web developer in Perth, most pictures include her dog',
    siteUrl: 'https://amygoestoperth.com.au',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
