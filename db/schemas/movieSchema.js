const mongoose = require('mongoose')
const Schema = mongoose.Schema


const movieSchema = new Schema({
  original_title: String,
  overview: String,


})



module.exports = {
  movieSchema
}
