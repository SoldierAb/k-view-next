const path = require("path");
const { IgnorePlugin } = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const getBabelConf = require('./getBabelConf')

const tsConf = require('../tsconfig.json')

const getDevBabelConf = ()=>{
  const bf = getBabelConf()
  // 设置缓存
  bf.cacheDirectory = true;
  // 按需加载
  bf.plugins.concat([
    'babel-plugin-import',
    {
      libraryName: 'k-view-next',
      libraryDirectory: '', // default: lib
      style: true,
    },
  ])
  return bf
}

const babelConf = getDevBabelConf()

const testLoader =  (source)=>`<template>${source}</template>`

const config = {
  mode: "development",
  entry: path.resolve(__dirname, "../site/pages/dev/main.js"),
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: '/'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '../site/public'), // 指定静态资源解析文件夹
    },
    historyApiFallback: true, // web history mode fallback 
    hot: true,
    open: true,
  },
  watchOptions: {
    ignored: /node_modules/
  },
  plugins: [
    new ProgressBarPlugin(),

    new CleanWebpackPlugin({
      verbose: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../site/public/index.html"),
    }),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test:/\.md$/,
        use: [
          'vue-loader',
          {
            loader: path.resolve(__dirname, './md-loader/index.js')
          }
        ]
      },
      // babel使用runtime，避免将不需要的代码注入
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: babelConf
          },
        ],
      },
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: babelConf
          },
          {
            loader: "ts-loader",
            options: {
              compilerOptions: {
                ...tsConf.compilerOptions,
                //  Vue3 template 编译缺陷, 需要设置为false, 参考 https://github.com/vuejs/core/issues/4668
                noUnusedParameters: false,
              },
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: {
                  "primary-color": "#4608e2",
                  "link-color": "#4608e2",
                  "border-radius-base": "20px",
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".vue", ".md"],
    alias: {
      "k-view-next/es": path.join(__dirname, "../components"),
      "k-view-next": path.join(__dirname, "../components"),
      process: "process/browser",
    },
  },
};

module.exports = config;
