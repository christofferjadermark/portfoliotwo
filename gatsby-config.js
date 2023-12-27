/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "N4zGbdN339DRimIrZ_OkidlaOgkK7Lnui17yLe7KNzI",
        spaceId: "pg5okymqfib2",
        rule: {
          include: /assets/,
        },
      },
    },
    "gatsby-plugin-react-svg",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
  ],
};
