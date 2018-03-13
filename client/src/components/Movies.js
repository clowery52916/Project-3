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
    const res = await axios.get('/api/movies')
    this.setState({movies: res.data})
  }


  render() {
    return (

      <div>
      <h1>Best Pictures</h1>
        {this.state.movies.map(movie =>
          <Link key={movie._id} to={`/movies/${movie._id}`} cons={this.state.movie}>
              <h3>{movie.title}</h3>
                <img src={movie.moviePoster} alt={movie.title}/>
          </Link>)


      }
    </div>
  )
  }

}
