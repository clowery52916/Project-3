const express = require('express');
const router = express.Router();


const Movie = require('../models/Movie')

router.get('/movie', (req, res) => {
  Movie.find().then((movie) => {
    res.send(movie)
  })
    res.send(movie)

  })

router.post


module.exports = router
