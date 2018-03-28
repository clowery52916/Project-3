import React, {Component} from 'react';
import axios from 'axios'
import AllMovies from './AllMovies'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import NewComment from '../comments/NewComment'
import CommentView from '../comments/CommentView'
import styled from 'styled-components'
import Comment from '../comments/Comment'
import MovieComment from './MovieComment'


const MovieContainer = styled.div `
  display: inline-table;

`

export default class SingleMovie extends Component {

  state = {
      movie: {
    comment: [
        {
            title: 'awesome!',
            description: "Classic for sure!!",

        },
        {
            title: "So so",
            description: "Wasn't super impressed",

        }
    ],

    title: "The Shape of Water",
    description: "lorem-ipsum",
    moviePoster: "https://i.imgur.com/pMRc7hS.jp g",

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

  handleChange = (event, id) => {
   console.log(id)
   const movieId = this.props.match.params.Id
   const newMovie = [...this.state.movie]
   console.log(newMovie)
   const movieChange = newMovie.find(movie => movieId === id)
   movieChange [event.target.name] = event.target.value

   this.setState({movie: newMovie})
 }

  handleSubmit = async (movie) => {
    const movieId = this.props.match.params.Id
  const res = await axios.post(`/api/movies/${movieId}`)
  this.setState({movie: res.data.movie})
}
deleteMovie = async() => {
  const movieId = this.props.match.params.movieId
  axios.delte(`/api/movies/${movieId}/movies/${movieId}`).then(res => {
    this.setState({movie: res.data.movie})
    this.getMovie()
  })
}

render() {
     if (this.state.redirect === true) {
       return <Redirect to="/movies"/>;
     }
     return (<div>
       {/* <NewComment/> */}
       {/* <h1><MovieComment id = {this.props.match.params.Id}/></h1> */}
       <MovieContainer>
         <strong>
           Movie Title:
         </strong>
         {[this.props.match.params.movie]}
         <br/>
         <strong>Movie Description:
         </strong>
         {[this.state.movie.description]}
         <br/>
        <br/>
         <strong>Movie Comments:
         </strong>
         {[this.state.comment]}
         <br/>
         <br/>
         <strong>Movie Rating:
         </strong>
         {[this.state.rating]}
         <br/>
         <br/>
        <img src={[this.state.movie.moviePoster]} alt={this.state.movie.title} />
      </MovieContainer>
       {/* <div>
         <h1>Post a new Comment!</h1>
         <form onSubmit={this.handleSubmit}>

           <input type="text" name="movieTitle" value={this.state.movieTitle} onChange={this.handleChange}/>
           <br/>
           <label htmlFor='movieInfo'></label>
           <input type='text' name='movieInfo' value={this.state.movieId} onChange={this.handleChange}/>
           <button type='submit'>Create New Movie</button>
         </form>

       </div> */}

       <Comment/>
       <br/>
     </div>)
}
}
