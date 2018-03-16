import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import Comment from './Comment'
import ComponentContainer from './Comment'


export default class EditComment extends Component {

  render() {
    const updateComment = this.props.commentId

    return (
            <ComponentContainer>
                <form onSubmit={this.props.updateComment}>
                    <input name='title'
                    onChange={this.props.handleChange}
                    value={this.props.comment}/>
                    <input name='description'
                    onChange={this.props.handleChange}
                    value={this.props.comment}/>
                <button onSubmit={this.props.handleSubmit}>Update Comment</button>
                </form>
            </ComponentContainer>

)
}
}
