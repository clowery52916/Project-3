import React, {Component} from 'react';
import axios from "axios";
import {Redirect, Link} from 'react-router-dom'
import Comment from './Comment'
import Movies from '../movies/Movies'

export default class NewComment extends Component {

  state = {
   redirectToComment: '',
   comment: {

   }
 }

 componentWillMount() {
   this.getMovieComments()
 }

 getMovieComments = async () => {

   const res = await axios.get(`/api/movies/${this.state.comment.id}`)
   console.log(res)
   this.setState({comment: res.data})

 }


    newComment = payload => {
   axios.post(`/api/movies/comment/:id`, payload).then(res => {
   console.log(res.data)
     const newCommentId = res.data._id
     this.setState({ redirectToComment: newCommentId })


   }).catch((err)=>{
       console.log(err)
   })
 }

 handleChange = event => {
   const newState = { ...this.state }
   newState[event.target.name] = event.target.value
   this.setState(newState)
 }

 handleSubmit = event => {
   event.preventDefault()
   this.newComment(this.state)
 }

 render() {
   if (this.state.redirectToComment){
       return <Redirect to={'api/comments/:id/comment'}/>
   }
   return (
     <div>
       <h1>Post a new Comment!</h1>
       <form onSubmit={this.handleSubmit} >

       <input
         type="text"
         name="commentTitle"
         value={this.state.commentTitle}
         onChange={this.handleChange}
       />
       <br/>
       <label htmlFor='stuff'> </label>
       <input
           type='text'
           name='stuff'
           value={this.state.comment}
           onChange={this.handleChange}
       />
       <button type='submit'>Create New Comment</button>
       </form>

     </div>
   )
 }
}
