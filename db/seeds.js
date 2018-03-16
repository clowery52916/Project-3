require('dotenv').config()
const mongoose = require('mongoose')
const [Movies] = require('../models/movies')
const [User] = require('../models/user')
const [Comment] = require('../models/comment')

mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection

mongoose.connection.once('open', () => {
  console.log("Mongoose on Seeds has connected to the database")
})

mongoose.connection.on('error', (error) => {
  console.error(`MongoDB connection error!!! ${error} `)
  process.exit(-1)
})

//movie seeds
const bestPicture = new Movie({
title: 'The Shape of Water',
description: 'lorem-ipsum',
moviePoster: 'https://imgur.com/pMRc7hS',
comments:[greatMovie, alrightMovie]})
const runnerUp = new Movie({
  title: 'Three Billboards',
  description: 'lorem-ipsum',
  moviePoster: 'https://imgur.com/PSaqHQB'
  comments:[greatMovie, bestMovie, alightMovie]})
//comments seeds
  const bestMovie = new Comment({
    title: `${Movie.title}`,
    description: 'This movie was amazing'})
  const alightMovie = new Comment({
    title: 'So so',
    description: 'Wasn\'t super impressed'})
  const greatMovie = new Comment({
    title:'awesome!',
    description: 'Classic for sure!!'})
//user seeds
  const court = new User ({
    name: 'Courtney_Lowery',
    comments: [bestPicture, runnerUp, bestMovie, greatMovie]})
//removing comments
  Comment.remove({})
  .then(() => { greatMovie.save() })
  .then(() => { alightMovie.save() })
  .then(() => { bestMovie.save() })



  .then(() =< { console.log('user saved') })
  .then(() => { mongoose.connection.close()})
