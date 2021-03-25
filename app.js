const express = require('express')
const { json: jsonParser, urlencoded: urlencodedParser } = require('body-parser')

const healthController = require('./controllers/health')
const authRouter = require('./controllers/auth')
const notesRouter = require('./controllers/notes')
const app = express()
app.use(jsonParser())
app.use(urlencodedParser({ extended: true }))

app.get('/', (req, res) => {
  res.contentType('text/plain')
  res.send('Hello world')
})

app.get('/health', healthController)
app.use(authRouter)
app.use(notesRouter)

module.exports = app
