const mongoose = require('mongoose')
const {commentsSchema} = require('../db/schemas/commentsSchema')

const Comment = mongoose.model('comments', commentsSchema)

module.exports = { Comment }
