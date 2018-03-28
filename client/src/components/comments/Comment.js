import React, {Component} from 'react';
import axios from 'axios'
import AllMovies from '../movies/AllMovies'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import styled from 'styled-components'
import EditComment from './EditComment'
import CommentView from './CommentView'
import Show from './Show'


const CommentContainer = styled.div `
  flex-position: relative
  input, textarea {
    background: transparent;
    border-style: ridge;
    margin: 5px 0;
    font-size: 0.5rem;
  }
`
export default class Comment extends Component {

  state = {
    movies:{
    comment:[ {
      title: 'This movie was great!',
      description: 'it is about a big ship'
    }],
    editShowView: false,
    deleteShowView: false,
    redirect: false
  }
}
  componentWillMount() {

    this.setState({comments: this.state.comment})
    console.log('show comment will mount')
    this.getMovieComment()
  }

  getMovieComment = async () => {

    const comments = this.state.comments
    const movieId = this.state.movies
    const res = await axios.get(`/api/movies/${movieId}/${comments}`)
    console.log('show this get comment for movie')
    this.setState({comment: res.data})
  }

  componentDidMount() {
    console.log('show this comment did mount')
    this.updateComment();
  }

  updateComment = () => {
    const commentId = this.state.commentId;
    axios.get(`/api/comments/${commentId}`).then(res => {
      console.log('show comment update route')
      this.setState({comment: res.data.comment})
    }).catch(err => {
      console.log('show update comment',err);
    })
      // this.updateComment();
  }

  // deleteShowView = () => {
  //   this.setState({
  //     deleteShowView: !this.state.deleteShowView
  //   });
  // };
  //
  // editShowView = () => {
  //     console.log('show showComment delete')
  //   this.setState({
  //     editShowView: !this.state.editShowView
  //   });
  // };

  // editComment = event => {
  //   event.preventDefault();
  //   const commentId = this.props.match.params.commentId;
  //   const payload = {
  //     title: this.state.comment.title,
  //     description: this.state.comment.description
  //   };
  //   axios.patch(`/api/comments/${commentId}`, payload).then(res => {
  //     console.log(res.data);
  //     console.log('show comment patch')
  //     this.setState({comment: res.data});
  //   });

  deleteComment = () => {
    const commentId = this.props.match.params.commentId;
    this.setState({redirect: true});
      console.log('show delete')
    axios.delete(`/api/comments/${commentId}`).catch(err => {

      console.log(err);
    }).then(() => {
      this.props.getComment()
      // console.log('show at the bottom getComment')
    })
  }

  handleChange = event => {
    const newComment = {
      ...this.state.comment
    }
    newComment[event.target.title] = event.target.value
    this.setState({comment: newComment});
    console.log(event.target.value);
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to='api/comments'/>;
    }
    return (<div>
      {/* {
      if this.state.comments.map(comment => <Link key={comment._id} to={`/movies/${comment._id}`} cons={this.setState.comment}>
      } */}
      <p>
        Post on Here
      </p>
      <form onSubmit={this.handleSubmit}>
        <CommentContainer>

          <input onChange={this.handleChange} type="text" placeholder="Movie Title" value={this.state.title}/>

          <div>

            <textarea onChange={this.handleChange} type="text" placeholder="What are your thoughts?" value={this.state.description}/>
          </div>
        </CommentContainer>
        <button>Submit</button>
      </form>
      <button onClick={this.editShowView}>Edit Post</button>
      <button onClick={this.deleteShowView}>Delete Post</button>

      {
        this.state.deleteShowView
          ? (<div>
            <p>Do you really want to delete this post? This action cannot be undone.</p>
            <br/>
            <button onClick={this.deleteShowView}>Confirm Delete</button>{" "}
            <button onClick={this.comment}>Nope!</button>
          </div>)
          : null
      }

      {
        this.state.editShowView
          ? (<EditComment handleSubmit={this.updateComment} comment={this.state.comment} handleChange={this.handleChange} updateComment={this.updateComment}/>)
          : null
      }
      <br/>
      <Link to="/" onClick={this.props.login}>Return to login page</Link>
    </div>);
  }
}
