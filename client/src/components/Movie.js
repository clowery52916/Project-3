import React, { Component } from 'react';
import axios from 'axios'
import Movies from './Movies'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Comment from './Comment'
import styled from 'styled-components'


const CommentContainer = styled.div`
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

export default class Movie extends Component {



  handleChange = (event) => {
    this.props.handleCommentChange(event, this.props.comment)
  }
  render () {
    return (
      <CommentContainer>
        <p onClick={() => this.props.comment(this.props.comment)}>X</p>
        <input type="text" name="comment_title"
          value={this.props.comment} onChange={this.handleChange}
          onBlur={() => this.props.comment(this.props.comment.comment_title)}
        />
        <textarea  value={this.props.comment}
          onChange={this.handleChange}
          onBlur={() => this.props.comment(this.props.comments)}
        />
      </CommentContainer>
    )
  }
}
