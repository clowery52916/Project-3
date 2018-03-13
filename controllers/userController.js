const express = require('express');
const router = express.Router();

const User = require('../models/user')

router.post('/movies', (req, res) => {
  const newMovies = new Movies({
    name: req.body.name
  })
})


module.exports = router
