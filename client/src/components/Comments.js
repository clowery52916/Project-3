import React, { Component } from 'react'
import axios from 'axios'

export default class Comments extends Component {

  render () {
    {this.props.movies}
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
