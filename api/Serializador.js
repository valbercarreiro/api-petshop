const ValorNaoSuportavel = require('./erros/ValorNaoSuportavel')

class Serializador {

    json(dados) {
        return JSON.stringify(dados)
    }

    serializar(dados) {
        if(this.contentType === 'application/json') {
            return this.json(this.filtrar(dados))
        }

        throw new ValorNaoSuportavel(this.contentType)
    }

    filtrarObjetos(dados) {
        const novoObjeto = {}
        
        this.camposPublicos.forEach((campo) => {
            if(dados.hasOwnProperty(campo)) {
                novoObjeto[campo] = dados[campo]
            }
        })

        return novoObjeto
    }

    filtrar(dados) {
        if(Array.isArray(dados)) {
            dados = dados.map(item => {
                return this.filtrarObjetos(item)
            })
        } else {
            dados = this.filtrarObjetos(dados)
        }

        return dados
    }
}

class SerializadorFornecedor extends Serializador {
    constructor(contentType) {
        super()
        this.contentType = contentType
        this.camposPublicos = [
            'id', 'empresa', 'categoria'
        ]
    }
}

module.exports = {
    Serializador: Serializador,
    SerializadorFornecedor: SerializadorFornecedor,
    formatosAceitos: [
        'application/json'
    ]
}