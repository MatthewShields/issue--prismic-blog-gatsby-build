const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-source-prismic-graphql-components-preview-page-js": hot(preferDefault(require("/Users/Matthew.Shields/prismictest/basicbuildtest/node_modules/gatsby-source-prismic-graphql/components/PreviewPage.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/Matthew.Shields/prismictest/basicbuildtest/src/templates/post.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/Matthew.Shields/prismictest/basicbuildtest/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Matthew.Shields/prismictest/basicbuildtest/src/pages/index.js")))
}

