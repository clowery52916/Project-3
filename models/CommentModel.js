const mongoose = require('mongoose')
const {commentSchema} = require('../db/schemas/commentSchema')

const Comment = mongoose.model('comment', commentSchema)

module.exports = {
  Comment
}
