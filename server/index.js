import express from 'express'
import path from 'path'
import Mongoose from 'mongoose'
import config from './config'
import v1Router from './routes'
import Webpack from 'webpack'
import WebpackConfig from '../webpack.config'
import WebpackDevMiddleware from 'webpack-dev-middleware'
import WebpackHotMiddleware from 'webpack-hot-middleware'

Mongoose.connect(config.databaseUrl, { useNewUrlParser: true })

const app = express()

const compiler = Webpack(WebpackConfig)

app.use(WebpackDevMiddleware(compiler, {
  hot: true,
  publicPath: WebpackConfig.output.publicPath
}))

app.use(WebpackHotMiddleware(compiler))

app.use(v1Router)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.listen(3000, () => {
  console.log("App is listening on port 3000")
})