const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentsSchama = new Schema({
  Title: String,
  description: String
})



module.exports = {
  commentsSchema
}
