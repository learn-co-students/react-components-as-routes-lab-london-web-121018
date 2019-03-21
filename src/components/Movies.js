import React from 'react';
import { movies } from '../data';



const Movies = () => {

  let allMovies = () => {
    return movies.map(movie => {
      return <div style={{ "padding": "20px" }}>
        {movie.title} <br />
        Runtime: {movie.time} <br />
        <ul>
          {movie.genres.map(genre => <li>{genre}</li>)}
        </ul>
      </div>
    }
    )
  }
  return (
    <div >
      <h1>Movies Page</h1>
      {allMovies()}
    </div>
  );
};

export default Movies;
