const { Sequelize } = require('sequelize')
const config = require('../utils/config')

const sequelize = new Sequelize(config.DATABASE_URL, {
  logging: false
})

module.exports = sequelize