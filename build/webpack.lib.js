const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const { merge } = require('webpack-merge')
const baseConf = require('./webpack.base')

module.exports = merge(baseConf, {
  entry: {
    kview: "./components/index.ts",
    button: "./components/button/index.ts",
    'config-provider': "./components/config-provider"
  },
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
  output: {
    filename: "[name]/index.js",
    path: path.resolve(__dirname, "../lib"),
    libraryTarget: 'commonjs2',
  },
  externals:{
    lodash: 'lodash',
    vue: {
        root: 'vue',
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue',
    }
  }
})