import React, {Component} from 'react';
import axios from 'axios'
import AllMovies from '../movies/AllMovies'
import SingleMovie from '../movies/SingleMovie'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import styled from 'styled-components'
import EditComment from './EditComment'
import CommentView from './CommentView'
import Show from './Show'

const CommentContainer = styled.div `
  flex-position: relativ
  input, textarea {
    background: transparent;
    border-style: ridge;
    margin: 5px 0;
    font-size: 0.5rem;
  }
`
export default class Comment extends Component {

  state = {
    movie: {
      title: "",
      description: ""
    },
    editShowView: false,
    deleteShowView: false,
    redirect: false
  };
  componentWillMount() {
    this.getMovieComment()
  }

  getMovieComment = async () => {

    const movieId = this.state.movieId
    const res = await axios.get(`/api/movies/${movieId}`)
    // console.log(res)
    this.setState({movie: res.data})
  }

  componentDidMount() {
    this.updateMovie();
  }

  updateMovie = () => {
    const movieId = this.state.movieId;
    axios.post(`/api/movies/${movieId}`).then(res => {
      this.setState({movie: res.data.movie})
    }).catch(err => {
      console.log(err);
    });
  };

  deleteShowView = () => {
    this.setState({
      deleteShowView: !this.state.deleteShowView
    });
  };

  editShowView = () => {
    this.setState({
      editShowView: !this.state.editShowView
    });
  };

  editMovie = event => {
    event.preventDefault();
    const movieId = this.props.match.params.movieId;
    const payload = {
      title: this.state.movie.title,
      description: this.state.movie.description
    };
    axios.patch(`/api/movies/${movieId}`, payload).then(res => {
      console.log(res.data);
      this.setState({movie: res.data});
    });

    this.updateMovie();
  };

  deleteMovie = () => {
    const movieId = this.props.match.params.movieId;
    this.setState({redirect: true});

    axios.delete(`/api/movies/${movieId}`).catch(err => {
      console.log(err);
    }).then(() => {
      this.props.populatePage();
    })
  }

  handleChange = event => {
    const newComment = {
      ...this.state.movie
    }
    newComment[event.target.title] = event.target.value
    this.setState({movie: newComment});
    console.log(event.target.value);
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="api/movies/:Id/movies"/>;
    }
    return (<div>
      <p>
        Post on Here
      </p>
      <form onSubmit={this.handleSubmit}>
        <CommentContainer>

          <input onChange={this.handleChange} type="text" placeholder="Movie Title" value={this.state.name}/>

          <div>

            <textarea onChange={this.handleChange} type="text" placeholder="What are your thoughts?" value={this.state.description}/>
          </div>
        </CommentContainer>
        <button>Submit</button>
        <button onSubmit={this.editShowView}>Edit Post</button>
        <button onSubmit={this.deleteShowView}>Delete Post</button>
      </form>
      {
        this.state.deleteShowView
          ? (<div>
            <p>Do you really want to delete this post? This action cannot be undone.</p>
            <br/>
            <button onSubmit={this.deleteShowView}>Confirm Delete</button>{" "}
            <button onSubmit={this.movie}>Nope!</button>
          </div>)
          : null
      }

      {
        this.state.editShowView
          ? (<EditComment handleSubmit={this.updateMovie} movie={this.state.movie} handleChange={this.handleChange} updateMovie={this.updateMovie}/>)
          : null
      }
      <br/>
      <Link to="/" onSubmit={this.props.login}>Return to login page</Link>
    </div>);
  }
}
