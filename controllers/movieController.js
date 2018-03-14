const express = require('express');
const router = express.Router();

const Movie = require('../models/movie')

router.get('/', function(req, res) {
  Movie.find({}).exec(function(err, movies) {
    if (err) {
      console.log(err);
    }
    console.log(movies)
    res.json({movies})
  });
})

router.post('/movies/_id', function(req, res) {
  Movie.create(req.body).then(function(movie) {
    console.log('succces', movie)

    return Movies.find({}).exec()
  }).then(function(movies) {
    console.log(movies)
    res.json({data: movies})
  })
});

module.exports = router
