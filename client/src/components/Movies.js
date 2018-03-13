import React, {Component} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'


export default class Movies extends Component {

  state = {
    movies: [],

  }

  componentWillMount() {
    this.getAllMovies()
  }

  getAllMovies = async () => {
    const movie = await axios.get('/api/movies')
    this.setState({movies: movie.data})
  }


  render() {
    return (

      <div>
      <h1>Best Pictures</h1>
        {this.state.movies.map(movie => (<Link key={movie.data} to={`/${movie._id}`}>
          <h3>Title: {movie.title}</h3>
          <p>Movie Description: {movie.description}</p>
        </Link>))
      }
    </div>
  )
  }

}
