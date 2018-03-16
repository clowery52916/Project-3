import React, {Component} from 'react'
import axios from 'axios'
import {Link } from 'react-router-dom'



export default class Show extends Component {
  state = {
    comment: {
      title: '',
      description: '',
    },
    {
    delete:false,
    edit:false,
    redirect:false
  }
    componentDidMount() {
      axios.get('/api/comment/' + this.props.match.params.id)
      .then(res => {
        this.setState({comment: res.data})
      })
    }
    delete(id){
      console.log(id)
      axios.delete('/api/comment/' +id)
      .then((result) => {
        this.props.history.push('/')
      })
    }
  }
render() {
    return(
      <div>
        <h3 class='title'>{this.state.comment.title}</h3>
        <Link to={`/edit/${this.state.comment._id}`} class='btn btn-success'>Edit</Link>
        <button onClick={this.delete.comment}</button>
      </div>
    )
  }
}

\
