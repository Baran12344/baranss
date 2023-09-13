var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  'module': {
    'rules': [{
      'use': 'babel-loader',
      'test': /\.js$/,
      'exclude': /node_modules/,
      'options': {
        'plugins': ['lodash'],
        'presets': [['env', { 'modules': false, 'targets': { 'node': 18.x } }]]
      }
    }]
  },
  'plugins': [
    new CompressionPlugin(),
    new LodashModuleReplacementPlugin,
    new webpack.optimize.UglifyJsPlugin
  ]
};
