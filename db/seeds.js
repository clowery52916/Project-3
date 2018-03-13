require('dotenv').config()
const mongoose = require('mongoose')
const Movies = require('../models/movies')
const Ratings = require('../models/ratings')
const Comments =require('../models/comments')
const Movie = require('../models/movie')

mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection

mongoose.connection.once('open', ()=> {
   console.log("Mongoose on Seeds has connected to the database")
})

mongoose.connection.on('error', (error) => {
   console.error(`MongoDB connection error!!! ${error} `)
 process.exit(-1)
})


// using async/await
const saved = async () => {
  await Movies.remove()
  const bestPicture = new Movies({title: 'The Shape of Water',  description: 'lorem-ipsum', moviePoster: 'https://imgur.com/pMRc7hS'})
  await bestPicture.save()
  const runnerUp = new Movies({title: 'Three Billboards', description: 'lorem-ipsum', moviePoster: 'https://imgur.com/PSaqHQB'})
  await runnerUp.save()
  await Ratings.remove()
  const userRating = new Ratings({rate: 'Rate this movie'})
  await userRating.save()
  await Comments.remove()
  const comment = new Comments ({comment_title: 'Your Comment Here', comment_description: 'This movie was amazing'})
  await comment.save()
  // await Movie.remove()
  // const movie = new Movie({original_title: 'The Shape of Water', overview: 'lorem-ipsum-ipsum', moviePoster: 'https://imgur.com/pMRc7hS'})
  // await movie.save()
  db.close()
}

saved()
