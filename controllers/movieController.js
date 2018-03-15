const express = require('express')
const Movie = require('../models/Movie')
const Movie = require('../models/Movie')
const router = express.Router({mergeParams: true})

router.post('/', (req, res) => {
  console.log(req.params.movieId)
  Movie.findById(req.params.movieId).then((user) => {
    const newMovie = new Movie({})
    user.movies.push(newMovie)
    return user.save()
  }).then((savedMovie) => {
    res.send(savedMovie)
  })
})


router.delete('/:id', (req, res) => {
  Movie.findById(req.params.movieId).then((user) => {
    user.movies.id(req.params.id).remove()
    return user.save()
  }).then((savedMovie) => {
    res.send(savedMovie)
  })
})

module.exports = router
