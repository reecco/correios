import express from 'express'
import cors from 'cors'

import correios from './correiosRoutes.js'

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).json({ message: 'API para consulta de CEP e rastreio de encomendas do Correios', status: 200 })
  })

  app.use(
    express.json(),
    correios
  )

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With")
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST')
    app.use(cors)
    next()
  })
}

export default routes