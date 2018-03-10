const mongoose = require('mongoose')
const Schema = mongoose.Schema

const moviesSchema = new Schema({
  Title: String,
  description: String
})



module.exports = {
  moviesSchema
}
