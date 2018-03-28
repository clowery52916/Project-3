const express = require('express')
const router = express.Router({mergeParams: true})
const [Comment] = require('../models/CommentModel')
const {Movies} = require('../models/MoviesModel')

router.get('/', async (req, res) => {
  console.log('GETTING ALL Comments')
  try {
    Movies.findById(req.params.movieId).then((movie) => {
      const comments = movie.comment
      res.json(comments)
    })
  } catch (err) {
    console.log('error getting all comments', err)
    res.send(err)
  }
})

router.post('/', (req, res) => {
  console.log('Show comment Post Route')
  const movieId = req.params.movieId
  const newComment = req.body
  Movies.findById(req.params.movieId).then((movie) => {
    movie.comment.push(newComment)
    return movie.save()
  }).then((movie) => {
    res.json(movie)
  }).catch(err => {
    console.log(err)
  })
})

router.get('/:id', (req, res) => {
  console.log('SHOW COMMENT ROUTE HIT')
  const commentId = req.params.id
  const movieId = req.params.movieId
  Movies.findById(movieId).then((movie) => {
    const comment = movie.comment.id(commentId)
    res.json(comment)

  }).catch((err) => {
    console.log(err)
    res.send(err)
  })
})

router.patch('/:id', (req, res) => {
  const commentId = req.params.id
  const updatedComment = req.body
  const savedComment = Comment.findByIdAndUpdate(commentId, updatedComment).then((updatedComment) => {
    res.json(savedComment)
    // res.redirect(`/api/comments`)
  }).catch((err) => {
    console.log(err)
  })
})

router.delete('/:commentId', (req, res) => {
  const movieId = req.params.movieId
  const commentId = req.params.commentId
  Movies.findById(movieId).then((movie) => {
    const comment = movie.comment.id(commentId).remove()
    return movie.save()
  })
})

module.exports = router
