const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {commentSchema} = require('./commentSchema')

const allMoviesSchema = new Schema({title: String, description: String, moviePoster: String, comment: [commentSchema]})

module.exports = {
  allMoviesSchema,
  commentSchema
}
