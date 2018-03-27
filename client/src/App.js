import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import syledComponent from 'styled-components'
import NavBar from './components/NavBar'
import User from './components/users/User'
import AllMovies from './components/movies/AllMovies'
import Ratings from './components/Ratings'
import Comment from './components/comments/Comment'
import NewComment from './components/comments/NewComment'
import CommentView from './components/comments/CommentView'
import MovieComment from './components/movies/MovieComment'
import Login from './components/users/Login'
import Show from './components/comments/Show'
import EditComment from './components/comments/EditComment'
import SingleMovie from './components/movies/SingleMovie'

export default class App extends Component {

  render() {
    return (<Router>
      <div>
        <NavBar/>
        <Switch>

          <Route  exact= 'exact' path="/" component={User}/>
          <Route  exact='exact' path='/movies' component={AllMovies}/>
          <Route  exact path='/movies/:Id/' component={SingleMovie}/>
          <Route  exaxt path='/comments' component={Comment}/>
          <Route exact="exact" path='/ratings' component={Ratings}/>
          <AllMovies/>
          {/* <SingleMovie /> */}
          <User/>
        </Switch>
      </div>
    </Router>)
  }
}
