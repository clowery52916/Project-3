import React, {Component} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Movie from '../movies/Movie'
import NewComment from './NewComment'
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'
import Comment from './Comment'
import EditComment from './EditComment'

const CommentContainer = styled.div `
  display: flex;
  width: 95vw;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: space-around;
`

export default class CommentView extends Component {

  state = {
    comment: '',
    comments: []
  };
  componentWillMount() {
    this.getComment()
  }

  getComment = async () => {
    const res = await axios.get('/api/comment')
    this.setState({movie_id: res.data})

  }
  createNewComment = async () => {
    const res = await axios.post('/api/comment/:commentId')
    this.setState({comments: res.data.comment})
  }

  handleCommentChange = (event, id) => {
    console.log(id)
    const newComments = [...this.state.comments]
    console.log(newComments)
    const commentChange = newComments.find(comment => comment._id === id)
    commentChange[event.target.name] = event.target.value

    this.setState({comments: newComments})
  }

  updateComment = async (comment) => {
    const res = await axios.patch(`/api/comment/${comment.id}/comment`)
    this.setState({comments: res.data.comment})
  }

  deleteComment = () => {
    const commentId = this.props.match.params.commentId
    axios.delete(`/api/comment/${commentId}/comment/${commentId}`).then(res => {
      this.setState({comments: res.data.comments})
      this.getComments()
    })
  }

  render() {
    this.state.comment.map(comments => {
      return (<Comment key={comments._id} comment={comments} updateComment={this.state.updateComment} deleteComment={this.state.deleteComment} handleCommentChange={this.handleCommentChange}/>)
    })

    return (<div>
      <h1>{this.state.comment.title}</h1>
      <p>

        {this.state.comment.description}
      </p>
      <button onClick={this.editShow}>Edit Comment</button>
      <button onClick={this.deleteShow}>Delete Comment</button>
      <EditComment handleSubmit={this.handleSubmit} comment={this.state.comment} handleChange={this.handleChange} updateComment={this.updateComment}/>

      <br/>
      <Link to="/" onClick={this.props.login}>Back to Home</Link>
    </div>)
  }
}
