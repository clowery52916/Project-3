import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import syledComponent from 'styled-components'
import NavBar from './components/NavBar'
import User from './components/User'
import Movies from './components/Movies'
import Ratings from './components/Ratings'
import Comment from './components/Comment'
import Movie from './components/Movie'
import NewComment from './components/NewComment'
import CommentView from './components/CommentView'

export default class App extends Component {

  render() {
    return (<Router>
      <div>
        <NavBar/>
        <Switch>
          <Route exact="exact" path="/" component={User}/>
          <Route exact="exact" path='/movies' component={Movies}/>
          <Route exact="exact" path='/movie/:id' component={Movie}/>
          <Route exact="exact" path='/comments' component={Comment}/>
          <Route exact="exact" path='/comments/:id' component={NewComment}/>
          <Route exact="exact" path='ratings' component={Ratings}/>

          <Movie/>
          <Comment/>
        </Switch>
      </div>
    </Router>)
  }
}
