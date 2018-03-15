import React, {Component} from 'react';
import axios from 'axios'
import Movies from '../movies/Movies'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import NewComment from './NewComment'
import CommentView from './CommentView'
import styled from 'styled-components'
import movie from '../movies/Movie'

const CommentContainer = styled.div `
  width: 225px;
  height: 225px;
  position: relative;
  input, textarea {
    background: transparent;
    border-style: groove;
    margin: 5px 0;
    font-size: 1.5rem;
  }
`
const Button = styled.div`
  color: blue;
`
export default class Comment extends Component {

  handleChange = (event) => {
    this.props.handleCommentChange(event, this.props.comment._id)
  }
  render() {
    return (<CommentContainer>

      <h1>{movie.title}</h1>
      <h3 onClick={() => this.props.deleteComment(this.props.comment)}>Delete Comment</h3>
      <input type='text' name='title'
      value={this.props.comment} onChange={this.handleChange}
      onBlur={() => this.props.updateComment(this.props.comment)}/>
    <textarea name='description' value={this.props.comment}
      onChange={this.handleChange}
      onBlur={() => this.props.updateComment(this.props.comment)}/>
    </CommentContainer>)
  }
}
