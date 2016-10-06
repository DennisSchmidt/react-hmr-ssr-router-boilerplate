var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: "./src/server/index.js",
  output: {
    filename: "server.min.js",
    publicPath: "/assets/",
    path: "build/public"
  },
  target: 'node',

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [ /node_modules/ ],
        loaders: [ 'babel-loader' ]
      },{
        test: /\.sass$/,
        exclude: [ /node_modules/ ],
        loaders: [ 'null-loader' ]
      },{
        test: /\.(jpg|ico)$/,
        exclude: [ /node_modules/ ],
        loader: 'file?name=images/[path][name]-[hash].[ext]&context=src'
      },{
        test: /\.json?$/,
        loaders: [ 'json-loader' ]
      }
    ]
  },

  plugins: [
    new webpack.EnvironmentPlugin([
      "NODE_ENV"
    ]),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    })
  ]
}
