
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import App from '../App'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
          <Router>
            <div>
              <Switch>
                <Link to="/movies" className="butt">Movies</Link>
                <Link to="/comments" className="butt">Comments</Link>
              </Switch>
            </div>
          </Router>
        );
    }
}
