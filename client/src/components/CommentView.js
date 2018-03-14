import React, {Component} from 'react';
import axios from 'axios'
import Movies from './Movies'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import NewComment from './NewComment'
import styled from 'styled-components'

const CommentContainer = styled.div `
  width: 225px;
  height: 225px;
  position: relative;
  input, textarea {
    background: transparent;
    border: dotted;
    margin: 5px 0;
    font-size: 1.5rem;
  }
`
export default class CommentView extends Component {

  handleChange = (event) => {
    this.props.handleCommentChange(event, this.props.comment)
  }
  render() {
    return (<CommentContainer>

      <p>????</p>

      <p onClick={() => this.props.handleCommentChange(this.props.comment)}>X</p>
      <input type="text" name="comment_title" value={this.props.comment} onChange={this.handleChange} onBlur={() => this.props.handleCommentChange(this.props.comment.comment_title)}/>
      <textarea value={this.props.comment} onChange={this.handleChange} onBlur={() => this.props.handleCommentChange(this.props.comments)}/>
    </CommentContainer>)
  }
}
