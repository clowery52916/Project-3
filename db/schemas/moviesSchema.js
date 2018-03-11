const mongoose = require('mongoose')
const Schema = mongoose.Schema

const moviesSchema = new Schema({
  original_title: String,
  overview: String,
  id: Number,

})



module.exports = {
  moviesSchema
}
