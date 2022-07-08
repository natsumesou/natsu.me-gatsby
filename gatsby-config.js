module.exports = {
  siteMetadata: {
    title: 'vonxai inc.',
    description:
      'ソフトウェア開発からDX(デジタルトランスフォーメーション)支援、プロダクトマネジメントまで幅広く柔軟な対応が可能です。お気軽にお問い合わせください。',
    siteUrl: 'https://vonxai.co.jp/',
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
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-PM3XZBC',
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },
        routeChangeEventName: 'gatsby-route-change',
      },
    },
    {
      resolve: `gatsby-plugin-breakpoints`,
      options: {
        queries: {
          sm: '(max-width: 600px)',
          xs: '(max-width: 450px)',
        },
      },
    },
  ],
}
