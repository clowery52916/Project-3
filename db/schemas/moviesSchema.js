const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {commentSchema} = require('./commentSchema')

const moviesSchema = new Schema({title: String, description: String, moviePoster: String, comments: [commentSchema]})

module.exports = {
  moviesSchema,
  commentSchema
}
