const Sequelize = require('sequelize')
const config = require('config')
const hstore = require('pg-hstore')

const instancia = new Sequelize(
    config.get('postgres.banco-de-dados'),
    config.get('postgres.usuario'),
    config.get('postgres.senha'),
    {
        dialect: 'postgres'
    }
)

module.exports = instancia