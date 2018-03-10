require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection
db.on('error', err => {
  console.log(err)
})

db.on('open', () => {
  console.log('Connected to MongoDB')
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/client/build`))


//setting up routes
const moviesController = require('./controllers/moviesController')
app.use('/api/movies', moviesController)


app.get('/', (req, res) => {
  res.send('And the winner for best Picture is....')
})
app.get('/*', (req, res) => {
   res.sendFile(`${__dirname}/client/build/index.html`)
 })




const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log('RedRum' + PORT)
})

module.exports = app
