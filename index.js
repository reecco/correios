import express from 'express'
import dotenv from 'dotenv'

import routes from './routes/index.js'

const app = express()
dotenv.config()

const port = process.env.PORT || 9090

routes(app)

app.listen(port, () => console.log(`http://localhost:/${port}`))