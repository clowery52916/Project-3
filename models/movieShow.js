const mongoose = require('mongoose')
const movieShowSchema = require('../db/schemas/movieShowSchema')

const MovieShow = mongoose.model('movie', movieShowSchema)

module.exports = MovieShow
