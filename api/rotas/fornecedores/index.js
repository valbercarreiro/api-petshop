const roteador = require('express').Router()
const TabelaFornecedor = require('./TabelaFornecedor')

roteador.use('/', async (req, res) => {
    const resultados = await TabelaFornecedor.listar()
    res.send(
        Json.stringfy(resultados)
    )
})

module.exports = roteador