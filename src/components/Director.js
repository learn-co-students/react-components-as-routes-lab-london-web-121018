import React from 'react'

const Director = (props) => {
  return(
    <div>
      <h3>{props.director.name}</h3>
      <ul>
        {
          props.director.movies.map(movie =>
            <li>{movie}</li>
          )
        }
      </ul>
    </div>
  )
}

export default Director;
