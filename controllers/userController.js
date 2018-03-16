const express = require('express');
const router = express.Router();

const User = require('../models/UserModel')


router.post('/', (req, res) => {
  const newUser = new User({name: req.body.name})

  newUser.save().then(() => {
    res.redirect('/api/user')
  })
})

router.get('/:id', (req, res) => {
  User.findById(req.params.id).then((user) => {
    res.send(user)
  }).catch((err) => {
    res.status(500)
    res.send(err)
  })
})

module.exports = router
