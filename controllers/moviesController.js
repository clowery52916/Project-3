const express = require('express');
const router = express.Router();

const Movies = require('../models/movies')

router.get('/', (req, res) => {
  Movies.find().then((movies) => {
    res.send(movies)
  //get the path to movies then find all movies and then send all movies
  })
})


module.exports = router
