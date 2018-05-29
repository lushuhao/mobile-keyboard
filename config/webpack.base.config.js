const webpack = require('webpack')
const path = require('path')

module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'SafeKeyBoard.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env.NODE_ENV)
    })
  ]
}