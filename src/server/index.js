import Express from "express"
import handleRender from "./handle-render"

const app = new Express()

app.use('/assets', Express.static(process.env.NODE_ENV === 'production' ? 'build/public' : 'dev/build'))
app.get('*', handleRender)

app.listen(process.env.PORT, process.env.HOST, function (err) {
  if (err) console.log(err)

  console.log(`\n==> 💻  App-Server(${process.env.NODE_ENV}) listening at ${process.env.HOST}:${process.env.PORT}`)
})
