import React, {Component} from 'react';
import axios from "axios";
import {Redirect, Link} from 'react-router-dom'
import Comment from './Comment'
import AllMovies from '../movies/AllMovies'

export default class NewComment extends Component {

  // state = {
  //   redirectToComment: '',
  //   comment: {}
  // }
  //
  // componentWillMount() {
  //   this.getMovieComments()
  // }
  //
  // getMovieComments = async () => {
  //
  //   const res = await axios.get(`/api/movies/${this.state.comment.Id}`)
  //   console.log(res)
  //   this.setState({comment: res.data})
  //
  // }
  //
  // newComment = payload => {
  //   axios.post(`/api/movies/:Id/comments/:Id`, payload).then(res => {
  //     console.log(res.data)
  //     const newCommentId = res.data._id
  //     this.setState({redirectToComment: newCommentId})
  //
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // }
  //
  // handleChange = event => {
  //   const newState = {
  //     ...this.state
  //   }
  //   newState[event.target.name] = event.target.value
  //   this.setState(newState)
  // }
  //
  // handleSubmit = event => {
  //   event.preventDefault()
  //   this.newComment(this.state)
  // }

  state = {
    comment: [],
    edit: false,
    delete: false,
    redirect: false
  };
  componentWillMount() {
    this.getAllComments()
  }

  getAllComments = async () => {
    const movieId = this.props.match.params.Id
    const res = await axios.get(`/api/movies/${movieId}/comments`)
    console.log(res)
    this.setState({comments: res.data})
  }

  createNewComment = async() => {
    const movieId = this.props.match.params.Id
    const res = await axios.post(`/api/movies/${movieId}/comments/`)
      this.setState({comments: res.data.comment})
   }
  render() {
    if (this.state.redirectToComment)
    return <Redirect to={'api/comments/'}/>
    return (<div>
      <h1>Post a new Comment!</h1>
             <form onSubmit={this.handleSubmit}>

               <input type="text" name="commentTitle" value={this.state.comment.title} onChange={this.handleChange}/>
               <br/>
               <label htmlFor='stuff'></label>
               <textarea type='text' name='stuff' value={this.state.comment.description} onChange={this.handleChange}/>
             <button type='submit'>Create New Comment</button>
       </form>
      {
        this.state.comment.map(comment => <Link key={comment._id} to={`/comments/${comment._id}`} cons={this.setState.comment}>
          <br/>
          <br/>

        </Link>)

      }
    </div>)
  }

}

//   render() {
//     if (this.state.redirectToComment) {
//       return <Redirect to={'api/comments/'}/>
//     }
//     return (<div>
//       <h1>Post a new Comment!</h1>
//       <form onSubmit={this.handleSubmit}>
//
//         <input type="text" name="commentTitle" value={this.state.comment.title} onChange={this.handleChange}/>
//         <br/>
//         <label htmlFor='stuff'></label>
//         <input type='text' name='stuff' value={this.state.comment.description} onChange={this.handleChange}/>
//         <button type='submit'>Create New Comment</button>
//       </form>
//
//     </div>)
//   }
// }
