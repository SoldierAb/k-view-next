const path = require('path')
const { merge } = require('webpack-merge')
const aseConf = require('./webpack.base')

module.exports = merge(aseConf, {
  entry: {
    main: path.resolve(__dirname, '../site/pages/dev/main.js')
  }
})