class DadosNaoFornecidos extends Error {
    constructor() {
        super('Não foram fornecidos dados para atalizar!')
        this.name = 'DadosNaoFornecidos'
        this.idErro = 2
    }
}

module.exports = DadosNaoFornecidos