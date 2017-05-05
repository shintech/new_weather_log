const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'app', 'index.html'),
  filename: 'index.html',
  inject: 'body'
})

const paths = {
  ENTRY: path.join(__dirname, 'app', 'main.js'),
  OUTPUT_FILENAME: 'bundle.js',
  OUTPUT: path.join(__dirname, 'build', 'static'),
  APP: path.join(__dirname, 'app')
}

module.exports = {
  entry: [
    paths.ENTRY
  ],
  resolve: {
    alias: {
      'marionette': 'backbone.marionette',
      'underscore': 'lodash'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        include: paths.APP,
        exclude: [/node_modules/, path.join(__dirname, 'build'), paths.OUTPUT],
        loaders: ['babel-loader', 'standard-loader']
      },
      { test: /\.html/, include: path.join(paths.APP, 'templates'), loader: 'underscore-template-loader' },
      { test: /\.scss$/, include: path.join(paths.APP, 'public'), loader: ExtractTextPlugin.extract('css-loader!sass-loader') }
    ]
  },
  output: {
    filename: paths.OUTPUT_FILENAME,
    path: paths.OUTPUT,
    chunkFilename: '[id].js'
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'lodash'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new ExtractTextPlugin('bundle.css')
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false },
    //   mangle: true,
    //   sourcemap: false,
    //   beautify: false,
    //   dead_code: true
    // })
  ]
}
