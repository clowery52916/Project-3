require('dotenv').config()
const mongoose = require('mongoose')
const Movies = require('../models/movies')

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
  const bestPicture = new Movies({title: 'The Shape of Water',  description: 'lorem-ipsum'})
  await bestPicture.save()
  const runnerUp = new Movies({title: 'Three Billboards', description: 'lorem-ipsum'})
  await runnerUp.save()
  db.close()
}

saved()
