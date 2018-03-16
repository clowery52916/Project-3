import React, {Component} from 'react';
import axios from 'axios'
import Movies from './Movies'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import NewComment from '../comments/NewComment'
import CommentView from '../comments/CommentView'
import styled from 'styled-components'
import Comment from '../comments/Comment'
import MovieComment from './MovieComment'

export default class Movie extends Component {
  state = {
    movie: {},
    comments: []
    //edit: false,
    //delete: false,
    //  redirect: false,
    //comments:[],
  }

  componentWillMount() {
    this.getMovie()
  }

  getMovie = async () => {
    const movieId = this.props.match.params.Id
    const res = await axios.get(`/api/movies/${movieId}`)
    console.log(res.data)
    this.setState({movie: res.data})

  }
  createNewComment = async (newComment) => {
    const movieId = this.props.match.params.Id
    const res = await axios.post(`/api/movies/${movieId}/comments/`, {comments: newComment})
    this.setState({movie: res.data.movie})
    this.getMovie()
  }

  // updateMovieComment = async(comments) => {
  // const movieId = this.props.match.params.Id
  //const res = await axios.post(`/api/movie/${movieId}/comment/${#}`)
  //this.setState({comment: res.data.comment})
  // }

  deleteMovie = () => {
    const movieId = this.props.match.params.movieId
    axios.delete(`/api/movie/${movieId}/movie/${movieId}`).then(res => {
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
      */} {/* <h1>{this.state.movie.title}</h1>
      <p>
          Movie Title

        {this.state.movie.title}
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
    } {/* {
        this.state.edit
          ? (<MovieComment  />)
          : null
      } */
    } < br /> <MovieComment createNewComment={this.createNewComment}/>

  </div>)
  }
}
