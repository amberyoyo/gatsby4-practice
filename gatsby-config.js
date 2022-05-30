require("dotenv").config({
  path: process.env.BUILD_ENV
    ? `.env.${process.env.BUILD_ENV}`
    : `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `nxd-gatsby-starter`,
    description: `NextDrive Gatsby Template`,
    author: `@nextdrive`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
    "gatsby-plugin-postcss",
  ],
};
