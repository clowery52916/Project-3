const mongoose = require('mongoose')
const schemas = require('../db/schema')

const MovieShow = mongoose.model('movieShow', schemas.MovieShowSchema)

module.exports = MovieShow
