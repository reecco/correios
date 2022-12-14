import { rastreio, cepValido } from '../service/correios.js'

export default class CorreiosController {
  static async rastreiaEncomenda(req, res) {
    let cod = req.params.cod

    const encomenda = await rastreio(cod)

    const date = new Date()
    
    res.setHeader('Cache-Control', 's-maxage=3600 stale-while-revalidate')

    if (encomenda[0].mensagem) return res.status(404).json({ message: encomenda[0], dateCreated: date, status: 404 })

    return res.status(200).json({ encomenda, dateCreated: date, status: 200 })
  } //OU341933668BR

  static async consultaCep(req, res) {
    let cep = req.params.cep.replace('-', '')

    if (cep.length != 8) return res.status(400).json({ message: 'CEP inválido', status: 400 })

    const valido = await cepValido(cep)

    if (valido.erro) return res.status(404).json({ message: 'CEP não encontrado', status: 404 })
   
    return res.status(200).json({ valido, status: 200 })
  }
}
