const express = require('express');
const router = express.Router();

const {User} = require('../models/UserModel')

router.get('/', (req, res) => {
  User.find().then((users) => {
    res.send(users)
  }).catch((err) => {
    res.status(500)
    res.send(err)
  })
})

router.get('/:userId', (req, res) => {
  User.findById(req.params.userId).then((user) => {
    res.send(user)
  }).catch((err) => {
    res.status(500)
    res.send(err)
  })
}).catch((err) => {
  res.status(500)
  res.send(err)

  router.post('/', (req, res) => {
    const newUser = new User({name: req.body.name, comments: req.body.aboutMe})
    newUser.save().then((savedUser) => {
      res.redirect(`/api/users/${savedUser._id}`)
    })
  }).catch((err) => {
    res.status(500)
    res.send(err)
  })module.exports = router
