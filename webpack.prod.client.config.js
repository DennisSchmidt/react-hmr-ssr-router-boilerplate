var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var autoprefixer = require('autoprefixer')
var ManifestPlugin = require('webpack-manifest-plugin')

var browserslist = require('./browserslist')

module.exports = {
  entry: {
    app: "./src/index.js",
    vendor: ['react', 'react-dom', 'react-helmet', 'react-router']
  },
  output: {
    filename: "[name]-[hash].min.js",
    publicPath: "/assets/",
    path: "build/public"
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [ /node_modules/ ],
        loaders: [ 'babel-loader' ]
      },{
        test: /\.sass$/,
        exclude: [ /node_modules/ ],
        loader: ExtractTextPlugin.extract({
          notExtractLoader: 'style-loader',
          loader: 'css-loader?modules&importLoaders=1&localIdentName=[local]!postcss!sass-loader',
        })
      },{
        test: /\.jpg$/,
        exclude: [ /node_modules/ ],
        loader: 'file?name=images/[path][name]-[hash].[ext]&context=src'
      }
    ]
  },

  plugins: [
    new webpack.EnvironmentPlugin([
      "NODE_ENV"
    ]),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [ autoprefixer({ browsers: browserslist }) ]
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    }),
    new ExtractTextPlugin({
      filename: '[name]-[hash].min.css',
      allChunks: true
    }),
    new ManifestPlugin({}),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: '[name]-[hash].min.js'
    })
  ]
}
