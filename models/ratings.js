const mongoose = require('mongoose')
const {ratingsSchema} = require('../db/schemas/ratingsSchema')

const Ratings = mongoose.model('ratings', ratingsSchema)

module.exports = Ratings
