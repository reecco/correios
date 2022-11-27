import express from 'express'
import dotenv from 'dotenv'

import cors from 'cors'

import routes from './routes/index.js'

const app = express()
dotenv.config()

const port = process.env.PORT || 9090

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With")
  res.header("Access-Control-Allow-Methods", 'GET')
  app.use(cors)
  next()
})

routes(app)

app.listen(port, () => console.log(`http://localhost:${port}`))