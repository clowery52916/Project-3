import React, {Component} from 'react';
import axios from 'axios'
import Movie from './Movie'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import styled from 'styled-components'
import NewComment from '../comments/NewComment'
import CommentView from '../comments/CommentView'
import Comment from '../comments/Comment'

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

export default class MovieComment extends Component {

  state = {
    user: '',
    movie: [],
    comment:[],
    ratings:[]

  }

componentDidMount =() => {
  const userId = this.props.match.params.userId



    async () => {
    const res = await axios.get(`/api/user{userId}`)
    this.setState({
      movies: res.data.title,
      comment: res.data.comment,
      ratings: res.data.ratings
    })

  }

}
createNewComment = () => {
  const userId = this.props.match.params.userId

    async() => {
    const res = await axios.post(`/api/user/${userId}/comment`)
    this.setState({
      comment: res.data.comment
    })
  }
}
handleCommentChange = (event, id) =>{
  console.log(id)
  const newComment = [...this.state.comment]
  console.log(newComment)
  const commentToEdit = newComment.find(comment => comment.id === id)
  commentToEdit[ event.target.title ] = event.target.value

  this.setState({ comment: newComment })
}

updateComment = (comment) => {
  const userId = this.props.match.params.userId

    async() =>{
    const res = await axios.patch(`/api/user/${userId}/comment/${comment._id}`, comment)
    this.setState ({
      comment: res.data.comment
    })
  }
}
deleteComment = (comment) => {
  const userId = this.props.match.params.userId

  async() => {
  const res = await axios.delete(`/api/user/${userId}/comment/${comment._id}`)
  this.setState ({
      comment: res.data.comment
    })
  }
}
}
