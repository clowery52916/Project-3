const mongoose = require('mongoose')
const commentsSchema = require('../db/schemas/commentsSchema')

const Comments = mongoose.model('comments', commentsSchema)

module.exports = Comments
