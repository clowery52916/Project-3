const express = require('express');
const router = express.Router();

const User = require('../models/user')
router.get('/', (req, res) => {

    res.send(user)

    //get the path to user then find all user and then send all user
  })


router.post('/movies', (req, res) => {
  const newMovies = new Movies({
    name: req.body.name
  })
})
