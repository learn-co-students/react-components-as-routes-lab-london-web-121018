import React from 'react';
import { movies } from '../data';

const renderMovie = (movie) => {
  return (
    <div>
      <h3 style={{ display: 'inline' }}>{movie.title}</h3> ({movie.time} minutes)
      <ul>
        {movie.genres.map(genre => <li>{genre}</li>)}
      </ul>
      <hr />
    </div>
  );
};

const renderMovies = movies.map(renderMovie)

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies}
    </div>
  );
};

export default Movies;
