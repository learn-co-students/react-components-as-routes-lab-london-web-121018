import React from 'react'

const Actor = (props) => {
  return(
    <div>
      <h3>{props.actor.name}</h3>
      <ul>
        {
          props.actor.movies.map(actor =>
            <li>{actor}</li>
          )
        }
      </ul>
    </div>
  )
}

export default Actor;
