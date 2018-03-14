import React, {Component} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Movie from './Movie'
import NewComment from './NewComment'
import styled from 'styled-components'

const CommentContainer = styled.div `
  display: flex;
  width: 95vw;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: space-around;
`

export default class Comment extends Component {

  state = {
    comment: '',
    comments: []
  };
  componentDidMount = () => {
    const commentId = this.props.match.params.commentId

    // We need to get info about the comment with this ID
    // Use axios to make a get request
    axios.get(`/api/comment/${commentId}`).then(res => {
      console.log(res.data)
      this.setState({comment: res.data.name, comments: res.data.comments})
    }).catch(err => console.log(err))

    // Once resolved, setState for the comment
    // Display info about comment and comments
  };

  createNewComment = () => {
    const commentId = this.props.match.params.commentId
    axios.post(`/api/comment/${commentId}/comment`).then((res) => {
      this.setState({comments: res.data.comments})
    })
  }

  handleCommentChange = (event, id) => {
    console.log(id)
    const newComments = [...this.state.comments]
    console.log(newComments)
    const commentChange = newComments.find(comment => comment._id === id)
    commentChange[event.target.name] = event.target.value

    this.setState({comments: newComments})
  }

  updateComment = (comment) => {

    // comment should look like {_id: '12314sdfa23d', name: 'newName', description: 'new desc'}
    const commentId = this.props.match.params.commentId
    axios.patch(`/api/comment/${commentId}/comment/${comment._id}`, comment).then(res => {
      this.setState({comments: res.data.comments})
    })
  }

  deleteComment = (comment) => {
    const commentId = this.props.match.params.commentId
    axios.delete(`/api/comment/${commentId}/comment/${comment._id}`).then(res => {
      this.setState({comments: res.data.comments})
    })
  }

  render() {
    return (<div>
      <h1>{this.state.comment}'s Comment Board</h1>
      <button onClick={this.createNewComment}>New Comment</button>
      <div>
        <label htmlFor="dateOrganizer">Sort Comments By:</label>
        <select name="dateOrganizer">
          <option value="newest">Newest Comment</option>
          <option value="oldest">Oldest Comment</option>
        </select>
      </div>
      <CommentContainer>
        {
          this.state.comments.map(comment => {
            return (<Comment key={comment._id} comment={comment} updateComment={this.updateComment} deleteComment={this.deleteComment} handleCommentChange={this.handleCommentChange}/>)
          })
        }
      </CommentContainer>
    </div>)
  }
}
