const express = require('express')
const eventsRouter = require('./controllers/events')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Event registration API'
  })
})

app.use('/api/events', eventsRouter)

module.exports = app