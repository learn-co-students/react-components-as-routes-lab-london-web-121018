import React from 'react'

const Movie = (props) => {
  return(
    <div>
      <h3>{props.movie.title}</h3>
      <h3>{props.movie.time}</h3>
      <ul>
        {
          props.movie.genres.map(genre =>
            <li>{genre}</li>
          )
        }
      </ul>
    </div>
  )
}

export default Movie;
