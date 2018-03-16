const express = require('express')
const router = express.Router({mergeParams: true})

const Comment = require('../models/CommentModel')

router.post('/', (req, res) => {
  console.log(req.params.commentId)
  Comment.findById(req.params.commentId).then((comment) => {
    const newComment = new Comment({})
    comment.comments.push(newComment)
    return comment.save()
  }).then((savedComment) => {
    res.send(savedComment)
  })
})

router.patch('/:id', (req, res) => {
  Comment.findById(req.params.commentId).then((comment) => {
    const commentToUpdate = comment.comments.id(req.params.id)
    commentToUpdate.title = req.body.title
    commentToUpdate.description = req.body.description
    return comment.save()
  }).then((savedComment) => {
    res.send(savedComment)
  })
})

router.delete('/:id', (req, res) => {
  Comment.findById(req.params.commentId).then((comment) => {
    comment.comments.id(req.params.id).remove()
    return comment.save()
  }).then((savedComment) => {
    res.send(savedComment)
  })
})

module.exports = router
