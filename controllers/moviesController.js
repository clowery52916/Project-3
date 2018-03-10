const express = require('express');
const router = express.Router();

const Movies = require('../models/movies')
router.get('/', (req, res) => {
  Movies.find().then((movies) => {
    res.send(movies)

    //get the path to movies then find all movies and then send all movies
  })
})


router.post('/', (req, res) => {
  const newMovies = new Movies({
    name: req.body.name
  })

  newMovies.save().then(() => {
    res.redirect('/api/movies')
  })
})


router.get('/:id', (req, res) => {
  Movies.findById(req.params.id).then((movies => {
    res.send(movies)
  }).catch((err) => {
    res.status(500)
    res.send(err)
  })
)})

module.exports = router
