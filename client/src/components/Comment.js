import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route , Link} from 'react-router-dom'
import Movie from './Movie'
import styled from 'styled-components'

const CommentContainer = styled.div`
  display: flex;
  width: 95vw;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: space-around;
`

export default class Comment extends Component {

    state = {
      user: '',
      comments: []
    };
    componentDidMount = () => {
      const userId = this.props.match.params.userId

      // We need to get info about the user with this ID
      // Use axios to make a get request
      axios
        .get(`/api/user/${userId}`)
        .then(res => {
          console.log(res.data)
          this.setState({
            user: res.data.name,
            comments: res.data.comments
          })
        })
        .catch(err => console.log(err))

      // Once resolved, setState for the user
      // Display info about user and comments
    };

    createNewComment = () => {
      const userId = this.props.match.params.userId
      axios.post(`/api/user/${userId}/comment`).then((res) => {
        this.setState({ comments: res.data.comments })
      })
    }

    handleCommentChange = (event, id) => {
      console.log(id)
      const newComments = [ ...this.state.comments ]
      console.log(newComments)
      const commentChange = newComments.find(comment => comment._id === id)
      commentChange[ event.target.name ] = event.target.value

      this.setState({ comments: newComments })
    }

    updateComment = (comment) => {

      // comment should look like {_id: '12314sdfa23d', name: 'newName', description: 'new desc'}
      const userId = this.props.match.params.userId
      axios.patch(`/api/user/${userId}/comment/${comment._id}`, comment).then(res => {
        this.setState({ comments: res.data.comments })
      })
    }

    deleteComment = (comment) => {
      const userId = this.props.match.params.userId
      axios.delete(`/api/user/${userId}/comment/${comment._id}`).then(res => {
        this.setState({ comments: res.data.comments })
      })
    }

    render () {
      return (
        <div>
          <h1>{this.state.user}'s Comment Board</h1>
          <button onClick={this.createNewComment}>New Comment</button>
          <div>
            <label htmlFor="dateOrganizer">Sort Comments By:</label>
            <select name="dateOrganizer">
              <option value="newest">Newest Comment</option>
              <option value="oldest">Oldest Comment</option>
            </select>
          </div>
          <CommentContainer>
            {this.state.comments.map(comment => {
              return (
                <Comment key={comment._id}
                  comment={comment}
                  updateComment={this.updateComment}
                  deleteComment={this.deleteComment}
                  handleCommentChange={this.handleCommentChange}
                />)
            })}
          </CommentContainer>
        </div>
      )
    }
  }
