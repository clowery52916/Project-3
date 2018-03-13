import React, { Component } from 'react';
import axios from 'axios'
import Movies from './Movies'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'


export default class Movie extends Component {
  state ={
    movie:[]
  }

  componentWillMount() {
    this.getAllMovies()
  }
  getAllMovies = async () => {
        const res = await axios.get('/movie')
        console.log(res.data)
        this.setState({movie: res.data})
    }

  render() {
    return (
      <div>
        <h3>{this.props.movie.title}</h3>
        <img src={this.props.movie.miviePoster} alt={this.props.movie.title} />
        <h3>{this.props.movie.description}</h3>

      </div>
    );
  }

}
