import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import App from '../App'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <Link to="/movies" className="butt">Movies</Link>
                <Link to="/ratings" className="butt">Ratings</Link>
            </div>
        );
    }
}
