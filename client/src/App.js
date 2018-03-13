import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import syledComponent from 'styled-components'
import NavBar from './components/NavBar'
import User from './components/User'
import Movies from './components/Movies'
import Ratings from './components/Ratings'
import Comments from './components/Comments'
import Movie from './components/Movie'


export default class App extends Component {

  render() {
    return (<Router>
      <div>
        <NavBar/>
        <Switch>
          <Route exact="exact" path="/" component={User}/>
          <Route exact="exact" path='/movies' component={Movies}/>
          <Route exact="exact" path='/movie/:id' component={Movie}/>
          <Route exact="exact" path='/movie/:id/comments ' component={Comments}/>
          <Route exact="exact" path= '/movie/:id/ratings' component={Ratings}/>


        </Switch>
      </div>
    </Router>)
  }
}
