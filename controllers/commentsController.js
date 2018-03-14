const express = require('express')
const router = express.Router({mergeParams: true})
const {Comments} = require('../models/comments')


//read
router.get('/', (req, res) => {
  Comments.find().then((comments) => {
    res.send(comments)
  })
})

//show
router.get('/', (req, res) => {
  Comments.findById(req.params.commentId).then((comment) => {
    res.send(comment)
  })
})

//create

router.post('/', (req, res) => {
  const newComment = new Comment({commentName: req.body.commentName, aboutMe: req.body.aboutMe})

  newComment.save().then((savedComment) => {
    res.redirect(`/api/comments/${savedComment._id}`)
  })
})

//update
router.patch('/', (req, res) => {
  Comments.findByIdAndUpdate(req.params.commentId, {
    commentName: req.body.name,
    aboutMe: req.body.aboutMe

  }, {new: true}).then((updatedComment) => {
    res.redirect(`/api/comments/${updatedComment._id}`)
  })
})

//delete
router.delete('/:id', (req, res) => {
  Comments.findByIdAndRemove(req.params.commentId).then(() => {
    res.redirect('/api/comments')
  })
})

module.exports = router;
