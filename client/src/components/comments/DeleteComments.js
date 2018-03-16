import React, {Component} from 'react';
import {Comment} from './Comment'

export default class DeleteComment extends Component {

  deleteComment = () => {
    this.props.deleteComment(this.props.comment)
  }

  render() {
    return (<div>
      <h3>{this.props.comment.description}</h3>
      <button onClick={this.deleteComment}>Delete Post</button>
    </div>);
  }
}
