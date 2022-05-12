const Webpack = require('webpack')
const webpackConfig = require('./webpack.prod.js')

const compiler = Webpack(webpackConfig)

compiler.run(() => {
  console.log('Successfully build')
})