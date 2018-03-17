const express = require('express');
const router = express.Router();
const {SingleMovie} = require('../models/SingleMovieModel')
const {AllMovies} = require('../models/AllMoviesModel')

// router.get('/', (req, res) => {
//   Movie.findById(req.params.movieId).then((movie) => {
//     const comments = movie.comments
//     res.json(comments)
//   })
// })

router.get('/', async (req, res) => {
  console.log('GETTING ALL MOVIES')
  try {
    const movies = await AllMovies.find({})
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
    const movies = await AllMovies.findById(movieId)
    res.json(movies)
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

router.post('/', (req, res) => {
  res.send('new movie')
  res.render('movie/new')
})

module.exports = router

// const express = require('express')
//  const {Movie} = require('../models/Movie')
// const {Comment} = require('../models/Comment')
// const router = express.Router({mergeParams: true})
//
// router.get('/', (req, res) => {
//   Movie.findById(req.params.movieId).then((movie) => {
//     const comments = movie.comments
//     res.json(comments)
//   })
// })
//
//  router.post('/', (req, res) => {
//    Movie.findById(req.params.movieId).then((movie) => {
//      const newComment = new Comment({title: req.body.title description: req.body.description})
//      movie.comments.push(newComment)
//      return movie.save()
//    }).then((savedMovie) => {
//      res.json(savedMovie)
//    }).catch((err) => {
//      console.log(err)
//    })
//  })
//
// router.get('/:movieId', (req, res) => {
//   Movie.findById(req.params.movieId).then((movie) => {
//     const comments = movie.comments
//     res.json(comments)
//   })
// })
//
// router.delete('/:movieId', (req, res) => {
//   Movie.findById(req.params.movieId).then((movies) => {
//     movies.movies.id(req.params.id).remove()
//     return movies.save()
//   }).then((savedMovie) => {
//     res.json(savedMovie)
//   })
// })
//
// module.exports = router
