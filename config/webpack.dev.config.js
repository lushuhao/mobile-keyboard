const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../src/main.js')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    compress: true,
    port: 8080,
  }
}