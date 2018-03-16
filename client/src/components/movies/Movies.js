import React, {Component} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Ratings from '../Ratings'
import Movie from './Movie'

export default class Movies extends Component {

  state = {
    movies: [],

  }

  componentWillMount() {
    this.getAllMovies()
  }

  getAllMovies = async () => {
    const res = await axios.get('/api/movies')
    this.setState({movies: res.data})

  }
  createNewMoviePage = async() => {
    const res = await axios.post('/api/movie/:movie_id')
    this.setState({movie: res.data.movie})
  }
  render() {
    return (<div>
      <h1>Best Picture!</h1>
      {
        this.state.movies.map(movie => <Link key={movie._id} to={`/movie/${movie._id}`} cons={this.setState.movie}>
        <br/>
        <br/>


          <img src={movie.moviePoster} alt={movie.title}/>
        </Link>)

      }
    </div>)
  }

}
