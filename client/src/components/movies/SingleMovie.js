import React, {Component} from 'react';
import axios from 'axios'
import AllMovies from './AllMovies'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import NewComment from '../comments/NewComment'
import CommentView from '../comments/CommentView'
import styled from 'styled-components'
import Comment from '../comments/Comment'
import MovieComment from './MovieComment'




export default class SingleMovie extends Component {

  state = {
      movie: {
    comment: [
        {
            title: 'awesome!',
            description: "Classic for sure!!",
            _id: "5aad7251e344b6188bb6c18b"
        },
        {
            title: "So so",
            description: "Wasn't super impressed",
            _id: "5aad7251e344b6188bb6c18a"
        }
    ],
    _id: "5aad7251e344b6188bb6c18d",
    title: "The Shape of Water",
    description: "lorem-ipsum",
    moviePoster: "https://i.imgur.com/pMRc7hS.jp g",
    __v: 0
}
      }


    componentWillMount() {
      this.getMovie()
    }

    getMovie = async () => {
    const movieId = this.props.match.params.Id
    const res = await axios.get(`/api/movies/${movieId}`)
    console.log(res)
    this.setState({movie: res.data})
  }

  handleMovieChange = (event, id) => {
   console.log(id)
   const newMovie = [...this.state.movie]
   console.log(newMovie)
   const movieChange = newMovie.find(movie => movie._id === id)
   movieChange [event.target.name] = event.target.value

   this.setState({movie: newMovie})
 }

  updateMovie = async (movie) => {
  const res = await axios.patch(`/api/movies/${movie.id}`)
  this.setState({movie: res.data.movie})
}
deleteMovie = async() => {
  const movieId = this.props.match.params.movieId
  axios.delte(`/api/movies/${movieId}/movies/${movieId}`).then(res => {
    this.setState({movie: res.data.movieId})
    this.getMovie()
  })
}

render() {
     if (this.state.redirect === true) {
       return <Redirect to="/comments"/>;
     }

     return (<div>

       <h1>{[this.state.movie .title]}</h1>
       <p>
         <strong>Movie Description:
         </strong>
         {[this.state.movie.description]}
         <br/>
        <img src={[this.state.movie.moviePoster]} alt={this.state.movie.title} />
       </p>
            <MovieComment/>

       </div>
     )
   }
 }
