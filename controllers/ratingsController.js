const express = require('express');
const router = express.Router();

const Ratings = require('../models/Ratings')

router.get('/ratings', (req, res) => {
  Ratings.find().then((ratings) => {
    res.send(ratings)
  })
  res.send(ratings)

})

module.exports = router
