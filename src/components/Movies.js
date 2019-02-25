import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map(movie => <div><h1>Name:{movie.title}</h1>
        <h2>Time:{movie.time}</h2>
        <h3>Genres:</h3>{movie.genres.map(genre => 
          <li>{genre}</li>)}</div>)}
    </div>
  );
};

export default Movies;
