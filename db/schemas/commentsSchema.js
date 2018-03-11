const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentsSchama = new Schema({
  comment_title: String,
  comment_description: String
})



module.exports = {
  commentsSchema
}
