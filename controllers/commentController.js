const express = require('express')
const router = express.Router({mergeParams: true})
const {Movie} = require('../models/MovieModel')

const {Comment} = require('../models/CommentModel')

router.get('/', (req, res) => {
  const movie = Movie.findById(req.params.movieId)
    Comment.find().then((comments) => {
        res.json(comments)
    })
})

router.post('/', (req, res) => {
  console.log(req.params.commentId)
  Comment.findById(req.params.commentId).then((comment) => {
    const newComment = new Comment({})
    comment.comments.push(newComment)
    return comment.save()
  }).then((savedComment) => {
    res.json(savedComment)
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
