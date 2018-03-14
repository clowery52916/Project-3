import React, { Component } from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'



export default class Ratings extends Component {

  state = {
    ratings: [],

  }

  componentWillMount() {
    this.getAllRatings()
  }

  getAllRatings = async () => {
    const res = await axios.get('/api/ratings')
    this.setState({ratings: res.data})

  }

  render() {
    return (

      <div>
        <h1>Rate Me!</h1>
         <h3> ***** </h3>
          {this.state.ratings.map(rating =>
            <Link key={rating._id} to={`/ratings/${rating._id}`} cons={this.state.rating}>
                <h3>{rating.rate}</h3>

            </Link>)
      }
    </div>
  )
  }
}
