const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieShowSchema = new Schema({
  Title: String,
  description: String
})



module.exports = {
  movieShowSchema
}
