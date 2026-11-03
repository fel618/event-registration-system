const router = require('express').Router()
const { Event } = require('../models')

router.get('/', async (req, res, next) => {
  try {
    const events = await Event.findAll()
    res.json(events)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        error: 'Invalid event id'
      })
    }

    const event = await Event.findByPk(id)

    if (!event) {
      return res.status(404).json({
        error: 'Event not found'
      })
    }

    res.json(event)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { name, description, date, location } = req.body

    if (!name || !description || !date || !location) {
      return res.status(400).json({
        error: 'All fields are required'
      })
    }

    const event = await Event.create({
      name,
      description,
      date,
      location
    })

    res.status(201).json(event)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        error: 'Invalid event id'
      })
    }

    const event = await Event.findByPk(id)

    if (!event) {
      return res.status(404).json({
        error: 'Event not found'
      })
    }

    await event.destroy()

    res.status(204).end()
  } catch (error) {
    next(error)
  }
})

module.exports = router