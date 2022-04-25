const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'js/bundle.[contenthash:10].js',
    environment: {
      arrowFunction: false
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader', // 指定加载器
            options: { // 设置babel
              presets: [ // 设置预定义环境
                [
                  '@babel/preset-env', // 指定环境的插件
                  {
                    targets: { // 要兼容的目标浏览器
                      "chrome": "60"
                    },
                    "corejs": "3", // 要兼容的corejs的版本
                    "useBuiltIns": "usage" // 使用corejs的方式“usage”表示按需加载
                  }
                ]
              ],
              cacheDirectory: true
            }
          },
          'ts-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json', '.jsx']
  },
  devServer: {
    static: resolve(__dirname, 'dist'),
    compress: true,
    port: 3001,
    open: true
  },
  mode: 'development'
}