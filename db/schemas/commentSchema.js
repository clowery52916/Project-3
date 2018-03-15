const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({title: String , description: String})

module.exports = {
  commentSchema
}
