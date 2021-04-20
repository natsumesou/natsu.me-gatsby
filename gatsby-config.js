module.exports = {
  siteMetadata: {
    title: 'natsu.me',
    description: 'ソフトウェア開発からDX(デジタルトランスフォーメーション)支援、プロダクトマネジメントまで幅広く柔軟な対応が可能です。お気軽にお問い合わせください。',
    author: 'Yoshiaki Natsume',
    siteUrl: 'https://natsu.me/',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    `gatsby-plugin-sharp`,
    'gatsby-plugin-sitemap',
    'gatsby-transformer-remark',
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-41472707-1',
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        disableAutoprefixing: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
