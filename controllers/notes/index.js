const express = require('express')
const jwt = require('jsonwebtoken')

const authMiddleware = require('../auth/authMiddleware')
const notesRouter = express.Router()

async function createNote(req, res) {
  const {_id} = jwt.decode(req.token)
  res.send('You did it alice 🌸 :) <3 darling <3 :) 💐')
}

notesRouter.post('/notes/new', authMiddleware, createNote)

module.exports = notesRouter
