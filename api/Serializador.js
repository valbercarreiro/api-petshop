const ValorNaoSuportavel = require('./erros/ValorNaoSuportavel')

class Serializador {

    json(dados) {
        return JSON.stringify(dados)
    }

    serializar(dados) {
        if(this.contentType === 'application/json') {
            return this.json(dados)
        }

        throw new ValorNaoSuportavel(this.contentType)
    }
}

module.exports = Serializador