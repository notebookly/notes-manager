const express = require('express')
const jwt = require('jsonwebtoken')

const Note = require('../../models/note')

const authMiddleware = require('../auth/authMiddleware')
const notesRouter = express.Router()

async function createNote(req, res) {
  const { body: { note: data } } = req

  if (data && data.title && data.body) {
    try {
      const {_id} = jwt.decode(req.token)

      const note = new Note({...data, authorId: _id})
      const result = await note.save()

      res.send(result)
    } catch(e) {
      res.status(500).send({
        message: 'Something went wrong, please try again.'
      })
    }
  } else {
    res.status(400).send({
      message: 'Please use a valid format for creating a note'
    })
  }
}

notesRouter.post('/notes/create', authMiddleware, createNote)

module.exports = notesRouter
