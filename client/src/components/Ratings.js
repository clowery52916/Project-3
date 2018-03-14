import React, {Component} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

export default class Ratings extends Component {

  state = {
    ratings: []
  }

  componentWillMount() {
    this.getAllRatings()
  }

  getAllRatings = async () => {
    const rating = await axios.get('/api/ratings')
    this.setState({ratings: rating.data})
  }

  render() {
    return (<div>
      <h4>Review this Movie</h4>
      {
        this.state.ratings.map(rating => (<Link key={rating.data} to={`/${rating.data}`}>
          <h3>Title: {rating.data}</h3>
        </Link>))
      }
    </div>)
  }
}
