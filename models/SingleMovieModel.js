const mongoose = require('mongoose')
const {singleMovieSchema} = require('../db/schemas/singleMovieSchema')

const SingleMovie = mongoose.model('movie', singleMovieSchema)

module.exports = {
  SingleMovie
}
