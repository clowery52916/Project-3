import React, {Component} from 'react';
import axios from "axios";
import {Redirect} from 'react-router-dom'
import Comment from './Comment'

export default class NewComment extends Component {

  state = {
   redirectToComment: ""
 };

    newComment = payload => {
   axios.post(`/api/comment/:id`, payload).then(res => {
   console.log(res.data)
     const newCommentId = res.data._id
     this.setState({ redirectToComment: newCommentId })


   }).catch((err)=>{
       console.log(err)
   })
 };

 handleChange = event => {
   const newState = { ...this.state };
   newState[event.target.name] = event.target.value;
   this.setState(newState);
 };

 handleSubmit = event => {
   event.preventDefault();
   this.newComment(this.state);
 };

 render() {
   if (this.state.redirectToComment){
       return <Redirect to={`/comment/${this.state.redirectToComment}`}/>
   }
   return (
     <div>
       <h1>Post a new Comment!</h1>
       <form onSubmit={this.handleSubmit} >

       <input
         type="text"
         name="movieTitle"
         value={this.state.movieTitle}
         onChange={this.handleChange}
       />
       <br/>
       <label htmlFor='stuff'>Whhhhaaaaattt: </label>
       <input
           type='text'
           name='stuff'
           value={this.state.comment}
           onChange={this.handleChange}
       />
       <button type='submit'>Create New Comment</button>
       </form>
     </div>
   );
 }
}
