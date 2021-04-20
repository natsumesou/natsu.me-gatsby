const path = require('path')
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsConfigPathsPlugin()],
    },
  })
}

exports.createPages = async ({ graphql, actions: { createPage }}) => {
  const site = await graphql(`
    query SEO {
      site {
        siteMetadata {
          title: title
          description: description
          siteUrl: siteUrl
        }
      }
    }
  `)

  createPage({
    path: `/`,
    component: require.resolve("./src/components/templates/Home.tsx"),
    context: {
      site: site.data.site
    }
  })
}