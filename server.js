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
app.use(bodyParser.urlencoded({extended: true}));

//setting up routes

const moviesController = require('./controllers/moviesController')
const ratingsController = require('./controllers/ratingsController')
const commentsController = require('./controllers/commentController')
const userController = require('./controllers/userController')

app.use('/api/movies', moviesController)
//getting all movies
app.use('/api/movies/:movieId/comments', commentsController)
//getting comments of specific movie
// app.use('/api/movies/:id', movieController)
app.use('/api/movies/:id/ratings', ratingsController)

app.use('/api/user', userController)
//getting users

app.get('/', (req, res) => {
  res.send('And the winner for best Picture is....')
})
app.use(express.static(`${__dirname}/client/build`))

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

const PORT = process.env.PORT || 3010

app.listen(PORT, () => {
  console.log('RedRum' + PORT)
})

module.exports = app
