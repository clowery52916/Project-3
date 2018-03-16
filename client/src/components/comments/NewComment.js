import React, {Component} from 'react';
import axios from "axios";
import {Redirect} from 'react-router-dom'
import CommentView from './CommentView'
import Comment from './Comment'

export default class NewComment extends Component {

  state = {
   redirectToComment: ""
 };

    newComment = payload => {
   axios.post(`/api/comment`, payload).then(res => {
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
       return <Redirect to={`/users/${this.state.redirectToComment}`}/>
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
       <label htmlFor='aboutMe'>About Me: </label>
       <input
           type='text'
           name='aboutMe'
           value={this.state.aboutMe}
           onChange={this.handleChange}
       />
       <button type='submit'>Create New User</button>
       </form>
     </div>
   );
 }
}
