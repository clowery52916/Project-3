import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import Comment from '../comments/Comment'
import styled from 'styled-components'
import axios from 'axios'



export default class MovieComment extends Component {

    state = {
      redirectToComment: ""
    };

    createMovieComment = payload => {
      axios.post(`/api/movies/:movieId/comments'`, payload).then(res => {
      console.log(res.data)
        const movieCommentId = res.data._id
        this.setState({ redirectToComment: movieCommentId })


      }).catch((err)=>{
          console.log('this pathfor api/movies/:movieId/comments is not showing', err)
      })
    };

    handleChange = event => {
      const newState = { ...this.state };
      newState[event.target.name] = event.target.value;
      this.setState(newState);
    };

    handleSubmit = event => {
      event.preventDefault();
      this.createMovieComment(this.state);
    };

    render() {
      if (this.state.redirectToComment){
          return <Redirect to={`/comments/${this.state.redirectToComment}`}/>
      }
      return (
        <div>
          <h1>Post a comment about this Movie!</h1>
          <form onSubmit={this.handleSubmit} >
          <h3 htmlFor="movieTitle">Movie Title </h3>
          <br/>
          <input type="text" name="movieTitle" value={this.state.movieTitle}
            onChange={this.handleChange}/><br/>
          <h3 htmlFor='post'>Post </h3>
          <br/>
          <textarea
              name='post'
              value={this.state.post}
              onChange={this.handleChange}
          />
          <br/>
          <button type='submit'>Create New Comment</button>
          </form>
        </div>
      );
    }
  }

// const postContainer = styled.div `
//   display: flex;
//   width: 95vw;
//   justify-content: space-around;
//   flex-wrap: wrap;
//   align-content: space-around;
// `
//
// export default class MovieComment extends Component {
//
//   state = {
//     newComment: {
//       title: '',
//       description: ''
//     }
//   }
//
//   handleMovieCommentChange = (event) => {
//     //console.log(id)
//     const attribute = event.target.name
//     //console.log(attribute)
//     const comment = {
//       ...this.state.newComment
//     }
//     console.log(comment)
//     //console.log(comment)
//     //const movieChange = newMovie.find(movie => movie._id === id)
//     comment[attribute] = event.target.value
//
//     this.setState({newComment: comment})
//   }
//
//   handleSubmit = async (event) => {
//     //event.preventDefault()
//     this.props.createNewComment(this.state.newComment)
//   }
//
//   render() {
//
//     return (<div>
//       <h4>Post about this Movie!
//       </h4>
//
//       <form onSubmit={this.handleSubmit()}>
//
//         <textarea type="submit" placeholder="Movie Title" name='title' value={this.state.newComment.title} onChange={this.handleMovieCommentChange}/>
//         <br/>
//         <br/>
//
//         <textarea type='submit' placeholder='Tell us your thoughts!' name='description' value={this.state.newComment.description} onChange={this.handleMovieCommentChange}/>
//         <button type='onChange'>Create</button>
//       </form>
//     </div>)
//   }
// }
