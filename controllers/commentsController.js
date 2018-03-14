const express = require('express')
const router = express.Router({mergeParams: true})

const Comment = require('../models/CommentModel')


//showing all comments in my database
router.get('/', (req, res) => {
  Comment.find().then((comments) => {
    res.send(comments)
    //get the path to comments then find all comments and then send all comments
  })
})
router.get('/:id', async (req, res) => {
  try {
    const Comment = req.params.id
    const comment = await Comment.findById(Comment.title)
    res.send(comment)
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

  router.post('/:id', async (req, res) => {
    try {
      const Comment = req.params.id
      const comment = await Comment.findByIdAndUpdate(Comment.title)
      res.send(comment)
      res.render(comments)
  }catch (err) {
    console.log(err)
    res.send(err)
  }
  })
  handleCommentChange = (event, id) => {
    console.log(comment)
    const newComment = [ ...this.state.comments ]
    console.log(newComments)
    const commentToUpdate = newComments.find(comment => comment._id === id)
    commentToUpdate[ event.target.name ] = event.target.value

    this.setState({ comments: newComments })
  }

  updateComment = (comment) => {

    // comment should look like {_id: '12314sdfa23d', name: 'newName', description: 'new desc'}
    const userId = this.props.match.params.userId
    axios.patch(`/api/user/${userId}/comment/${comment._id}`, comment).then(res => {
      this.setState({ comments: res.data.comments })
    })
  }
module.exports = router

// router.post('/:id', (req, res) => {
//     const newComments = req.body
//     newComment = Comment.create(newComments)
//         .then(() => {
//             res.json(newComment)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })
//
// router.delete('/:id', async (req, res) => {
//     try {
//         await Comment.findByIdAndRemove(req.params.commentId)
//         res.send('Post has been removed!')
//     }
//     catch (err) {
//         console.log(err)
//     }
// })
//
// router.patch('/:id', async (req, res) => {
//     try {
//
//         const updateComment = await Comment.findByIdAndUpdate(req.params.commentId, req.body, {new: true})
//         // garden.name = req.body.name
//         res.json(updateComment)
//     }
//     catch (err) {
//         console.log(err)
//         res.sendStatus(3323)
//
//     }
// })
// module.exports = router
