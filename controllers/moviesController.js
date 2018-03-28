const express = require('express');
const router = express.Router({mergeParams: true});
const {Movies} = require('../models/MoviesModel')
const {Comment} = require ('../models/CommentModel')

router.get('/', async (req, res) => {
  console.log('GETTING ALL MOVIES')
  try {
    const movies = await Movies.find({})
    res.json(movies)
  } catch (err) {
    console.log('error getting all movies', err)
    res.send(err)
  }
})

router.get('/:id', async (req, res) => {
  console.log('SHOW ROUTE HIT')
  try {
    const movieId = req.params.id
    console.log(movieId)
    const movies = await Movies.findById(movieId)
    res.json(movies)
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

router.post('/', (req, res) => {
  const newMovie = new Movies({
    title: req.body.title,
    description: req.body.description,
    moviePoster: req.body.moviePoster
  })
  newMovie.save().then(savedMovie => {
    res.redirect('/api/movies')
  })
})

router.patch('/:id',(req, res) => {
  const movieId = req.params.id
  const updatedMovie = req.body
  const savedMovie = Movies.findByIdAndUpdate(movieId, updatedMovie)
  .then((updatedMovie) => {
    res.json(savedMovie)
    // res.redirect(`/api/movies`)
  })
  .catch((err) => {
    console.log(err)
  })
})

router.delete('/:movieId', (req, res) => {
  Movies.findByIdAndRemove(req.params.movieId).then((movie) => {
    movie.movies.id(req.params.id).remove()
    return movie.save()
  }).then((savedMovie) => {
    res.json(savedMovie)
  })
})

module.exports = router
