const Event = require('./event')
const Registration = require('./registration')
const User = require('./user')

Event.hasMany(Registration, {
  foreignKey: {
    name: 'eventId',
    allowNull: false
  },
  onDelete: 'CASCADE'
})

Registration.belongsTo(Event, {
  foreignKey: {
    name: 'eventId',
    allowNull: false
  },
  onDelete: 'CASCADE'
})

module.exports = {
  Event,
  Registration,
  User
}