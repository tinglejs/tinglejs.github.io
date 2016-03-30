'use strict';

let OpenBrowserPlugin = require('open-browser-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let extractStylus = new ExtractTextPlugin('[name].css')

module.exports = {
  context: __dirname + '/src/assets',
  entry: {
    'page-home': './js/page-home.js',
    'page-doc': './js/page-doc.js'
  },
  output: {
    filename: '[name].js',
    path: '../' + __dirname,
    publicPath: '/'
  },
  devtool: 'source-map',
  devtoolLineToLine: true,
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!stylus-loader')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.(eot|ttf|woff)$/i,
        loader: 'file?hash=sha512&digest=hex&name=[hash].[ext]'
      }
    ]
  },
  plugins: [
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    }),
    extractStylus
  ]
}
