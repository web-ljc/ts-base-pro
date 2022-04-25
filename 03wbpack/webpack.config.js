const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            // 指定加载器
            loader: 'babel-loader',
            // 设置babel
            options: {
              // 设置预定义环境
              presets: [
                [
                  // 指定环境的插件
                  '@babel/preset-env',
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      "chrome": "60"
                    },
                    // 要兼容的corejs的版本
                    "corejs": "3",
                    // 使用corejs的方式“usage”表示按需加载
                    "useBuiltIns": "usage"
                  }
                ]
              ]
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