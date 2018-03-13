const express = require('express');
const router = express.Router();

const Movies = require('../models/movies')

router.get('/', (req, res) => {
  Movies.find().then((movies) => {
    res.send(movies)
  //get the path to movies then find all movies and then send all movies
  })
})
router.get('/_id', async (req, res) => {
  try {
    const Movie = req.params.id
    const movie = await Movies.findById(Movie)
    res.send(movie)
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})


module.exports = router
