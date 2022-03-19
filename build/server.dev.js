const path = require('path')
const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('./webpack.dev.js')

const compiler = Webpack(webpackConfig)
const devServerOptions = { ...webpackConfig.devServer, open: true }
const server = new WebpackDevServer(devServerOptions, compiler)
const concurrently = require('concurrently')

server.startCallback(() => {
  console.log('Successfully started server')
  concurrently([
    {
      command: 'gulp compile-watch', name: 'watch', cwd: path.resolve(__dirname, '../')
    }
  ])
})
