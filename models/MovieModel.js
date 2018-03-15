const mongoose = require('mongoose')
const {movieSchema} = require('../db/schemas/movieSchema')

const Movie = mongoose.model('movie', movieSchema)

module.exports = {Movie}
