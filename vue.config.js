const path = require('path')
const VConsole = require('vconsole-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '',
  devServer: {
    open: true,
    hot: true
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
  },
  configureWebpack: config => {
    if(process.env.NODE_ENV === 'development') {
      config.plugins.push(new VConsole({
        filter: [],
        enable: true
      }))
    }
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        resolve('src/assets/styles/_reset.scss'),
        resolve('src/assets/styles/_variable.scss')
      ]
    }
  }
}
