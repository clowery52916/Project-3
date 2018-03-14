const express = require('express');
const router = express.Router();

const Movies = require('../models/MoviesModel')

//showing all movies in my database
router.get('/', (req, res) => {
  Movies.find().then((movies) => {
    res.send(movies)
    //get the path to movies then find all movies and then send all movies
  })
})
router.get('/:id', async (req, res) => {
  try {
    const Movie = req.params.id
    const movie = await Movies.findById(Movies.title)
    res.send(movie)
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

  router.post('/:id', (req, res) => {
    res.send('new movie')
    res.render('movie/new')
  })



module.exports = router
