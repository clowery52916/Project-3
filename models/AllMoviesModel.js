const mongoose = require('mongoose')
const {allMoviesSchema} = require('../db/schemas/allMoviesSchema')

const AllMovies = mongoose.model('movie', allMoviesSchema)

module.exports = {
  AllMovies
}
