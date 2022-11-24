import { rastrearEncomendas, consultarCep } from "correios-brasil"

export const rastreio = async (cod) => {
  let codRastreio = [cod]
  let lista = []

  const res = await rastrearEncomendas(codRastreio).then(response => {
    return response
  })

  try {
    res[0].eventos.forEach(datas => {
      lista.push(datas)
    });

    lista = lista.slice(0).reverse()

    return lista
  } catch (error) {
    return res
  }
}

export const cepValido = async (cep) => {
  return await consultarCep(cep).then(response => {
    return response.data
  })
}