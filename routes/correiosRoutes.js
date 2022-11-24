import express from 'express'
import CorreiosController from '../controllers/correiosController.js'

const router = express.Router()

router
  .get('/rastreio/:cod', CorreiosController.rastreiaEncomenda)
  .get('/cep/:cep', CorreiosController.consultaCep)

export default router