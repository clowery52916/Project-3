import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import Comment from '../comments/Comment'


export default class EditComment extends Component {

  render() {
    const editComment = this.props.comment

    return (<div>
      <h4>Edit Comment</h4>
      <Comment/>
      <form onSubmit={this.props.updateComment}>
        <label htmlFor="commentTitle">Movie Title:
        </label>
        <input type="submit" name="commentTitle" value={this.props.comment.editComment} onChange={this.props.handleChange}/>
        <br/>
        <br/>
        <label htmlFor='commentDescription'>Comment:
        </label>
        <textarea type='submit' name='commentDescription' value={this.props.comment.comment_description} onChange={this.props.handleChange}/>
        <button type='onChange ' onChange={this.props.handleChange}>Edit</button>
      </form>
    </div>);
  }
}
