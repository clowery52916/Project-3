require('dotenv').config()
const mongoose = require('mongoose')
const { Movies } = require('./schema')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection
// using async/await
const saved = async () => {
  await Movies.remove()
  const bestPicture = new Movies({title: 'The Shape of Water', description: 'lorem-ipsum'})
  await bestPicture.save()
  const runnerUp = new Movies({title: 'Three Billboards', description: 'lorem-ipsum'})
  await runnerUp.save()
  db.close()
}

saved()
