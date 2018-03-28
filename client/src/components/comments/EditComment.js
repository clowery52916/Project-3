import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import Comment from './Comment'
import ComponentContainer from './Comment'

export default class EditComment extends Component {

  render() {
    const updateMovie = this.props.movieId

    return (<ComponentContainer>
      <form onSubmit={this.props.updateMovie}>
        <input name='title' onChange={this.props.handleChange} value={this.props.movie}/>
        <input name='description' onChange={this.props.handleChange} value={this.props.movie}/>
        <button onSubmit={this.props.handleSubmit}>Update Movie</button>
      </form>
    </ComponentContainer>)
  }
}
