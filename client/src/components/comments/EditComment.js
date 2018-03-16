import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import Comment from './Comment'
import Movie from '../movies/Movie'

export default class EditComment extends Component {

  render() {
    const updateComment = this.props.comment._id

    return (
            <div>
                <form onSubmit={this.props.updateUser}>
                <label htmlFor='title'>Fuck THIS!!!: </label>
                <input name='title'
                    onChange={this.props.handleChange}
                    value={this.props.comment}
                />
                <br />
                <label htmlFor='aaaahhh'>commy: </label>
                <input name='description'
                    onChange={this.props.handleChange}
                    value={this.props.comment}
                />
                <button onClick={this.props.handleSubmit}>Update Comment</button>
                </form>
            </div>

)
}
}
