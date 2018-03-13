import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import User from './components/User'
import axios from 'axios'
import syledComponent from 'styled-components'
import NavBar from './components/NavBar'
import Movies from './components/Movies'
import Ratings from './components/Ratings'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export default class App extends Component {

  render() {
    return (<Router>
      <div>
        <NavBar/>
        <Switch>
          <Route exact="exact" path="/" component={User}/>
          <Route path='/movies' component={Movies}/>
          <Route path='/ratings' component={Ratings}/>

        </Switch>
      </div>
    </Router>)
  }
}
