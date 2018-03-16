import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import syledComponent from 'styled-components'
import NavBar from './components/NavBar'
import User from './components/users/User'
import Movies from './components/movies/Movies'
import Ratings from './components/Ratings'
import Comment from './components/comments/Comment'
import Movie from './components/movies/Movie'
import NewComment from './components/comments/NewComment'
import CommentView from './components/comments/CommentView'
import MovieComment from './components/movies/MovieComment'
import Login from './components/users/Login'

export default class App extends Component {

  render() {
    return (<Router>
      <div>
        <NavBar/>
        <Switch>

          <Route exact="exact" path="/" component={Login}/>
          <Route exact="exact" path='/movies' component={Movies}/>
          <Route exact="exact" path='/movies/:movieId' component={Movie}/>
          <Route exact='exact' path='/movies/:movieId/users' component={User}/>
          <Route exact='exact' path='/movie' component={MovieComment}/>
          <Route exact="exact" path='/comments' component={Comment}/>
          <Route exact="exact" path='/comment' component={NewComment}/>
          <Route exact="exact" path='ratings' component={Ratings}/>

          <Movie/>
          <Comment/>
        </Switch>
      </div>
    </Router>)
  }
}
