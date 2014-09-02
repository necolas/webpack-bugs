var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    home: 'home'
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') }
    ]
  },

  output: {
    filename: '[name].js',
    path: 'build/',
    publicPath: 'build/',
    chunkFilename: '[id].chunk.js',
    sourcePrefix: ''
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
};
