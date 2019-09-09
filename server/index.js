import express from 'express'
import Mongoose from 'mongoose'
import config from './config'

Mongoose.connect(config.databaseUrl, { useNewUrlParser: true })

const app = express()

app.listen(3000, () => {
  console.log("App is listening on port 3000")
})