const mongoose = require('mongoose')
const {allMoviesSchema} = require('../db/schemas/allMoviesSchema')

const AllMovies = mongoose.model('movies', allMoviesSchema)

module.exports = {
  AllMovies
}
