import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => <div>
        <h1>{actor.name}</h1>
        <h2>Movies:</h2>
        {actor.movies.map(movie=>
      <h3>{movie}</h3>)}
      </div>)}
    </div>
  );
};

export default Actors;
