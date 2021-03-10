function authController (req, res) {
  res.contentType('text/plain')
  res.send('Auth')
}

module.exports = authController
