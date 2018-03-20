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

router.post('/', async (req, res) => {
  console.log('MovieComment route showing')
  try {
    const commentId = req.params.id
    console.log(commentId)
    const comments = await Comment.findById(commentId)
    res.json(comments)
  } catch(err) {
    console.log('this route to Comment is not working', err)
    res.send(err)
  } res.redirect('/movies/:id/comments')
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

// module.exports = router
