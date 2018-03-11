import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Movies from './components/Movies'
import axios from 'axios'
import syledComponent from 'styled-components'
import NavBar from './components/NavBar'
import Comments from './components/Comments'

export default class App extends Component {
  render () {
    return (

      <Router>
        <div>
        <NavBar />
          <Switch>
            <Route exact path="/" component={Movies}/>
            <Route path ='/comments' component={Comments}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
