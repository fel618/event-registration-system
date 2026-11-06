const router = require('express').Router()
const { Event, Registration } = require('../models')

router.post('/', async (req, res, next) => {
  try {
    const { name, email, eventId } = req.body

    if (
      typeof name !== 'string' ||
      name.trim() === '' ||
      typeof email !== 'string' ||
      !email.includes('@') ||
      !Number.isInteger(eventId) ||
      eventId <= 0
    ) {
      return res.status(400).json({
        error: 'Invalid registration data'
      })
    }

    const event = await Event.findByPk(eventId)

    if (!event) {
      return res.status(404).json({
        error: 'Event not found'
      })
    }

    const registration = await Registration.create({
      name: name.trim(),
      email: email.trim(),
      eventId
    })

    res.status(201).json(registration)
  } catch (error) {
    next(error)
  }
})

module.exports = router