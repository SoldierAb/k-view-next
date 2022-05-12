const path = require('path')
const { merge } = require('webpack-merge')
const baseConf = require('./webpack.base')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");

const packageName = require('../package.json').name
const injectEnv = require('./injectEnv')

const htmlInjectVals = injectEnv(true)

module.exports = merge(baseConf, {
  entry: {
    main: path.resolve(__dirname, '../site/pages/prod/main.js')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../site/public/index.html"),
      templateParameters: {
        ...htmlInjectVals
      }
    }),
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
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, '../site/public'), // 指定静态资源解析文件夹
    },
    historyApiFallback: true, // web history mode fallback 
    hot: true,
    open: true,
  },
  output: {
    filename: "[name]/index.[contenthash].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: process.env.PUBLIC_PATH || '/',
    // 微应用的包名，这里与主应用中注册的微应用名称一致
    library: packageName,
    // 将你的 library 暴露为所有的模块定义下都可运行的方式
    libraryTarget: 'umd',
    chunkLoadingGlobal: `webpackJsonp_${packageName}`
  }
})