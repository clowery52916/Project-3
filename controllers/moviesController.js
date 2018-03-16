const express = require('express');
const router = express.Router();

const Movies = require('../models/MoviesModel')


router.get('/:id', async (req, res) => {
  try {
    const Movies = req.params.id
    const movies = await Movies.findById(Movies.title)
    res.send(movie)
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

router.post('/:id', (req, res) => {
  res.send('new movie')
  res.render('movie/new')
})

module.exports = router
