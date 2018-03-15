import React, {Component} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Movie from '../movies/Movie'
import NewComment from './NewComment'
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'

const CommentContainer = styled.div `
  display: flex;
  width: 95vw;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: space-around;
`


  export default class CommentView extends Component {

    state = {
      comment: '',
      comments: []
    };
    componentWillMount() {
      this.getComment()
    }

    getComment = async () => {
      const res = await axios.get('/api/comments')
      this.setState({movie_id: res.data})

}
    createNewComment = async() => {
      const res = await axios.post('/api/comments/:commentId')
      this.setState({comments: res.data.comment})
    }


    handleCommentChange = (event, id) => {
      console.log(id)
      const newComments = [...this.state.comments]
      console.log(newComments)
      const commentChange = newComments.find(comment => comment._id === id)
      commentChange[event.target.name] = event.target.value

      this.setState({comments: newComments})
    }

    updateComment = async(comment) => {
      const res = await axios.patch(`/api/comments/${comment.id}/comment`)
      this.setState({comments: res.data.comment})
    }
      // comment should look like {_id: '12314sdfa23d', name: 'newName', description: 'new desc'}

    //   const commentId = this.props.match.params.commentId
    //   axios.patch(`/api/comment/${commentId}/comment/${comment._id}`, comment).then(res => {
    //     this.setState({comments: res.data.comments})
    //   })
    // }

    deleteComment = (comment) => {
      const commentId = this.props.match.params.commentId
      axios.delete(`/api/comment/${commentId}/comment/${comment._id}`).then(res => {
        this.setState({comments: res.data.comments})
      })
    }


    render() {
      // this.state.comment.map(comments => {
      //   return (<Comment key={comments._id} comment={comments} updateComment={this.state.updateComment} deleteComment={this.state.deleteComment} handleCommentChange={this.handleCommentChange}/>)
      // })

      return (<div>
        <h1>{this.state.Comment} Comment Board</h1>
        <button onClick={this.createNewComment}>New Comment</button>
        <div>
          <label htmlFor="dateOrganizer">Sort Comments By:</label>
          <select name="dateOrganizer">
            <option value="newest">Newest Comment</option>
            <option value="oldest">Oldest Comment</option>
          </select>
        </div>
        <CommentContainer>

            console.log(comment)
        </CommentContainer>
      </div>)
    }
  }
