const express = require('express');
const router = express.Router();

const Ratings = require('../models/RatingModel')


router.get('/ratings/:id', function(req, res) {
  Ratings.create(req.body).then(function(rating) {
    console.log('succces', rating)

    return Ratings.find({}).exec()
  }).then(function(ratings) {
    console.log(ratings)
    res.json({data: ratings})
  })
});
module.exports = router
