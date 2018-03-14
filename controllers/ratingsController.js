const express = require('express');
const router = express.Router();

const Ratings = require('../models/RatingModel')

router.get('/', function(req, res) {
  Ratings.find({}).exec(function(err, ratings){
    if (err) { console.log(err); }
    console.log(ratings)
    res.json({ ratings })
  });
})

router.get('/ratings/:id', function(req, res){
  Ratings.create( req.body )
  .then(function(rating) {
    console.log('succces', rating)

    return Ratings.find({}).exec()
  })
  .then(function(ratings) {
    console.log(ratings)
    res.json({
      data: ratings
    })
  })
});
module.exports = router
