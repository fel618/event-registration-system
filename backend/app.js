const express = require('express')
const eventsRouter = require('./controllers/events')
const registrationsRouter = require('./controllers/registrations')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Event registration API'
  })
})

app.use('/api/events', eventsRouter)
app.use('/api/registrations', registrationsRouter)

module.exports = app