import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route , Link} from 'react-router-dom'

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
