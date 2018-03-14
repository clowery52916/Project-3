import React, {Component} from 'react';
import axios from 'axios'
import Movies from './Movies'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Comment from './Comment'
import styled from 'styled-components'
import NewComment from './NewComment'
import Ratings from './Ratings'

const CommentContainer = styled.div `
  width: 225px;
  height: 225px;
  position: relative;
  input, textarea {
    background: transparent;
    border: dotted;
    margin: 5px 0;
    font-size: 1.5rem;
  }
`

export default class Movie extends Component {

  state = {
    movie: []
  }

  componentWillMount() {
    this.getAllMovies()
  }

  getAllMovies = async () => {
    const res = await axios.get('/api/movies/:id')
    this.setState({movie: res.data})

  }

  render() {

    return (<div>

      <NewComment/>
      <Ratings/>
    </div>
    ) } }
