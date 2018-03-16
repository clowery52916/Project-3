import React, {Component} from 'react';
import axios from 'axios'
import Movies from './Movies'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import NewComment from '../comments/NewComment'
import CommentView from '../comments/CommentView'
import styled from 'styled-components'
import Comment from '../comments/Comment'
import EditComment from '../comments/EditComment'

export default class Movie extends Component {
  state = {
    movie: {
      title: "",
      description: ""
    },
    edit: false,
    delete: false,
    redirect: false
  };
  componentWillMount() {
    this.getMovie()
  }

  getMovie = async () => {
    const res = await axios.get('/api/movies')
    this.setState({movie_id: res.data})

  }
  // createNewComment = async() => {
  //   const res = await axios.post('/api/movies/:moviesId')
  //   this.setState({movie: res.data.movie})
  // }

  handleMovieChange = (event, id) => {
    console.log(id)
    const newMovie = [...this.state.movie]
    console.log(newMovie)
    const movieChange = newMovie.find(comment => comment._id === id)
    movieChange[event.target.name] = event.target.value

    this.setState({movie: newMovie})
  }

  // updateComment = async(comment) => {
  //   const res = await axios.patch(`/api/movie/${comment.id}/comment`)
  //   this.setState({movie: res.data.comment})
  // }

  deleteMovie = () => {
    const movieId = this.props.match.params.movieId
    axios.delete(`/api/comment/${movieId}/comment/${movieId}`).then(res => {
      this.setState({movie: res.data.movie})
      this.getMovie()
    })
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/"/>;
    }
    return (<div>
      {/* <NewComment/> */}
      <h1>{this.state.movie.title}</h1>
      <p>
        <strong>Movie Title
        </strong>
        {this.state.movie.description}
      </p>
      <button onClick={this.edit}>Edit Movie Info</button>
      <button onClick={this.delete}>Delete Movie</button>

      {
        this.state.delete
          ? (<div>
            <p>Are you sure?</p>
            <br/>
            <button onClick={this.deleteMovie}>Delete Movie</button>{" "}
            <button onClick={this.delete}>Do not Delete</button>
          </div>)
          : null
      }

      {
        this.state.edit
          ? (<EditComment handleSubmit={this.handleSubmit} movie={this.state.movie} handleChange={this.handleChange} updateComment={this.updateComment}/>)
          : null
      }
      <br/>
    </div>)
  }
}
