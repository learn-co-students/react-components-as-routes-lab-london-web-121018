import React from 'react';
import { actors } from '../data';

const Actors = () => {

  let allActors = () => {
    return actors.map(actor => {
      return <div style={{ "padding": "20px" }}>
        {actor.name}
        {actor.movies.map(movie => <li>{movie}</li>)}
      </div>
    })
  }
  return (
    <div style={{ "padding": "10px" }}>
      <h1>Actors Page</h1> <br />
      {allActors()}
    </div>
  );
};

export default Actors;
