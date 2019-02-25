import React from 'react';
import { actors } from '../data';

const renderActor = (actor) => {
  return (
    <div>
      <h3 style={{ display: 'inline' }}>{actor.name}</h3>
      <ul>
        {actor.movies.map(movie => <li>{movie}</li>)}
      </ul>
      <hr />
    </div>
  );
};

const renderActors = actors.map(renderActor)

const Actors = () => {
  return (
    <div>
        <h1>Actors Page</h1>
        {renderActors}
    </div>
  );
};

export default Actors;
