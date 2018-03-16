require('dotenv').config()
const mongoose = require('mongoose')
const Movies = require('../models/movies')
const Ratings = require('../models/ratings')
const Comment = require('../models/comment')

mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection

mongoose.connection.once('open', () => {
  console.log("Mongoose on Seeds has connected to the database")
})

mongoose.connection.on('error', (error) => {
  console.error(`MongoDB connection error!!! ${error} `)
  process.exit(-1)
})

const bestPicture = new Movie({title: 'The Shape of Water', description: 'lorem-ipsum', moviePoster: 'https://imgur.com/pMRc7hS'})
const runnerUp = new Movie({
  title: 'Three Billboards',
  description: 'lorem-ipsum',
  moviePoster: 'https://imgur.com/PSaqHQB' const bestMovie = new Comment({title: `${Movie.title}`, description: 'This movie was amazing'})
  const alightMovie = new Comment({title: 'So so', description: 'Wasn\'t super impressed'})

  const court = new User({
    name: 'Courtney_Lowery',
    comments: [bestPicture, runnerUp, bestMovie]
  })User.remove({}).then(() => court.save()).then(() => console.log('user saved')).then(() => mongoose.connection.close())
