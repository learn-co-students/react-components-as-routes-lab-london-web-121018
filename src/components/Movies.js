import React from "react";
import { movies } from "../data";

let mov = movies;

const Movies = () => {
  return (
    <div>
      <h1> Movies Page</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          <h3>Name: {movie.title}</h3>
          <p>Metascore: {movie.metascore}</p>
          <p>Running Time: {movie.time}</p>
          <p>Genres:</p>
          <ul>
            {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
