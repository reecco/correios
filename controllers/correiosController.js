import { rastreio, cepValido } from '../service/correios.js'

export default class CorreiosController {
  static async rastreiaEncomenda(req, res) {
    let cod = req.params.cod

    const encomenda = await rastreio(cod)

    if (encomenda[0].mensagem) {
      res.status(404).json({ message: encomenda[0], status: 404 })
    } else {
      res.status(200).json({ encomenda, status: 200 })
    }
  } //OU341933668BR

  static async consultaCep(req, res) {
    let cep = req.params.cep.replace('-', '')

    if (cep.length != 8) {
      res.status(400).json({ message: 'CEP inválido', status: 400 })
    } else {
      const valido = await cepValido(cep)

      if (valido.erro)
        res.status(404).json({ message: 'CEP não encontrado', status: 404 })
      else
        res.status(200).json({ valido, status: 200 })
    }
  }
}