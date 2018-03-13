import React, { Component } from 'react'
import axios from 'axios'

export default class Comments extends Component {


  state = {
    movieId:[]
  }

  handleChange = (event) => {
    const name = event.target.name
    const newState = {...this.state}
    newState[name] = event.target.value
    this.setState(newState)
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const payload = {
      name: this.state.name,
      description: this.state.description
    }
    await axios.post('/:id/comments', payload)
    await this.props.getAllComments()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input onChange={this.handleChange} type="text" name="name" value={this.state.name}/>
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input onChange={this.handleChange} type="text" name="description" value={this.state.description}/>
        </div>
        <button>Submit</button>
      </form>
    )
  }

}

// toggleShowNewForm = () => {
//   this.setState({
//     showNewForm: !this.state.showNewForm
//   })
// }
