import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import styled from 'styled-components'

const NavBarContainer = styled.div `
  display: flex;
  justify-content: space-around;
  padding: 6px;
  background: red;
`

export default class Navbar extends Component {
  render() {
    return (<NavBarContainer>
      <h1>Red Carpet Rundown</h1>
      <ul>
        <li>
          <Link to="/comments">Comments</Link>
        </li>
        <li>
          <Link to="/movies">All Movies</Link>
        </li>
        <li>
          <Link to="/user/testUserId">My Movies</Link>
        </li>
      </ul>
    </NavBarContainer>)
  }
}
