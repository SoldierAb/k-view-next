const path = require('path')
const { merge } = require('webpack-merge')
const baseConf = require('./webpack.base')
const CopyPlugin = require('copy-webpack-plugin')
const packageName = require('../package.json').name

module.exports = merge(baseConf, {
  entry: {
    main: path.resolve(__dirname, '../site/pages/prod/main.js')
  },
  output: {
    // 微应用的包名，这里与主应用中注册的微应用名称一致
    library: packageName,
    // 将你的 library 暴露为所有的模块定义下都可运行的方式
    libraryTarget: 'umd',
    chunkLoadingGlobal: `webpackJsonp_${packageName}`
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: './**/*',
          context: 'site/public/',
          to: './',
          filter: async (resourcePath) => {
            if (resourcePath.includes('index.html')) {
              return false
            }
            return true
          }
        }
      ]
    })
  ]
})