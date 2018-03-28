require('dotenv').config()
const mongoose = require('mongoose')
const {Movies} = require('../models/MoviesModel')
const {User} = require('../models/UserModel')
const [Comment] = require('../models/CommentModel')

mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection

mongoose.connection.once('open', () => {
  console.log("Mongoose on Seeds has connected to the database")
})

mongoose.connection.on('error', (error) => {
  console.error(`MongoDB connection error!!! ${error} `)
  process.exit(-1)
})

const court = new User({
  name: 'Courtney_Lowery',

})

// comments seeds
const bestMovie = new Comment ({
  title: 'Best Movie ever!',
 description: 'This movie was amazing'})
const alrightMovie = new Comment({title: 'So so',
description: 'Wasn\'t super impressed'})
const greatMovie = new Comment({title: 'awesome!',
description: 'Classic for sure!!'})
// user seeds

//movie seeds
const bestPicture = new Movies({
  title: 'The Shape of Water',
  description: 'At a top secret research facility in  the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.',
  Director: 'Guillermo del Toro',
  Writers: 'Guillermo del Toro, (screenplay by), Vanessa Taylor',
  Stars: 'Sally Hawkins, Octavia Spencer, Michael Shannon ',
  moviePoster: 'https://i.imgur.com/pMRc7hS.jpg',
  comment: [greatMovie, alrightMovie]
})

const runnerUp = new Movies({
  title: 'Three Billboards',
  description: 'lorem-ipsum',
  moviePoster: 'https://i.imgur.com/PSaqHQB.jpg',
  comment: [greatMovie, bestMovie, alrightMovie]
})
//removing comments
Movies.remove({}).then(() =>
  bestPicture.save()).then(() =>
  runnerUp.save()).then(() => {
  console.log('movies saved')
}).then(() => {
  mongoose.connection.close()
})
