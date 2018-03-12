const mongoose = require('mongoose')
const Schema = mongoose.Schema

const moviesSchema = new Schema({
  title: String,
  description: String,
})



module.exports = {
  moviesSchema
}
