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
import Show from './components/comments/Show'
import EditComment from './components/comments/EditComment'


export default class App extends Component {

  render() {
    return (<Router>
      <div>
        <NavBar/>
        <Switch>

          <Route exact="exact" path="/" component={Login}/>

          <Route exact='exact' path='/movies/:movieId/users' component={User}/>
            <Route exact="exact" path='/comments' component={Comment}/>
                <Route exact ='exact' path ='/api/comments/:id' component={CommentView}/>
                {/* <Route exact='exact' path='/comments/:id/delete' component={DeleteComments}/> */}
                <Route exact='exact' path='/comments/:id/edit' componenet={EditComment}/>
                <Route exact='exact' path='/comments/:id' component={NewComment}/>
                <Route exact='exact' path='/comments/new' component={Show}/>
                <Route exact="exact" path='/movie/:Id/' component={Movie}/>
                {/* //this is the actual id of the movie & what we need to call on when we are trying to access specific movie */}
                <Route exact='exact' path='/movie' component={MovieComment}/>
                <Route exact="exact" path='/movies' component={Movies}/>
                <Route exact="exact" path='ratings' component={Ratings}/>

          <User/>
          <Movie/>
          <Comment/>
        </Switch>
      </div>
    </Router>)
  }
}
