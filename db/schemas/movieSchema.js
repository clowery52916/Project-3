const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({title: String, description: String, moviePoster: String, comment: [], rating: []})

module.exports = {
  movieSchema
}
