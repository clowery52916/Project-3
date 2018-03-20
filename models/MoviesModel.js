const mongoose = require('mongoose')
const {movieSchema} = require('../db/schemas/movieSchema')

const Movies = mongoose.model('movie', movieSchema)

module.exports = {
  Movies
}
