const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const paths = require('../utils/paths');

const config = {
  entry: paths.entry,
  output: {
    filename: 'js/[hash:8].js',
    path: paths.output,
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.view,
      filename: 'index.html',
      path: paths.output,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[hash:8].css',
    }),
    new OptimizeCssAssetsWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/,
        loader: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      app: path.resolve(paths.src, './app'),
      utils: path.resolve(paths.src, './utils'),
      config: path.resolve(paths.src, './config'),
      images: paths.images,
    },
    modules: [paths.components, paths.src, 'node_modules'],
  },
};

module.exports = config;
