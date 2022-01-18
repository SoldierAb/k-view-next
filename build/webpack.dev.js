const path = require("path");
const { HotModuleReplacementPlugin, IgnorePlugin } = require("webpack");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const tsConf = require('../tsconfig.json')

const config = {
  mode: "development",
  entry: path.resolve(__dirname, "../examples/pages/dev/main.ts"),
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../dist"),
  },
  devServer: {
    // contentBase: false,
    // publicPath: './dist',
    hot: true,
    // port: 8080,
    open: true,
    // hotOnly: true,
    // compress: true,
    // overlay: true
  },
  // watchOptions: {
  //     ignored: /node_modules/
  // },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Hot Module Replacement",
      template: path.resolve(__dirname, "../examples/pages/dev/index.html"),
    }),
    // new IgnorePlugin(/^\.\/locale$/, /moment$/),
    new HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      // babel使用runtime，避免将不需要的代码注入
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              // cacheDirectory: true,
              presets: ["@babel/preset-env"],
              plugins: [
                "@babel/plugin-transform-runtime",
                [
                  "import",
                  {
                    libraryName: "antd",
                    style: true, // or 'css'
                  },
                  "antd",
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              // 指定特定的ts编译配置，为了区分脚本的ts配置
              compilerOptions: {
                ...tsConf.compilerOptions,
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
      "k-view-next": path.join(__dirname, "../"),
      "k-view-next/es": path.join(__dirname, "../es"),
      process: "process/browser",
    },
  },
};

module.exports = config;
