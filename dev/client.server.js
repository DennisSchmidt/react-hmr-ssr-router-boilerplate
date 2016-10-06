var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.client.server.config')

const app = new WebpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
    chunkModules: false
  },
  publicPath: '/assets/'
})

app.listen(process.env.PORT, process.env.HOST, function (err) {
  if (err) console.log(err)

  console.log(`\n==> 🚧  Wepack-Dev-Server(${process.env.NODE_ENV}) listening at ${process.env.HOST}:${process.env.PORT}`)
})
