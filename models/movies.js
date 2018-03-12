const mongoose = require('mongoose')
const {moviesSchema} = require('../db/schemas/moviesSchema')

const Movies = mongoose.model('movies', moviesSchema)

module.exports = Movies
