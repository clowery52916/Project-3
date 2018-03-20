const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {commentSchema} = require('./commentSchema')
const {ratingsSchema} = require('./ratingsSchema')

const movieSchema = new Schema({
  title: String,
   description: String,
   moviePoster: String,
   comment: [commentSchema],
   rating: []})

module.exports = {
  movieSchema,
  commentSchema,
  ratingsSchema
}
