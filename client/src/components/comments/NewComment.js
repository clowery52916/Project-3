import React, {Component} from 'react';
import axios from "axios";
import {Redirect} from 'react-router-dom'
import CommentView from './CommentView'
import Comment from './Comment'

export default class NewComment extends Component {

  state = {
      title:'',
      description: ''
  };

  componentWillMount() {
    this.getAllComments()
  }

  getAllComments = async () => {
    const res = await axios.get('/api/comment')
    this.setState({comment: res.data})

  }
  handleChange = event => {
    this.setState[event.target.name] = event.target.value;
    event.preventDefault()
  };

  handleSubmit = event => {
  axios.post('/api/comments/new', this.state)
  .then(res => {
                this.props.updateState(res.data.newComment)
                localStorage.setItem("userId", res.data.newComment._id)
                this.setState(res.data.newComment)
            })
            .catch((error) => { console.log(error) })
        event.preventDefault()
  };

  render() {
    if (this.state._id) {
      return <Redirect to={`/api/comments`}/>
    }
    return (<div>
      <h4>Post a new Comment</h4>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="movieName">Movie Title:
        </label>
        <input type="text" name="movieName" value={this.state.comment_title} onChange={this.handleChange}/>
        <br/>
        <br/>
        <label htmlFor='commentDescription'>Comment:
        </label>
        <textarea type='text' name='commentDescription' value={this.state.comment_description} onChange={this.handleChange}/>
        <button type='onChange ' onChange={this.handleChange}>Post New Comment</button>
      </form>
    </div>);
  }
}
