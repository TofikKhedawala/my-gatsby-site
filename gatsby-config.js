module.exports = {
  siteMetadata: {
    siteUrl: `http://localhost/gatsby/`,
  },
  plugins: [
  	{
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WPGRAPHQL_URL || `http://localhost/gatsby/graphql`,
      },
    },
  ],
}
