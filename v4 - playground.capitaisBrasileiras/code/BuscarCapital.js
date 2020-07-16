const DADOS = require("./Dados")
const DADOS_ESTADOS = DADOS.DADOS_ESTADOS

module.exports.function = function BuscarCapital (estado) {
   
  let estadoEmMinusculo = estado.toLowerCase()
  let dadosEstado = DADOS_ESTADOS.find(obj => obj.estado === estadoEmMinusculo)
  
  let nomeDoEstado, bandeira
  if (dadosEstado) {
    nomeDoEstado = dadosEstado.capital
    bandeira = dadosEstado.bandeira

  }
 
  return {
    capital:nomeDoEstado,
    bandeira:bandeira
  }
}