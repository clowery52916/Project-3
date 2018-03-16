// const express = require('express')
// const {Movie} = require('../models/Movie')
// const {Comment} = require('../models/Comment')
// const router = express.Router({mergeParams: true})
//
// router.get('/', (req, res) => {
//   Movie.findById(req.params.movieId).then((movie) => {
//     const comments = movie.comments
//     res.send(comments)
//   })
// })
//
// router.post('/', (req, res) => {
//   Movie.findById(req.params.movieId).then((movie) => {
//     const newComment = new Comment({title: req.body.title description: req.body.description})
//     movie.comments.push(newComment)
//     return movie.save()
//   }).then((savedMovie) => {
//     res.send(savedMovie)
//   }).catch((err) => {
//     console.log(err)
//   })
// })
//
// router.get('/:movieId', (req, res) => {
//   Movie.findById(req.params.movieId).then((movie) => {
//     const comments = movie.comments
//     res.send(comments)
//   })
// })
//
// router.delete('/:movieId', (req, res) => {
//   Movie.findById(req.params.movieId).then((movies) => {
//     movies.movies.id(req.params.id).remove()
//     return movies.save()
//   }).then((savedMovie) => {
//     res.send(savedMovie)
//   })
// })
//
// module.exports = router
