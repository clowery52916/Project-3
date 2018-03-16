import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import Comment from '../comments/Comment'
import styled from 'styled-components'

const postContainer = styled.div `
  display: flex;
  width: 95vw;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: space-around;
`

export default class MovieComment extends Component {

  state = {
    newComment: {
      title: '',
      description: ''
    }
  }

  handleMovieCommentChange = (event) => {
    //console.log(id)
    const attribute = event.target.name
    //console.log(attribute)
    const comment = {
      ...this.state.newComment
    }
    console.log(comment)
    //console.log(comment)
    //const movieChange = newMovie.find(movie => movie._id === id)
    comment[attribute] = event.target.value

    this.setState({newComment: comment})
  }

  handleSubmit = async (event) => {
    //event.preventDefault()
    this.props.createNewComment(this.state.newComment)
  }

  render() {

    return (<div>
      <h4>Post about this Movie!
      </h4>

      <form onSubmit={this.handleSubmit()}>

        <textarea type="submit" placeholder="Movie Title" name='title' value={this.state.newComment.title} onChange={this.handleMovieCommentChange}/>
        <br/>
        <br/>

        <textarea type='submit' placeholder='Tell us your thoughts!' name='description' value={this.state.newComment.description} onChange={this.handleMovieCommentChange}/>
        <button type='onChange'>Create</button>
      </form>
    </div>)
  }
}
