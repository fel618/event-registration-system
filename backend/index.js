const app = require('./app')
const config = require('./utils/config')
const sequelize = require('./models')

const start = async () => {
  try {
    await sequelize.authenticate()

    console.log('Connected to database')

    app.listen(config.PORT, () => {
      console.log(`Server running on port ${config.PORT}`)
    })
  } catch (error) {
    console.error('Unable to connect to database:', error)
  }
}

start()