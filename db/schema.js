const mongoose = require('mongoose')

const Schema = mongoose.Schema

const MoviesSchema = new Schema({
  Title: String,
  description: String
})

const Movies = mongoose.model('Movies', MoviesSchema)

module.exports = {
  Movies
}
