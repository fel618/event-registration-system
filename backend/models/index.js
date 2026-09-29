const Event = require('./event')
const Registration = require('./registration')
const User = require('./user')

Event.hasMany(Registration)
Registration.belongsTo(Event)

module.exports = {
  Event,
  Registration,
  User
}