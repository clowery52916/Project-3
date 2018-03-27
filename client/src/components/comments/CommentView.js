import React, {Component} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'
import Comment from './Comment'

const CommentContainer = styled.div `
  display: flex;
  width: 95vw;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: space-around;
`

export default class CommentView extends Component {

  getComment = () => {
    this.props.getComment(this.props.comments)
  }

  render() {
    this.props.getComment.map(comment => {
      return (<Comment key={comment._id} comment={this.props.comments} updateComment={this.props.updateComment} deleteComment={this.props.deleteComment} handleCommentChange={this.handleCommentChange}/>)
    })

    return (<div>
      <h1>All Comments</h1>
      {
        this.props.comments.map(comment => {

          return (<div>
            <Redirect to='/api/comments/commentId'/>
          </div>);
        })
      }

    </div>)
  }
}
