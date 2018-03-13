const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ratingsSchema = new Schema({
  rate: String,
})



module.exports ={
  ratingsSchema
}
