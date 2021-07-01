// const htmlWebpackPlugin = require('htmlWebpackPlugin')
var webpack = require('webpack');

module.exports = {
  entry: { // 入口文件
    main: './main.js'
  },
  mode: 'development', // 开发模式
  optimization: {
    minimize: false // 是否将输出的代码压缩为一行
  },
  devServer: {
    port: 3000,
    open: true, // 是否自动打开
    hot: true, // 是否热更新
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [[
              '@babel/plugin-transform-react-jsx',
              {pragma: 'ToyReact.createElement'}
            ]]
          }
        }
      }
    ]
  }
}
