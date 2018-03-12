import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route , Link} from 'react-router-dom'
import MovieShow from './MovieShow'


export default class Movies extends Component {

  state = {
      movies: [],
      showNewForm: true
    }

    componentWillMount () {
      this.getAllMovies()
    }

      getAllMovies = async () => {
      const res = await axios.get('/movies')
      this.setState({movies: res.data})
    }
    toggleShowNewForm = () => {
      this.setState({showNewForm: !this.state.showNewForm})
    }


render () {
  return(
    <div>
      <h1>Best Pictures </h1>
      {this.state.movies.map(movie =>(
      <Link key={movie._id} to={`/${movie._id}`}>
          <h3>Title: {movie.title}</h3>
          <p>Movie Description: {movie.description}</p>
      </Link>
      ))}
    </div>
  )
}
}
