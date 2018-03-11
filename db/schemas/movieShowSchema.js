const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieShowSchema = new Schema({
  original_title: String,
  overview: String,
  popularity: Number,
  vote_average: Number,
  vote_count: Number
})



module.exports = {
  movieShowSchema
}
