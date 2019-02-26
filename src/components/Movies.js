import React from 'react'
import { movies } from '../data'

const Movies = () => {
  const allMovies = movies.map(movie => {
    return (
      <div key={movie.title}>
        <p>{movie.title}</p>
        <p>{movie.time}</p>
        <ul>
          {movie.genres.map(genre => (
            <li>{genre}</li>
          ))}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Movies Page</h1>
      {allMovies}
    </div>
  )
}

export default Movies
