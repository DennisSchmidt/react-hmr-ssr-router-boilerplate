var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: "./src/server/index.js",
  output: {
    filename: "server.js",
    path: "./dev/build",
    publicPath: `http://${process.env.CLIENT_HOST}:${process.env.CLIENT_PORT}/assets/`
  },
  target: 'node',
  externals: [nodeExternals()],

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: [ /node_modules/ ],
        loaders: [ 'babel-loader' ]
      },
      {
        test: /\.json?$/,
        loaders: [ 'json-loader' ]
      },{
        test: /\.sass$/,
        exclude: [ /node_modules/ ],
        loaders: [ 'null-loader' ]
      },{
        test: /\.(jpg|ico)$/,
        exclude: [ /node_modules/ ],
        loader: "file?name=images/[path][name].[ext]&context=src"
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/manifest.json/)
  ]
}
