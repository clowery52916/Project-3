const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {commentSchema} = require('./commentSchema')

const userSchema = new Schema({name: String, comment: [commentSchema]})

module.exports = {
  userSchema,
  commentSchema
}
