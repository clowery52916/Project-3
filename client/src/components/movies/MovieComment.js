import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import Comment from '../comments/Comment'
import styled from 'styled-components'
import axios from 'axios'


export default class MovieComment extends Component {

  state = {
  comments: [],
  comment: {
    title: 'awesome',
    description: 'great movie!'
  }
    }


  componentWillMount() {
    this.getMovieComment()
  //  console.log(this.props.id)
  }
getMovieComment = async ()=> {
  const commentId = this.props.commentId
  const res =  await axios.get(`/api/movies/${commentId}/comments`)
  console.log(res)
  this.setState({comments: res.data})
}
  handleChange(event, id) {
    console.log(id)
    const newComment = {...this.state.comment}
    console.log(newComment)
  //  const commentChange = newComment.find(comment => comment._id === id)
  //  commentChange [event.target.name] = event.target.value

    this.setState({comment: newComment})
}
  handleSubmit = async (comment) => {
    const commentId = this.state.commentId
    const res = await axios.post(`/api/movies/${commentId}`)
    this.setState({comment: res.data.comment})
  }
deleteComment = async() => {
   const commentId = this.props.match.params.newCommentId
  const res = await axios.delete (`/api/movies/${commentId}/comment/${commentId}`)
  this.setState({comment: res.data.comment})
  this.getMovieComment()
}
  render() {

    return (<div>
      <h4>Post about this Movie!
      </h4>

      <form onSubmit={this.handleSubmit()}>

        <textarea type='submit' value={[this.state.title]} onChange={this.handleChange}/>
        <br/>
        <br/>
        <textarea type='submit' placeholder='Tell us your thoughts!' name='description' value={[this.state.description]} onChange={this.handleChange}/>
        </form>
        <button type='onChange'>Create</button>


    </div>
)
}
}
