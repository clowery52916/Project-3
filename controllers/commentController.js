const express = require('express')
const router = express.Router({mergeParams: true})
const {Comment} = require('../models/CommentModel')




router.get('/', async (req, res) => {
  console.log('GETTING ALL Comments')
  try {
    Movies.findById(req.params.movieId)
    .then((movie) => {
      const comments = movies.comment
      res.json(comments)
    })
    const comments = await Comment.find({})
    res.json(comments)
  } catch (err) {
    console.log('error getting all comments', err)
    res.send(err)
  }
})

router.get('/:id', async (req, res) => {
  console.log('SHOW ROUTE HIT')
  try {
    const commentId = req.params.id
    console.log(commentId)
    const comments = await Comment.findById(commentId)
    res.json(comments)
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

router.post('/', (req, res) => {
  const newComment = new Comment({
    title: req.body.title,
    description: req.body.description,

  })
  newComment.save().then(savedComment => {
    res.redirect('/api/comments')
  })
})

router.patch('/:id',(req, res) => {
  const commentId = req.params.id
  const updatedComment = req.body
  const savedComment = Comment.findByIdAndUpdate(commentId, updatedComment)
  .then((updatedComment) => {
    res.json(savedComment)
    // res.redirect(`/api/comments`)
  })
  .catch((err) => {
    console.log(err)
  })
})

router.delete('/:commentId', (req, res) => {
  Comment.findByIdAndRemove(req.params.commentId).then((movie) => {
    movie.comments.id(req.params.id).remove()
    return movie.save()
  }).then((savedComment) => {
    res.json(savedComment)
  })
})

module.exports = router
