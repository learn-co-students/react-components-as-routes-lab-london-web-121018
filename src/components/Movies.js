import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const renderMovies = movies.map(movie => {
    return (<div>
      <h2>{movie.title}</h2>
      <p>Time: {movie.time}</p>
      <ul>
        {movie.genres.map(genre => <li>{genre}</li>)}
      </ul>
    </div>);
  }) 
  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies}
    </div>
  );
};

export default Movies;
