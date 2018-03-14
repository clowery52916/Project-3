require('dotenv').config()
const mongoose = require('mongoose')
const Movies = require('../models/movies')
const Ratings = require('../models/ratings')
const Comment =require('../models/comment')



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

  await Comment.remove()
  const userComment = new Comments ({comment_title: 'Your Comment Here', comment_description: 'This movie was amazing'})
  await userComment.save()
  db.close()
}

saved()
