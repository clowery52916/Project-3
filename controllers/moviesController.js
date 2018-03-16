const express = require('express');
const router = express.Router();

const {Movies} = require('../models/MoviesModel')

// router.get('/', (req, res) => {
//   Movie.findById(req.params.movieId).then((movie) => {
//     const comments = movie.comments
//     res.json(comments)
//   })
// })


router.get('/', async (req, res) => {
  console.log('GETTING ALL MOVIES')
  try{
    const movies  = await Movies.find({})
    res.json(movies)
  }catch (err) {
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

router.post('/', (req, res) => {
  res.send('new movie')
  res.render('movie/new')
})

module.exports = router
