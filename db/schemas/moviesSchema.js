const mongoose = require('mongoose')
const Schema = mongoose.Schema

const moviesSchema = new Schema({
  title: String,
  description: String,
  moviePoster: String
})



module.exports = {
  moviesSchema
}
