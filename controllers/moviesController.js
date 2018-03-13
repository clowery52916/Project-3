const express = require('express')
const router = express.Router({
    mergeParams: true
})

const Movie = require('../models/movie')
const Ratings = require('../models/ratings')
const Comments = require('../models/comments')

//get index
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find({})
    res.json(movies)
    } catch(err) {
        console.log(err)
    }
  })

//show single movie
  router.get('/:id', async (req, res) => {
    try {
      const singleMovie = req.params.id
      const movie = await Movie.findById(singleMovie)
      res.json(movie)
    } catch (err) {
      console.log(err)
      res.json(err)
    }
  })
//find singleMovie
  router.post("/", (req, res) => {
  Movie.findById(req.params.singleMovie)
    .then(movies => {
      const newComment = new Comment({
        comment_title: req.body.name,
        comment_description: req.body.name,

      });
      movies.comments.push(newComment);
      return movies.save();
    })
    .then(savedComment => {
      res.send(savedComment);
    });
});


module.exports = router
