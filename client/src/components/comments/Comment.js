import React, {Component} from 'react';
import axios from 'axios'
import Movies from '../movies/Movies'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import NewComment from './NewComment'
import CommentView from './CommentView'
import styled from 'styled-components'
import movie from '../movies/Movie'
import EditComment from './EditComment'

export default class Comment extends Component {
  state = {
    comment: {
      title: '',
      description: '',
    },
    edit: false,
    delete: false,
    redirect: false
  };
  componentWillMount() {
    this.getComment()
  }

  getComment = async () => {
    const res = await axios.get('/api/comments')
    this.setState({movie_id: res.data})

  }
  createNewComment = async () => {
    const res = await axios.post('/api/comments/:commentId')
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
    const res = await axios.patch(`/api/comments/${comment.id}/comment`)
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
    return(
      <EditComment/>
    )
  }
}
