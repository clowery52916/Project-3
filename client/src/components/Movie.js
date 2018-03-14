import React, {Component} from 'react';
import axios from 'axios'
import Movies from './Movies'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import styled from 'styled-components'
import NewComment from './NewComment'
import CommentView from './CommentView'
import Comment from './Comment'




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
    this.getSingleMovie()
  }

  getSingleMovie = async () => {
    const res = await axios.get('/api/movies/:id')
    this.setState({movie_id: res.data})

}

  render() {
    return (<div>
          <h1>FUCK ME!!!!!</h1>
        <Comment/>


        </div>
        )
      }
    }
