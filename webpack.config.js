const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let mode = "development";

if (process.env.NODE_ENV === 'production') {
  mode = "production";
}

module.exports = {
  entry: './src/index.js',
  mode: mode,
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
    template: "./src/index.html"
  })],
  devtool: 'source-map',
  devServer: {
    hot: true,
    host: '0.0.0.0',
    contentBase: './dist'
  }
}