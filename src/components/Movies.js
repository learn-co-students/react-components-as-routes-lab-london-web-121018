import React from 'react';
import { movies } from '../data';



const Movies = () => {

  return (

    <div>
      <h1>Movies Page</h1>
        {movies.map(movie =>
          <div>
            <h3>{movie.title} ({movie.time}) </h3>
          <br />
          Genres: <ul>
            {movie.genres.map(g => <li>{g}</li>)}
          </ul>
      </div>
        )}
    </div>
  );
};

export default Movies;
