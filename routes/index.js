import express from 'express'

import correios from './correiosRoutes.js'

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).json({ message: 'API para consulta de CEP e rastreio de encomendas dos Correios', status: 200 })
  })

  app.use(
    express.json(),
    correios
  )
}

export default routes