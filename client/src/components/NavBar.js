import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (<Router>
      <div>
        <Switch>

          <Link to="/movies" className="Movie">Movies
          </Link>
        </Switch>
        <br/>
        <Switch>
          <Link to="/api/movies/:id/comments" className="Comments">Comments

          </Link>
        </Switch>
      </div>
    </Router>);
  }
}
