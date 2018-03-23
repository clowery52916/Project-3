const mongoose = require('mongoose')
const {movieSchema} = require('../db/schemas/movieSchema')

const Movies = mongoose.model('Movie', movieSchema)

module.exports = {
  Movies
}
