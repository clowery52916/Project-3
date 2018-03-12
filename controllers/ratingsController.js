const express = require('express');
const router = express.Router();





const Ratings = require('../models/Ratings')
router.get('/ratings', (req, res) => {

    res.send(ratings)

  })


router.post('/movie_id', (req, res) => {
  const newMovies = new Movies({
    name: req.body.name
  })
})


module.exports = router
