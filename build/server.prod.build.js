const Webpack = require('webpack')
const webpackConfig = require('./webpack.prod.js')

webpackConfig.output.publicPath = './'

const compiler = Webpack(webpackConfig)

compiler.run(() => {
  console.log('Successfully build')
})