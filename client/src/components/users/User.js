import React, {Component} from 'react';
import SingleMovie from '../movies//SingleMovie'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

export default class User extends Component {


  state = {
    name: {},
    comment: []
  }

    componentWillMount() {
      this.getUser()
    }
    getUser = async () => {
      const userId = this.props.match.params.Id
      const res = await axios.get(`/api/user`)
      console.log(res.data)
      this.setState({user: res.data})

    }
    createNewUser = async (newUser) => {
      const userId = this.props.match.params.Id
      const res = await axios.post(`/api/user/${userId}/comment/`, {comment: newUser})
      this.setState({user: res.data.user})
      this.getMovie()
    }


  handleChange = (event) => {
    const newState = {
      ...this.state
    }
    newState[event.target.name] = event.target.value
    this.setState(newState)
  }

  saveNewUser = (event) => {
    event.preventDefault()
    this.state.createNewUser
    this.setState({name: ''})
  }

  render() {
    return (<div>
      <h1>Sign Up for your ticket to the Red Carpet!</h1>
      <form onSubmit={this.saveNewUser}>

        <label htmlFor="name">User Name</label>

        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>

        <button type="Link">
          <Link to="/movies" className="Movies">Sign In!
          </Link>
        </button>
      </form>
    </div>)
  }
}
