const express = require('express');
const router = express.Router();

const MovieShow = require('../models/movies')
router.get('/movie/{movie_id}/images', (req, res) => {
  MovieShow.find().then((movies) => {
    res.send(movies)

    //get the path to movies then find all movies and then send all movies
  })
})


router.post('movie/{movie_id}/rating', (req, res) => {
  const newMovieShow = new MovieShow({
    name: req.body.name
  })

  newMovieShow.save().then(() => {
    res.redirect('/movie/{movie_id}')
  })
})


router.get('/:id', (req, res) => {
  MovieShow.findById(req.params.id).then((movies => {
    res.send(movies)
  }).catch((err) => {
    res.status(500)
    res.send(err)
  })
)})

module.exports = router
