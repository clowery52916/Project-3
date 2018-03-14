const express = require('express');
const router = express.Router();

const User = require('../models/user')

router.get ('/', (req, res) => {
  const saveNewUser = new User({
    name: req.body.name
  })
})
router.post('/movies', (req, res) => {
  const newMovies = new Movies({
    name: req.body.name
  })
})


module.exports = router
