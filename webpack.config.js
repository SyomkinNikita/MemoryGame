const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const buildPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');

module.exports = {
  entry: path.resolve(__dirname, 'src'),
  output: {
    path: buildPath,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.jsx?/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'index.html')
    })
  ],
  devServer: {
    host: '127.0.0.1',
    port: 9000
  }
}