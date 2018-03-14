import React, { Component } from 'react';
import Movie from './Movie'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import styled from 'styled-components'



export default class User extends Component {
  state = {
    name: '',

  }

  handleChange = (event) => {
    const newState = { ...this.state }
    newState[ event.target.name ] = event.target.value
    this.setState(newState)
  }

  saveNewUser = (event) => {
    event.preventDefault()
    this.state.createNewUser
    this.setState({ name: '' })
  }

  render () {
    return (
      <div>
        <h1>Sign Up for your ticke to the Red Carpet!</h1>
        <form onSubmit={this.saveNewUser}>
          <styledDiv>
            <label htmlFor="name">User Name</label>
            <input type="text" name="name" value='submit'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </styledDiv>
          <button type="Link">
          <Link to="/movies" className="Movies">Sign In!
          </Link>
          </button>
        </form>
      </div>

    )
  }
}
