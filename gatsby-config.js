module.exports = {
  siteMetadata: {
    siteUrl: `http://localhost:8000/`,
  },
  plugins: [
  	{
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WPGRAPHQL_URL || `http://localhost:8000/graphql`,
      },
    },
  ],
}
