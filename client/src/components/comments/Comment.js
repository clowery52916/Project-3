import React, {Component} from 'react';
import axios from 'axios'
import Movies from '../movies/Movies'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import styled from 'styled-components'
import EditComment from './EditComment'
import CommentView from './CommentView'
import Show from './Show'

const CommentContainer = styled.div `
  flex-position: relativ
  input, textarea {
    background: transparent;
    border-style: ridge;
    margin: 5px 0;
    font-size: 0.5rem;

  }
`
export default class Comment extends Component {

  state = {
    comment: {
      title: "",
      description: ""
    },
    editShowView: false,
    deleteShowView: false,
    redirect: false
  };

  componentDidMount() {
    this.updatePage();
  }

  updatePage = () => {
    const commentId = this.state.commentId;
    axios.get(`/api/comments/${commentId}`).then(res => {
      this.setState({comment: res.data.comment})
    }).catch(err => {
      console.log(err);
    });
  };

  deleteShowView = () => {
    this.setState({
      deleteShowView: !this.state.deleteShowView
    });
  };

  editShowView = () => {
    this.setState({
      editShowView: !this.state.editShowView
    });
  };

  updateEditComment = event => {
    event.preventDefault();
    const commentId = this.props.match.params.commentId;
    const payload = {
      title: this.state.comment.title,
      description: this.state.comment.description
    };
    axios.patch(`/api/comments/${commentId}`, payload).then(res => {
      console.log(res.data);
      this.setState({comment: res.data});
    });

    this.updatePage();
  };

  deleteComment = () => {
    const commentId = this.props.match.params.commentId;
    this.setState({redirect: true});

    axios.delete(`/api/comments/${commentId}`).catch(err => {
      console.log(err);
    }).then(() => {
      this.props.populatePage();
    });
  };

  handleChange = event => {
    const newComment = {
      ...this.state.comment
    };
    newComment[event.target.name] = event.target.value
    this.setState({comment: newComment});
    console.log(event.target.value);
  };

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/comments"/>;
    }
    return (<div>

      <h1>{this.state.comment.title}</h1>
      {/* //this is where I am having issues, calling objects for title and description
         //need to figure this out ASAP!!!!!!
         //Also need to get the actual object to post AND delete */
      }
      <p>
        My Post
      </p>
      <form onSubmit={this.handleSubmit}>
        <CommentContainer>

         <input onChange={this.handleChange} type="text" placeholder="Movie Title" value={this.state.name}/>

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
