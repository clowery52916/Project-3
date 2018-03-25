import React, {Component} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Ratings from '../Ratings'

export default class Movies extends Component {

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
    const res = await axios.post('/api/movies/:movieId/')
      this.setState({movie: res.data.movie})
   }
  render() {
    return (<div>
      <h1>And the runners up .....</h1>
      {
        this.state.movies.map(movie => <Link key={movie._id} to={`/movies/${movie._id}`} comments={this.setState.movie}>
          <br/>
          <br/>

          <img src={movie.moviePoster} alt={movie.title}/>
        </Link>)

      }
    </div>)
  }

}
