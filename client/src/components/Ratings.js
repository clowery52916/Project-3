import React, { Component } from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import ReactDOM from 'react-dom';
import { FAB } from 'react-material-design'


export default class Ratings extends Component {

  state = {
    ratings: [],

  }

  componentWillMount() {
    this.getAllRatings()
  }

  getAllRatings = async () => {
    const rating = await axios.get('/ratings')
    this.setState({ratings: rating.data})
  }


  render() {
    return (

      <div>
      <h1>Review this Movie</h1>
        {this.state.ratings.map(rating => (<Link key={rating.data} to={`/${rating}`}>
          <h3>Title: {rating.rating}</h3>
        </Link>))
      }
    </div>
  )
  }
}
