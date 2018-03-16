const mongoose = require('mongoose')
const {commentsSchema} = require('../db/schemas/commentsSchema')

const Comment = mongoose.model('comment', commentSchema)

module.exports = {
  Comment
}
