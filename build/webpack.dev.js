const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { merge } = require('webpack-merge')
const aseConf = require('./webpack.base')
const injectEnv = require('./injectEnv')
const htmlInjectVals = injectEnv(true)

module.exports = merge(aseConf, {
  entry: {
    main: path.resolve(__dirname, '../site/pages/dev/main.js')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../site/public/index.html"),
      templateParameters: {
        ...htmlInjectVals
      }
    }),
  ],
  output: {
    filename: "[name]/index.[contenthash].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: process.env.PUBLIC_PATH || '/',
    libraryTarget: 'umd',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '../site/public'), // 指定静态资源解析文件夹
    },
    historyApiFallback: true, // web history mode fallback 
    hot: true,
    open: true,
  },
})