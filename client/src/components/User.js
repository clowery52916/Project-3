import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class User extends Component {
  state = {
    name: ''
  }



  render () {
    return (
      <div>
        <h1>Sign Up for your ticke to the Red Carpet!</h1>
        <form onSubmit={this.saveNewUser}>
          <div>
            <label htmlFor="name">User Name</label>
            <input type="text" name="userName"
              value={this.state.name}
              onClick={this.handleClick}
            />
          </div>
          <button type="onClick">Create New User</button>
        </form>
      </div>

    )
  }
}
