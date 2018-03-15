import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import User from './User'


export default class Login extends Component {

  state = {
    users: [ { _id: '1234', name: 'jim' } ],
    redirectToUser: ''
  }

  getAllUsers = () => {
    axios.get('/api/user').then((res) => {
      console.log(res.data)
      this.setState({ users: res.data })
    })
  }

  createNewUser = (payload) => {

    // payload object looks like {name: "some name"}
    axios.post('/api/user', payload).then((res) => {
      const newUserId = res.data[ res.data.length - 1 ]._id
      this.setState({ redirectToUser: newUserId })
    })
  }

  componentDidMount () {
    this.getAllUsers()
  }

  render () {
    if (this.state.redirectToUser !== '') {
      return <Redirect to={`/user/${this.state.redirectToUser}`} />
    }
    return (
      <div>
        <h1>Welcome Back, Please select a {User.name} below</h1>
        <ul>
          {this.state.users.map((user) => {
            return (
              <li key={user._id}>
                <Link to={`/user/${user._id}`}>
                  {User.name}
                </Link>
              </li>
            )
          })}
        </ul>
        <User createNewUser={this.createNewUser} />
      </div>
    )
  }
}
