const path = require("path");
const webpack = require('webpack')
const { IgnorePlugin } = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { VueLoaderPlugin } = require("vue-loader");
const getBabelConf = require('./getBabelConf')

const tsConf = require('../tsconfig.json')

// 加载.env 环境变量
const injectEnv = require('./injectEnv')
const defineVariables = injectEnv()

const [demo] = [...process.argv].reverse()
const demoPath = demo.replace(/\.\\|\.\/|\\|\/|['."]/g, ' ').trim().replace(/\s/g, '/')

defineVariables['process.env'].DemoPath = JSON.stringify(demoPath)


const getDevBabelConf = () => {
  const bf = getBabelConf(false) // false --> use esModules

  bf.sourceType = "unambiguous";

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

const config = {
  mode: "development",
  devtool: 'cheap-module-source-map',
  infrastructureLogging: {
    level: 'log',
    // debug: [/md-loader/, (name) => (console.log(name, '\n\n'), `${name}`.includes('md'))],
  },
  watchOptions: {
    ignored: /node_modules/
  },
  plugins: [
    new ProgressBarPlugin(),

    new CleanWebpackPlugin({
      verbose: true,
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser'
    }),
    new webpack.DefinePlugin(defineVariables),
    new VueLoaderPlugin()
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
      {
        test: /\.vue$/,
        loader: "vue-loader",
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
                //  FIXME: Vue3 template 编译缺陷, 需要设置为false, 参考 https://github.com/vuejs/core/issues/4668
                noUnusedParameters: false,
              },
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
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
                // 主题定制
                modifyVars: {
                  // "primary-color": "#4608e2",
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
      // "k-view-next/lib": path.join(__dirname, "../lib"),
      // "k-view-next/es": path.join(__dirname, "../es"),
      "k-view-next": path.join(__dirname, "../components"),
      process: "process/browser",
    },
  },
};

module.exports = config;
