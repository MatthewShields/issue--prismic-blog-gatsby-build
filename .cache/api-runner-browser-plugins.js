module.exports = [{
      plugin: require('../node_modules/gatsby-source-prismic-graphql/gatsby-browser.js'),
      options: {"plugins":[],"repositoryName":"basicbuildtest","path":"/preview","previews":true,"pages":[{"type":"Post","match":"/blog/:uid","path":"/blog-preview","component":"/Users/Matthew.Shields/prismictest/basicbuildtest/src/templates/post.js"}]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/favicon.png"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
