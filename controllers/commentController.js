const express = require('express')
const router = express.Router({mergeParams: true})
const {SingleMovie} = require('../models/SingleMovieModel')

const {Comment} = require('../models/CommentModel')

router.get('/', (req, res) => {
  const movie = SingleMovie.findById(req.params.movieId)
  Comment.find().then((comments) => {
    res.json(comments)
  })
})

router.post('/', (req, res) => {
  console.log(req.params.movieId)
  SingleMovie.findById(req.params.movieId).then((movie) => {
    console.log(movieId.comments)
    const newComment = new Comment(req.body)
    console.log(newComment)
    comment.movie.push(newComment)
    return movie.save()
  }).then((updatedSingleMovie) => {
    res.json(updatedSingleMovie)
  })
})

router.patch('/:commentId', (req, res) => {
  Comment.findById(req.params.commentId).then((comment) => {
    const commentToUpdate = comment.comments.id(req.params.id)
    commentToUpdate.title = req.body.title
    commentToUpdate.description = req.body.description
    return comment.save()
  }).then((savedComment) => {
    res.json(savedComment)
  })
})

router.delete('/:commentId', (req, res) => {
  Comment.findByIdAndRemove(req.params.commentId).then((comment) => {
    comment.comments.id(req.params.id).remove()
    return comment.save()
  }).then((savedComment) => {
    res.json(savedComment)
  })
})

module.exports = router
