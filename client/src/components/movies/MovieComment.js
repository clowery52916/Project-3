// import React, {Component} from 'react';
// import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
// import Comment from '../comments/Comment'
// import AllMovies from './movies/AllMovies'
// import styled from 'styled-components'
// import axios from 'axios'
//
//
// export default class MovieComment extends Component {
//
//   state = {
//   movies: [],
//   comment: {
//     title: 'awesome',
//     description: 'great movie!'
//   }
//     }
//
//
//   componentWillMount() {
//     this.getComment()
//   //  console.log(this.props.id)
//   }
// getComment = async ()=> {
//   const movieId = this.props.movieId
//   const res =  await axios.get(`/api/movies/${this.props.id}/comments`)
//   console.log(res)
//   this.setState({comments: res.data
//   })
// }
//   handleChange(event, id) {
//     console.log(id)
//     const newComment = {...this.state.comment}
//     console.log(newComment)
//   //  const commentChange = newComment.find(comment => comment._id === id)
//   //  commentChange [event.target.name] = event.target.value
//
//     this.setState({comment: newComment})
// }
//   handleSubmit = async (comment) => {
//     const movieId = this.state.movieId
//     const res = await axios.post(`/api/movies/${movieId}`)
//     this.setState({comment: res.data.comment})
//   }
// deleteComment = async() => {
//    const movieId = this.props.match.params.newMovieId
//   const res = await axios.delete (`/api/movies/${movieId}/comment/${movieId}`)
//   this.setState({comment: res.data.comment})
//   this.getComment()
// }
//   render() {
//
//     return (<div>
//       <h4>Post about this Movie!
//       </h4>
//
//       <form onSubmit={this.handleSubmit()}>
//
//         <textarea type='submit' value={this.state.comment.title} onChange={this.handleChange}/>
//         <br/>
//         <br/>
//         <textarea type='submit' placeholder='Tell us your thoughts!' name='description' value={this.state.comment.description} onChange={this.handleChange}/>
//         </form>
//         <button type='onChange'>Create</button>
//
//
//     </div>
// )
// }
