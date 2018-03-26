import React, {Component} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Ratings from '../Ratings'

export default class AllMovies extends Component {

  state = {
    movies: [],
    edit: false,
    delete: false,
    redirect: false
  };
  componentWillMount() {
    this.getAllMovies()
  }

  getAllMovies = async () => {
    const res = await axios.get(`/api/movies`)
    console.log(res)
    this.setState({movies: res.data})
  }

  createNewMoviePage = async() => {
    const res = await axios.post('/api/movies/:movie_id')
      this.setState({movie: res.data.movie})
   }
  render() {
    return (<div>
      <h1>And the nomanies are.....</h1>
      {
        this.state.movies.map(movie => <Link key={movie._id} to={`/movies/${movie._id}`} cons={this.setState.movie}>
          <br/>
          <br/>

          <img src={movie.moviePoster} alt={movie.title}/>
        </Link>)

      }
    </div>)
  }

}
