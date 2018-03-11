import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'




export default class Comments extends Component {


  render() {
    return (
      <Router>
        <div>
        <Comments />
          <Switch>
            <Route exact path="/" component={Comments}/>
          </Switch>
        </div>
      </Router>
    );
  }

}
