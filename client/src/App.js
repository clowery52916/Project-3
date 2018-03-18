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

          <Route exact="exact" path="/" component={Login}/>
            <Route exact="exact" path='/movies' component={AllMovies}/>
            <Route exact="exact" path='/movies/:Id/' component={SingleMovie}/>
            <Route exact='exact' path='movies/:movieId/comments' component={MovieComment}/>

          <Route exact='exact' path='/user/:Id' component={User}/>
          {/* this route will take you to a specific user */}
          <Route exact="exact" path='/comments' component={Comment}/>
          <Route exact='exact' path='/movies/:Id/comment' component={CommentView}/>

           {/* <Route exact='exact' path='/comments/:id/delete' component={DeleteComments}/> */}
          <Route exact='exact' path='/movies/:Id/comments/edit' componenet={EditComment}/>

          <Route exact='exact' path='/movies/:Id/comments/show' component={Show}/>


          {/* //this is the actual id of the movie & what we need to call on when we are trying to access specific movie */}
          <Route exact='exact' path='/movies/:Id/comments' component={NewComment}/>

          <Route exact="exact" path='ratings' component={Ratings}/>
          <SingleMovie />
          <AllMovies/>
          <Comment/>
        </Switch>
      </div>
    </Router>)
  }
}
