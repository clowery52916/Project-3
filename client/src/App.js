import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Movies from './components/Movies'
import axios from 'axios'
import syledComponent from 'styled-components'

export default class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Movies}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
