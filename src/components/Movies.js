import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div className= 'movielist'>
    <h1>Movies Page</h1>
        {movies.map((movie, idx)=>{
          return(
          <div key={idx}>
          <h2>Name: {movie.title}</h2>
          <p>Time: {movie.time}</p>
          <p>Genres:</p>
          {movie.genres.map((genre, idx)=>{return <li key={idx}>{genre}</li>})}
          </div>)
        })}
    </div>
  );
};

export default Movies;

// title: 'Trolls',
//     time: 92,
//     genres: ['Animation', 'Adventure', 'Comedy', 'Family', 'Fantasy']
