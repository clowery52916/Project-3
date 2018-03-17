const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {commentSchema} = require('./commentSchema')

const singleMovieSchema = new Schema({title: String, description: String, moviePoster: String, comment: [commentSchema], rating: []})

module.exports = {
  singleMovieSchema,
  commentSchema
}
