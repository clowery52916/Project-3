require('dotenv').config()
const mongoose = require('mongoose')
const {AllMovies} = require('../models/AllMoviesModel')
const {User} = require('../models/UserModel')
const {Comment} = require('../models/CommentModel')

mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection

mongoose.connection.once('open', () => {
  console.log("Mongoose on Seeds has connected to the database")
})

mongoose.connection.on('error', (error) => {
  console.error(`MongoDB connection error!!! ${error} `)
  process.exit(-1)
})


//comments seeds
const bestMovie = new Comment({
  title: 'Best Movie ever!',
 description: 'This movie was amazing'})
const alrightMovie = new Comment({title: 'So so',
description: 'Wasn\'t super impressed'})
const greatMovie = new Comment({title: 'awesome!',
description: 'Classic for sure!!'})
//user seeds
const court = new User({
  name: 'Courtney_Lowery',
  comment: [bestMovie, greatMovie, alrightMovie]
})
//movie seeds
const bestPicture = new AllMovies({
  title: 'The Shape of Water',
  description: 'At a top secret research facility in  the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.',
  Director: 'Guillermo del Toro',
  Writers: 'Guillermo del Toro, (screenplay by), Vanessa Taylor',
  Stars: 'Sally Hawkins, Octavia Spencer, Michael Shannon ',
  moviePoster: 'https://i.imgur.com/pMRc7hS.jpg',
  comment: [greatMovie, alrightMovie]
})

const runnerUp = new AllMovies({
  title: 'Three Billboards',
  description: 'lorem-ipsum',
  moviePoster: 'https://i.imgur.com/PSaqHQB.jpg',
  comment: [greatMovie, bestMovie, alrightMovie]
})
//removing comments
AllMovies.remove({}).then(() =>
  bestPicture.save()).then(() =>
  runnerUp.save()).then(() => {
  console.log('movies saved')
}).then(() => {
  mongoose.connection.close()
})
