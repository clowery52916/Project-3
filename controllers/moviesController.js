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

// router.post('/', async (req, res) => {
//   console.log('MovieComment route showing')
//   try {
//     const commentId = req.params.id
//     console.log(commentId)
//     const comments = await Comment.findById(commentId)
//     res.json(comments)
//   } catch(err) {
//     console.log('this route to Comment is not working', err)
//     res.send(err)
//   } res.redirect('/movies/:id/comments')
// })
//
// router.patch('/:id', (req, res) => {
//   Movie.findById(req.params.movieId).then((comment) => {
//     const movieToUpdate = movie.movies.id(req.params.id)
//     movieToUpdate.title = req.body.title
//     movieToUpdate.description = req.body.description
//     movieToUpdate.moviePoster = req.body.moviePoster
//     return movie.save()
//   }).then((savedMovie) => {
//     res.json(savedMovie)
//   })
// })
//

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

// const express = require('express')
//  const {Movie} = require('../models/Movie')
// const {Movie} = require('../models/Comment')
// const router = express.Router({mergeParams: true})
//
// router.get('/', (req, res) => {
//   Movie.findById(req.params.movieId).then((movie) => {
//     const comments = movie.comments
//     res.json(comments)
//   })
// })
//

// module.exports = router
