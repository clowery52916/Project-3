import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route , Link} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
          <Router>
            <div>
              <Switch>
                <Link to="/movies" className="Movie">Movies
                <br/>
                <Link to="/comments" className="Comment">Comments
              </Link>
              </Link>
              </Switch>
            </div>
          </Router>
        );
    }
}
