import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import Comment from '../comments/Comment'
import styled from 'styled-components'

const postContainer = styled.div `
  display: flex;
  width: 95vw;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: space-around;
`

export default class MovieComment extends Component {

  render() {
    const movieComment = this.props.comment

    return (<div>
      <h4>Post about this Movie! </h4>

      <form onSubmit={this.props.updateMovieComment}>

        <textarea type="submit" placeholder="Movie Title"  onChange={this.props.handleChange}/>
        <br/>
        <br/>

        <textarea type='submit' placeholder='Tell us your thoughts!'  onChange={this.props.handleChange}/>
        <button type='onChange ' onChange={this.props.handleChange}>Submit</button>
      </form>
    </div>);
  }
}
