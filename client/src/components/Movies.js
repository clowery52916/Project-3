import React, { Component } from 'react'
import axios from 'axios'
import App from '../App'


export default class Movies extends Component {

  state = {
      allMovies: []
    }

// Step 3: Call 'componentWillMount' for making your API call
// componentWillMount(){
//   // Step 4: Use axios.get to retrieve all saved gifs from our API
//   axios.get("https://api.themoviedb.org/3/movie/550?api_key=f29ae0f962a86b4c284ead3457d95fd5")
//        // Step 5: Save the response array to this.state.movies
//        .then((response) => {
//          const movies = response.data;
//          this.setState({allMovies: movies});
//        })
//        .catch((error) => {
//          console.error("Error: ", error);
//        });
// }
render() {
  return(
    <h1>Winners from this years Academy Awards are... </h1>
  )
}
}
