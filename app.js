const express = require('express')

const healthController = require('./controllers/health')

const app = express()

app.get('/', (req, res) => {
  res.contentType('text/plain')
  res.send('Hello world')
})

app.get('/health', healthController)

module.exports = app
