const express = require('express');
const router = express.Router();

const {User} = require('../models/UserModel')

// router.get('/', (req, res) => {
//   Movie.findById(req.params.userId).then((movie) => {
//     const comments = movie.comments
//     res.json(comments)
//   })
// })
router.get('/', async (req, res) => {
  console.log('GETTING ALL USERS')
  try {
    const users = await User.find({})
    res.json(users)
  } catch (err) {
    console.log('error getting all users', err)
    res.send(err)
  }
})

router.get('/:id', async (req, res) => {
  console.log('SHOW ROUTE HIT FOR USERS')
  try {
    const userId = req.params.id
    console.log(userId)
    const users = await User.findById(userId)
    res.json(users)
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

router.post('/', (req, res) => {
  res.send('new user')
  res.render('user/new')
})

module.exports = router
