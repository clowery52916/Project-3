import React, {Component} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Ratings from '../Ratings'
import Movies from './Movies'
import Comment from '../comments/Comment'
import NewComment from '../comments/NewComment'
import CommentView from '../comments/CommentView'
import Login from '../users/Login'

export default class Movie extends Component {
  state = {
      movies: [ { _id: '1234', title: 'The Shape of water', moviePoster:'https:' } ],
      redirectToComment: ''
    }

    getAllUsers = () => {
      axios.get('/api/user').then((res) => {
        console.log(res.data)
        this.setState({ users: res.data })
      })
    }
  handleChange = (event) => {
  this.props.handleMovieChange(event, this.props.movies._id)
}
createNewComment =(payload) => {
  axios.post('/api/comment', payload).then((res) => {
    const newCommentId = res.data[ res.data.length -1]._id
    this.setState({redirectToComment: newCommentId})
  })
}
render () {
  return (
    <div>
        <h1>Welcome Back, Please select a Movie below</h1>
        <ul>
          {this.state.movies.map((movie) => {
            return (
              <li key={movie._id}>
                <Link to={`/movie/${movie._id}`}>
                  {movie.title}'s Favorite Movies
                </Link>
              </li>
            )
          })}
        </ul>
        <Login createNewComment={this.createNewComment} />
      </div>

  )
}
}
