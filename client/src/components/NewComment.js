import React, {Component} from 'react';
import axios from "axios";
import {Redirect} from 'react-router-dom'
import CommentView from './CommentView'

export default class NewComment extends Component {

  state = {
    redirectToCommentView: ""
  };

  createNewComment = payload => {
    axios.post(`/api/movies`, payload).then(res => {
      console.log(res.data)
      const commentId = res.data._id
      this.setState({redirectToCommentView: commentId})

    }).catch((err) => {
      console.log(err)
    })
  };

  handleChange = event => {
    const newState = {
      ...this.state
    };
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.createNewComment(this.state);
  };

  render() {
    if (this.state.redirectToCommentView) {
      return <Redirect to={`/commentView/${this.state.redirectToCommentView}`}/>
    }
    return (<div>
      <h4>Post a new Comment</h4>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="movieName">Movie Title:
        </label>
        <input type="text" name="movieName" value={this.state.movieName} onChange={this.handleChange}/>
        <br/>
        <br/>
        <label htmlFor='commentDescription'>Comment:
        </label>
        <textarea type='text' name='commentDescription' value={this.state.commentDescription} onChange={this.handleChange}/>
        <button type='submit'>Post New Comment</button>
      </form>
    </div>);
  }
}
