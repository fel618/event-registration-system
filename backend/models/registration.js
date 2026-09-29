const { Model, DataTypes } = require('sequelize')
const sequelize = require('./connection')

class Registration extends Model {}

Registration.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'registration'
  }
)

module.exports = Registration